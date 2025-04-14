"use client";

import Image from "next/image";
import ImagePicker from "@freddydrodev/react-image-upload";
import * as React from "react";

export default function Home() {
  const [visible, setVisible] = React.useState(false);
  const [images, setImages] = React.useState<(string | File)[]>([
    "https://firebasestorage.googleapis.com/v0/b/frediustcdev-learning.appspot.com/o/logo_ali_cms%2Ffast_exchange_logo.png?alt=media&token=08f16893-95eb-437a-91bb-d12b62a8ed39",
  ]);

  return (
    <main>
      <button onClick={() => setVisible(!visible)}>Toggle Visibility</button>
      {visible && (
        <ImagePicker
          onImagesChanged={(images) => setImages(images)}
          images={images}
          renderImage={(props) => <Image {...props} />}
          rules={{
            maxSize: {
              value: 2 * 1024 * 1024,
              message: "Images must be smaller than 2MB",
            },
            maxFiles: {
              value: 2,
              message: "Only 2 images are allowed",
            },
            accepted: {
              value: [".jpg", ".png"],
              message: "Only JPG and PNG files are allowed",
            },
          }}
          imageGridCount={4}
        />
      )}
    </main>
  );
}
