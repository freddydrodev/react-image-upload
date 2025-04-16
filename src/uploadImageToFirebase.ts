import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { UploadImageToFirebaseType } from "./types";
import { nanoid } from "nanoid";

/**
 * Uploads a file to Firebase Storage and returns the download URL.
 * @param {File|string} file The file to upload, or the URL of the file
 * @param {FirebaseStorage} storage The Firebase Storage instance
 * @param {boolean} [isProd=false] Whether or not this is a production upload
 * @param {string} [path='Images'] The path to upload the file to
 * @returns {Promise<string>} The download URL of the uploaded file
 */
export const uploadImageToFirebase: UploadImageToFirebaseType = async ({
  file,
  storage,
  isProd = false,
  path = "Images",
}) => {
  if (typeof file === "string") return { url: file, fileId: "" };

  // The path is the full path including the filename, so we'll remove the trailing slash
  let _path = path.endsWith("/") ? path.slice(0, -1) : path;

  // If the path is empty, we'll default to "Images"
  if (!_path.trim().length) _path = "Images";

  // The full path is the path plus the filename
  const extension = file.name.split(".").pop();
  const fullPath = `${
    isProd ? "PROD" : "DEV"
  }/${_path}/${nanoid()}.${extension}`;

  // Create a reference to the file
  const storageRef = ref(storage, fullPath);

  // Start the upload
  const uploadTask = uploadBytesResumable(storageRef, file);

  // Wait for the upload to finish
  await uploadTask;

  // Get the download URL
  const url = await getDownloadURL(uploadTask.snapshot.ref);

  // Get the file ID from the reference path
  const fileId = uploadTask.snapshot.ref.fullPath;

  // Return the download URL
  return { url, fileId };
};
