import { styled } from "@stitches/react";

export const Container = styled("div", {
  // padding: "20px",
  // boxSizing: "border-box",
  // width: 400,
  display: "flex",
  flexDirection: "column",
  border: "1px dashed #e0e0e0",
  // borderRadius: "15px",
  // backgroundColor: "rgba(0, 0, 0, 0.015)",
});

export const DropzoneContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  border: 0,
  padding: 0,
  variants: {
    isDisabled: {
      true: { cursor: "auto" },
      false: { cursor: "pointer" },
    },
  },
});

export const Title = styled("h2", {
  fontWeight: 700,
  fontSize: "2rem",
  lineHeight: "1em",
  textAlign: "center",
  margin: 0,
  marginTop: "15px",
});

export const Description = styled("p", {
  fontWeight: 500,
  fontSize: "1rem",
  lineHeight: "1.3em",
  textAlign: "center",
  margin: 0,
});

export const Message = styled("p", {
  fontSize: "0.75rem",
  lineHeight: "1.66",
  textAlign: "center",
  margin: 0,
  color: "rgba(0, 0, 0, 0.5)",
  variants: {
    hasError: {
      true: { color: "#d32f2f", fontSize: "0.8rem" },
      false: { color: "inherit" },
    },
  },
});

export const ImageGrid = styled("div", {
  display: "grid",
  maxHeight: 380,
  gridTemplateColumns: "repeat(var(--grid-columns, 3), 1fr)",
  gap: "var(--image-gap, 10px)",
  variants: {
    gridColumns: {
      value: {
        "--grid-columns": "var(--grid-columns-value, 3)",
        "--image-gap": "var(--image-gap-value, 10px)",
      },
    },
  },
  defaultVariants: {
    gridColumns: "value",
  },
});

export const ImageContainer = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "var(--image-border-radius-value, 15px)",
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "var(--image-border-radius-value, 15px)",
  },
  variants: {
    singleImage: {
      true: {
        maxWidth: "400px",
        margin: "0 auto",
      },
    },
  },
});

export const DeleteButton = styled("button", {
  width: 32,
  height: 32,
  borderRadius: "50%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  boxShadow: "none",
  variants: {
    color: {
      default: {
        backgroundColor: "#f44336",
        color: "#ffffff",
      },
    },
  },
});

export const Overlay = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  zIndex: 10,
  position: "absolute",
  top: 0,
  left: 0,
  backgroundColor: "rgba(255,255,255,0)",
  backdropFilter: "blur(0)",
  transition: "all linear 0.25s",
  opacity: 0,
  "&:hover": {
    backgroundColor: "rgba(255,255,255,0.25)",
    backdropFilter: "blur(5px)",
    opacity: 1,
  },
});
