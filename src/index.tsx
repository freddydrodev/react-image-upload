import * as React from "react";
import Dropzone from "dropzone";
import { Fab, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";

Dropzone.autoDiscover = false;

const ReactImageUpload: React.FC<{
  initImage?: string[];
  label?: string;
  description?: string;
  maxFiles?: number;
  onImageChange: (images: (File | string)[]) => void;
}> = ({ initImage, onImageChange, maxFiles = 5, label, description }) => {
  /**
   * IMAGES SELECTED BY THE USER
   */
  const [files, setFiles] = React.useState<(File | string)[]>(initImage ?? []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    // maxSize: 1024 * 1024 * 1,
    minSize: 1024,
    maxFiles: maxFiles,
    multiple: maxFiles === 1 ? false : true,
    onDropRejected(fileRejections, event) {
      console.log(fileRejections, event);

      const multipleText =
        fileRejections.length > 1
          ? "Fichiers ont été réfusés"
          : "Fichier a été réfusé";

      alert(`${fileRejections.length} ${multipleText}.`);
      // enqueueSnackbar(
      //   `Vos Fichiers doivent faire au plus 1Mb. format: Image!`,
      //   {
      //     variant: "error",
      //     style: { maxWidth: 300, fontSize: 12 },
      //   }
      // );
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

  console.log(files);

  const reachedLimit = files.length >= maxFiles;

  let gridTemplateColumns = "1fr 1fr 1fr";
  let size = 100;

  if (maxFiles === 1) {
    gridTemplateColumns = "1fr";
    size = 200;
  }

  if (maxFiles === 2) {
    gridTemplateColumns = "1fr 1fr";
    size = 160;
  }

  return (
    <Stack sx={{ "& .dropzone": { border: 0, p: 0 } }}>
      <Stack
        {...(!reachedLimit ? getRootProps({ className: "dropzone" }) : {})}
        spacing={2}
        sx={{ cursor: reachedLimit ? "auto" : "pointer" }}
      >
        <input {...getInputProps()} />
        <Typography
          fontWeight={700}
          fontSize="2rem"
          lineHeight="1em"
          textAlign="center"
        >
          {label ?? "Images"}
        </Typography>
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
        <Stack display="grid" sx={{ gridTemplateColumns, gap: "15px" }}>
          {files.map((file) => {
            const fileIsString = typeof file === "string";

            const _file = fileIsString
              ? { name: file as string, preview: file as string }
              : (file as File);

            const src =
              typeof _file === "string" ? _file : (_file as any).preview;

            return (
              <Stack
                sx={{
                  width: size,
                  height: size,
                  borderRadius: 1,
                  overflow: "hidden",
                  position: "relative",
                  margin: maxFiles === 1 ? "auto" : 0,
                }}
                key={src}
              >
                <img
                  src={src}
                  width={size}
                  height={size}
                  style={{ objectFit: "cover" }}
                  alt={typeof _file === "string" ? _file : (_file as any).name}
                />
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: size,
                    height: size,
                    borderRadius: 1,
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
                    color="secondary"
                    sx={{ boxShadow: "none" }}
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
                    <DeleteOutlineRounded />
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

export default ReactImageUpload;
