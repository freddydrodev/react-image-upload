import * as React$1 from 'react';
import { SxProps, Theme } from '@mui/material';
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
 * The props that will be passed to the `ReactImagePicker` component
 */
type ReactImagePickerProps = {
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
     * Custom styles for the wrapper component
     */
    sx?: SxProps<Theme> | undefined;
    /**
     * Gap between sections (ex: title, description, images, etc...) in pixels
     */
    sectionGap?: string;
    /**
     * Gap between images in pixels
     */
    imageGap?: string;
};
/**
 * The props that will be passed to the `localImage` component
 */
type LocalImageType = {
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

export { type LocalImageType, type ReactImagePickerProps, type UploadImageArgs, type UploadImageType, ReactImagePicker as default, uploadImage };
