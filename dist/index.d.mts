import * as React$1 from 'react';
import { FirebaseStorage } from 'firebase/storage';

/**
 * The arguments that will be passed to `uploadImage`
 */
type UploadImageArgs = {
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
type UploadImageType = (args: UploadImageArgs) => Promise<string>;
/**
 * Rule with optional custom message
 */
type RuleWithMessage<T> = T | {
    value: T;
    message: string;
};
type ImageType = "image/*" | ".jpeg" | ".png" | ".gif" | ".webp" | ".jpg" | "image/jpeg" | "image/png" | "image/gif" | "image/webp";
/**
 * Validation rules for file uploads
 */
type FileValidationRules = {
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
type ReactImagePickerProps = {
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
     * The message to display below the images
     */
    message?: string;
    /**
     * Whether or not to display the message as an error
     * @default false
     */
    hasError?: boolean;
    /**
     * Validation function that takes current images and returns either null (valid) or an error message
     * Can be async to perform online validation
     */
    validate?: (images: (File | string)[]) => Promise<string | null> | string | null;
    /**
     * Whether or not to hide the title
     * @default false
     */
    hideTitle?: boolean;
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
type renderImageType = {
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
declare const ReactImagePicker: React$1.FC<ReactImagePickerProps>;

/**
 * Uploads a file to Firebase Storage and returns the download URL.
 * @param {File|string} file The file to upload, or the URL of the file
 * @param {FirebaseStorage} storage The Firebase Storage instance
 * @param {boolean} [isProd=false] Whether or not this is a production upload
 * @param {string} [path='Images'] The path to upload the file to
 * @returns {Promise<string>} The download URL of the uploaded file
 */
declare const uploadImage: UploadImageType;

export { type FileValidationRules, type ImageType, ReactImagePicker, type ReactImagePickerProps, type RuleWithMessage, type UploadImageArgs, type UploadImageType, ReactImagePicker as default, type renderImageType, uploadImage };
