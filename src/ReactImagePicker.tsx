import * as React from "react";
import Dropzone from "dropzone";
import { useDropzone } from "react-dropzone";
import {
  renderImageType,
  ReactImagePickerProps,
  FileValidationRules,
  RuleWithMessage,
} from "./types";
import { styled } from "@stitches/react";
import {
  Container,
  DropzoneContainer,
  Title,
  Description,
  ImageGrid,
  ImageContainer,
  DeleteButton,
  Overlay,
} from "./styles";

Dropzone.autoDiscover = false;

/**
 * Helper function to get rule value and message
 */
const getRuleValueAndMessage = <T,>(
  rule: RuleWithMessage<T> | undefined
): { value: T | undefined; message?: string } => {
  if (!rule) return { value: undefined };
  if (typeof rule === "object" && "value" in rule) {
    return { value: rule.value, message: rule.message };
  }
  return { value: rule };
};

/**
 * Default validation rules
 */
const DEFAULT_RULES: FileValidationRules = {
  maxSize: {
    value: 5 * 1024 * 1024,
    message: "File size must be less than 5MB",
  },
  maxFiles: { value: 1, message: "Maximum 1 file allowed" },
  accepted: { value: "image/*", message: "Only image files are accepted" },
};

/**
 * Validates a file against the provided rules
 */
const validateFile = (
  file: File,
  rules: FileValidationRules
): string | null => {
  const { value: maxSize, message: maxSizeMessage } = getRuleValueAndMessage(
    rules.maxSize
  );
  const { value: accepted, message: acceptedMessage } = getRuleValueAndMessage(
    rules.accepted
  );

  // Check file size
  if (maxSize && file.size > maxSize) {
    return (
      maxSizeMessage ??
      `File size must be less than ${(maxSize / (1024 * 1024)).toFixed(1)}MB`
    );
  }

  // Check file type
  if (accepted) {
    const acceptedTypes = Array.isArray(accepted)
      ? accepted.map((type) => type.toLowerCase())
      : [accepted.toLowerCase()];

    const fileExtension = `.${file.name.split(".").pop()?.toLowerCase()}`;
    const fileType = file.type.toLowerCase();

    const isAccepted = acceptedTypes.some((type) => {
      if (type === "image/*") {
        return fileType.startsWith("image/");
      }
      return type === fileExtension || type === fileType;
    });

    if (!isAccepted) {
      return (
        acceptedMessage ??
        `File type not accepted. Accepted types: ${acceptedTypes.join(", ")}`
      );
    }
  }

  return null;
};

/**
 * A React component for selecting and displaying images using a drag-and-drop interface.
 *
 * @param {Object} props - The component props.
 * @param {(File | string)[]} [props.images] - Initial images to display.
 * @param {(images: (File | string)[]) => void} props.onImagesChanged - Callback triggered when the image list changes.
 * @param {FileValidationRules} [props.rules] - Validation rules for the images.
 * @param {string} [props.label] - The label displayed for the image picker.
 * @param {string} [props.description] - Additional text to describe the image picker.
 * @param {boolean} [props.validate] - Flag to indicate if the image picker is in a valid state.
 * @param {React.ReactNode} [props.deleteIcon] - Custom delete icon to be used.
 * @param {string} [props.deleteBtnColor="#f44336"] - Color of the delete button.
 * @param {string} [props.deleteIconColor="#ffffff"] - Color of the delete icon.
 * @param {(props: renderImageType) => React.ReactNode} [props.renderImage] - Custom component to render images.
 * @param {boolean} [props.hideTitle=false] - Flag to hide the title.
 * @param {string} [props.sectionGap="15px"] - Gap between sections (ex: title, description, images, etc...) in pixels.
 * @param {string} [props.imageGap="10px"] - Gap between images in pixels.
 * @param {number} [props.imageGridCount=3] - The number of images to display in the grid.
 * @param {string} [props.imageBorderRadius="15px"] - The border radius of the images.
 * @returns {JSX.Element} The ReactImagePicker component.
 */
