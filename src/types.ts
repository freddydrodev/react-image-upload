import type { Stack } from "@mui/material";
import type { FirebaseStorage } from "firebase/storage";

/**
 * The arguments that will be passed to `uploadImage`
 */
export type UploadImageArgs = {
  /**
   * The file to upload, or the URL of the file
   */
  file: File | string;
  /**
   * The Firebase Storage instance
   */
  storage: FirebaseStorage;
  /**
   * If this is a production upload
   */
  isProd?: boolean;
  /**
   * The path to upload the file to
   */
  path?: string;
};

/**
 * The type of the function that will be called to upload the file
 */
export type UploadImageType = (args: UploadImageArgs) => Promise<string>;

/**
 * The props that will be passed to the `ReactImagePicker` component
 */
export type ReactImagePickerProps = React.ComponentProps<typeof Stack> & {
  /**
   * The function that will be called when the user selects new images
   */
  onImageChange: (images: (File | string)[]) => void;
  /**
   * The initial images to show
   */
  initImages?: string[];
  /**
   * The label to display above the dropzone
   */
  label?: string;
  /**
   * The description to display below the label
   */
  description?: string;
  /**
   * The maximum number of files that can be uploaded
   */
  maxFiles?: number;
  /**
   * The icon to display on the delete button
   */
  deleteIcon?: React.ReactNode;
  /**
   * The background color of the delete button
   */
  deleteBtnColor?: string;
  /**
   * The color of the delete icon
   */
  deleteIconColor?: string;
  /**
   * The component to render for each local image
   */
  localImage?: (props: LocalImageType) => React.ReactNode;
  /**
   * Whether or not to hide the title
   */
  hideTitle?: boolean;

  /**
   * Gap between sections (ex: title, description, images, etc...) in pixels
   */
  sectionGap?: string;

  /**
   * Gap between images in pixels
   */
  imageGap?: string;

  /**
   * The number of images to display in the grid
   */
  imageGridCount?: number;

  /**
   * The border radius of the images
   */
  imageBorderRadius?: string;
};

/**
 * The props that will be passed to the `localImage` component
 */
export type LocalImageType = {
  /**
   * The URL of the image
   */
  src: string;
  /**
   * The width of the image
   */
  width: number;
  /**
   * The height of the image
   */
  height: number;
  /**
   * The style of the image
   */
  style: any;
  /**
   * The alt text of the image
   */
  alt: string;
  /**
   * The class name of the image
   */
  className?: string;
};
