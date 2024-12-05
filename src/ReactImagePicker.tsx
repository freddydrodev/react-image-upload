import * as React from "react";
import Dropzone from "dropzone";
import { Fab, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { LocalImageType, ReactImagePickerProps } from "./types";

Dropzone.autoDiscover = false;

/**
 * A React component for selecting and displaying images using a drag-and-drop interface.
 *
 * @param {Object} props - The component props.
 * @param {(File | string)[]} [props.initImage] - Initial images to display.
 * @param {(images: (File | string)[]) => void} props.onImageChange - Callback triggered when the image list changes.
 * @param {number} [props.maxFiles=1] - Maximum number of files that can be selected.
 * @param {string} [props.label] - The label displayed for the image picker.
 * @param {string} [props.description] - Additional text to describe the image picker.
 * @param {React.ReactNode} [props.deleteIcon] - Custom delete icon to be used.
 * @param {string} [props.deleteBtnColor="#f44336"] - Color of the delete button.
 * @param {string} [props.deleteIconColor="#ffffff"] - Color of the delete icon.
 * @param {(props: LocalImageType) => React.ReactNode} [props.localImage] - Custom component to render images.
 * @param {boolean} [props.hideTitle=false] - Flag to hide the title.
 * @returns {JSX.Element} The ReactImagePicker component.
 */
export const ReactImagePicker: React.FC<ReactImagePickerProps> = ({
  initImages = [],
  onImageChange,
  maxFiles = 1,
  label = "Images",
  description,
  deleteIcon,
  deleteBtnColor = "#f44336",
  deleteIconColor = "#ffffff",
  localImage,
  hideTitle = false,
  sx = {},
  sectionGap = "20px",
  imageGap = "15px",
}) => {
  /**
   * IMAGES SELECTED BY THE USER
   */
  const [files, setFiles] = React.useState<(File | string)[]>(initImages);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    minSize: 1024,
    maxFiles: maxFiles,
    multiple: maxFiles === 1 ? false : true,
    onDropRejected(fileRejections, event) {
      const multipleText =
        fileRejections.length > 1
          ? "Fichiers ont été réfusés"
          : "Fichier a été réfusé";

      alert(`${fileRejections.length} ${multipleText}.`);
    },

    onDrop: (acceptedFiles) => {
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
      if (onImageChange) {
        onImageChange(newList);
      }
    },
  });

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

  const reachedLimit = files.length >= maxFiles;

  let gridTemplateColumns = "1fr 1fr 1fr";
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
    <Stack
      sx={{
        padding: "20px",
        boxSizing: "border-box",
        aspectRatio: 1,
        width: 400,
        ...sx,
        "& .dropzone": { border: 0, p: 0 },
        overflow: "visible",
      }}
    >
      <Stack
        {...(!reachedLimit ? getRootProps({ className: "dropzone" }) : {})}
        spacing={sectionGap}
        sx={{ cursor: reachedLimit ? "auto" : "pointer" }}
      >
        <input {...getInputProps()} />
        {!hideTitle && (
          <Typography
            fontWeight={700}
            fontSize="2rem"
            lineHeight="1em"
            textAlign="center"
          >
            {label}
          </Typography>
        )}
        <Typography
          fontWeight={500}
          fontSize="1rem"
          lineHeight="1.3em"
          textAlign="center"
        >
          {description ??
            (!reachedLimit
              ? "Vous pouvez ajouter les images en cliquant ici."
              : "Vous avez ajouté le maximum d'Images possible")}
        </Typography>
        <Stack
          display="grid"
          sx={{
            gridTemplateColumns,
            gap: imageGap,
            maxHeight: 380,
          }}
        >
          {files.map((file) => {
            const fileIsString = typeof file === "string";

            const _file = fileIsString
              ? { name: file as string, preview: file as string }
              : (file as File);

            const src =
              typeof _file === "string" ? _file : (_file as any).preview;

            const imgProps: LocalImageType = {
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
              <Stack
                alignItems="center"
                justifyContent="center"
                display="flex"
                sx={{
                  width: "100%",
                  aspectRatio: maxFiles === 1 ? undefined : 1,
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                  margin: maxFiles === 1 ? "auto" : 0,
                  // border: "1px solid #ececf0",
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
                key={src}
              >
                {localImage ? localImage(imgProps) : <img {...imgProps} />}
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 5,
                    zIndex: 10,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bgcolor: "rgba(255,255,255,0)",
                    backdropFilter: "blur(0)",
                    transition: "all linear 0.25s",
                    opacity: 0,

                    "&:hover": {
                      bgcolor: "rgba(255,255,255,0.25)",
                      backdropFilter: "blur(5px)",
                      opacity: 1,
                    },
                  }}
                >
                  <Fab
                    size="small"
                    color="error"
                    sx={{
                      boxShadow: "none",
                      bgcolor: deleteBtnColor,
                      color: deleteIconColor,
                    }}
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

                      onImageChange(_files);

                      e.stopPropagation();
                    }}
                  >
                    {deleteIcon ?? <DeleteIcon />}
                  </Fab>
                </Stack>
              </Stack>
            );
          })}
        </Stack>
        <Typography variant="caption" textAlign="center">
          {/* Chacune de vos images doit faire au plus 1Mb. <br /> Il vous faut
          aussi noter que seul les images de format (.JPEG, .JPG, .PNG) sont
          prise en compte.
          <br /> */}
          Le nombre maximum d&apos;image est {maxFiles}
        </Typography>
      </Stack>
    </Stack>
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