export const ReactImagePicker: React.FC<ReactImagePickerProps> = ({
  images = [],
  onImagesChanged,
  rules = DEFAULT_RULES,
  label = "Images",
  description,
  validate,
  deleteIcon,
  deleteBtnColor = "#f44336",
  deleteIconColor = "#ffffff",
  renderImage,
  hideTitle = false,
  sectionGap = "15px",
  imageGap = "10px",
  imageGridCount = 3,
  imageBorderRadius = "15px",
  style,
  className,
  ...props
}) => {
  const { value: maxFiles, message: maxFilesMessage } = getRuleValueAndMessage(
    rules.maxFiles
  );
  const { value: maxSize, message: maxSizeMessage } = getRuleValueAndMessage(
    rules.maxSize
  );
  const { value: accepted } = getRuleValueAndMessage(rules.accepted);

  /**
   * IMAGES SELECTED BY THE USER
   */
  const [files, setFiles] = React.useState<(File | string)[]>(images);
  const [validationMessage, setValidationMessage] = React.useState<
    string | null
  >(null);
  const [isValidating, setIsValidating] = React.useState(false);

  /**
   * Handle validation
   */
  React.useEffect(() => {
    if (!validate) return;

    const validateImages = async () => {
      setIsValidating(true);
      try {
        const result = await validate(files);
        setValidationMessage(result);
      } catch (error) {
        setValidationMessage(
          error instanceof Error ? error.message : "Validation failed"
        );
      } finally {
        setIsValidating(false);
      }
    };

    validateImages();
  }, [files, validate]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: accepted
      ? typeof accepted === "string"
        ? { [accepted]: [] }
        : accepted.reduce((acc, type) => ({ ...acc, [type]: [] }), {})
      : { "image/*": [] },
    minSize: 0,
    maxSize: maxSize,
    maxFiles: maxFiles,
    multiple: maxFiles === 1 ? false : true,
    onDropRejected(fileRejections, event) {
      const errors = fileRejections.map((rejection) => {
        const file = rejection.file;
        const error = rejection.errors[0];

        if (error.code === "file-too-large") {
          return (
            maxSizeMessage ??
            `${file.name} is too large. Maximum size is ${(
              maxSize! /
              (1024 * 1024)
            ).toFixed(1)}MB`
          );
        }

        if (error.code === "file-invalid-type") {
          return `${file.name} has an invalid type`;
        }

        if (error.code === "too-many-files") {
          return (
            maxFilesMessage ??
            `Maximum ${maxFiles} file${maxFiles === 1 ? "" : "s"} allowed`
          );
        }

        return error.message;
      });

      alert(errors.join("\n"));
    },
    onDrop: (acceptedFiles) => {
      // Validate each file against rules
      const validationErrors = acceptedFiles
        .map((file) => validateFile(file, rules))
        .filter((error): error is string => error !== null);

      if (validationErrors.length > 0) {
        alert(validationErrors.join("\n"));
        return;
      }

      const newList = [
        ...files,
        ...acceptedFiles
          .map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
          .filter(
            (file) =>
              files.filter((_file: File | string) => {
                if (typeof _file === "string") return false;
                return _file.name === file.name;
              }).length === 0
          ),
      ];

      /**
       * CHANGE THE LOCAL VERSION OF THE IMAGES
       */
      setFiles(newList);

      /**
       * CHANGE THE PARENT VERSION TOO
       */
      if (onImagesChanged) {
        onImagesChanged(newList);
      }
    },
  });

  /**
   * Handle initial File objects by creating preview URLs
   */
  React.useEffect(() => {
    const processedFiles = images.map((file) => {
      if (file instanceof File) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      }
      return file;
    });
    setFiles(processedFiles);
  }, [images]);

  /**
   * USED FOR PERFORMANCE
   */
  React.useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL((file as any).preview));
    },
    [files]
  );

  const reachedLimit = maxFiles ? files.length >= maxFiles : false;

  let gridTemplateColumns = `repeat(${imageGridCount}, 1fr)`;
  let size = 115;

  if (maxFiles === 1) {
    gridTemplateColumns = "1fr";
    size = 200;
  }

  if (maxFiles === 2) {
    gridTemplateColumns = "1fr 1fr";
    size = 175;
  }

  return (
    <Container className={className} style={style}>
      <DropzoneContainer
        {...(!reachedLimit ? getRootProps({ className: "dropzone" }) : {})}
        isDisabled={reachedLimit}
      >
        <input {...getInputProps()} />
        {!hideTitle && <Title>{label}</Title>}
        <Description hasError={!!validationMessage}>
          {isValidating
            ? "Validating..."
            : validationMessage ??
              description ??
              (!reachedLimit
                ? "Vous pouvez ajouter les images en cliquant ici."
                : maxFilesMessage ??
                  `Vous avez ajouté le maximum d'Images possible (${maxFiles})`)}
        </Description>
        <ImageGrid
          gridColumns="value"
          style={
            {
              "--grid-columns-value": imageGridCount,
              "--image-gap-value": imageGap,
              "--image-border-radius-value": imageBorderRadius,
            } as React.CSSProperties
          }
        >
          {files.map((file) => {
            const fileIsString = typeof file === "string";

            const _file = fileIsString
              ? { name: file as string, preview: file as string }
              : (file as File);

            const src =
              typeof _file === "string" ? _file : (_file as any).preview;

            const imgProps: renderImageType = {
              src: src,
              width: size,
              height: size,
              style: {
                objectFit: "cover",
                ...(maxFiles === 1 ? {} : { width: "100%", height: "100%" }),
              },
              alt: typeof _file === "string" ? _file : (_file as any).name,
            };

            return (
              <ImageContainer key={src} singleImage={maxFiles === 1}>
                {renderImage ? renderImage(imgProps) : <img {...imgProps} />}
                <Overlay>
                  <DeleteButton
                    color="default"
                    onClick={(e) => {
                      const _files = [
                        ...files.filter((f) => {
                          const isString = typeof f === "string";
                          const name = isString
                            ? (f as string)
                            : (f as File).name;

                          return name !== _file.name;
                        }),
                      ];

                      setFiles(_files);

                      onImagesChanged(_files);

                      e.stopPropagation();
                    }}
                  >
                    {deleteIcon ?? <DeleteIcon />}
                  </DeleteButton>
                </Overlay>
              </ImageContainer>
            );
          })}
        </ImageGrid>
      </DropzoneContainer>
    </Container>
  );
};

const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-trash"
    viewBox="0 0 16 16"
  >
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
  </svg>
);
