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
 * Rule with optional custom message
 */
export type RuleWithMessage<T> =
  | T
  | {
      value: T;
      message: string;
    };

export type ImageType =
  | "image/*"
  | ".jpeg"
  | ".png"
  | ".gif"
  | ".webp"
  | ".jpg";

/**
 * Validation rules for file uploads
 */
export type FileValidationRules = {
  /**
   * Maximum file size in bytes
   */
  maxSize?: RuleWithMessage<number>;
  /**
   * Maximum number of files allowed
   */
  maxFiles?: RuleWithMessage<number>;
  /**
   * Accepted file types. Can be:
   * - Array of extensions (e.g., ['.jpg', '.png'])
   * - MIME type pattern (e.g., 'image/*')
   */
  accepted?: RuleWithMessage<ImageType[] | ImageType>;
};

/**
 * The props that will be passed to the `ReactImagePicker` component
 */
export type ReactImagePickerProps = {
  // Primary props that should be set first
  /**
   * The function that will be called when the user selects new images
   * @required
   */
  onImagesChanged: (images: (File | string)[]) => void;
  /**
   * Validation rules for file uploads
   */
  rules?: FileValidationRules;
  /**
   * The initial images to show
   * @default []
   */
  images?: (File | string)[];
  /**
   * The component to render for each local image
   */
  renderImage?: (props: renderImageType) => React.ReactNode;

  // Display configuration props
  /**
   * The label to display above the dropzone
   * @default "Images"
   */
  label?: string;
  /**
   * The description to display below the label
   */
  description?: string;
  /**
   * Validation function that takes current images and returns either null (valid) or an error message
   * Can be async to perform online validation
   */
  validate?: (
    images: (File | string)[]
  ) => Promise<string | null> | string | null;
  /**
   * Whether or not to hide the title
   * @default false
   */
  hideTitle?: boolean;

  // Delete button customization
  /**
   * The icon to display on the delete button
   */
  deleteIcon?: React.ReactNode;
  /**
   * The background color of the delete button
   * @default "#f44336"
   */
  deleteBtnColor?: string;
  /**
   * The color of the delete icon
   * @default "#ffffff"
   */
  deleteIconColor?: string;

  // Layout customization
  /**
   * Gap between sections (ex: title, description, images, etc...) in pixels
   * @default "15px"
   */
  sectionGap?: string;
  /**
   * Gap between images in pixels
   * @default "10px"
   */
  imageGap?: string;
  /**
   * The number of images to display in the grid
   * @default 3
   */
  imageGridCount?: number;
  /**
   * The border radius of the images
   * @default "15px"
   */
  imageBorderRadius?: string;

  /**
   * Additional CSS styles for the container
   */
  style?: React.CSSProperties;
  /**
   * Additional CSS class name for the container
   */
  className?: string;
};

/**
 * The props that will be passed to the `renderImage` component
 */
export type renderImageType = {
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
  style: React.CSSProperties;
  /**
   * The alt text of the image
   */
  alt: string;
  /**
   * The class name of the image
   */
  className?: string;
};
