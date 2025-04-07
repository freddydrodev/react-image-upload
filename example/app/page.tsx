"use client";

import Image from "next/image";
// import styles from "./page.module.css";
import ImagePicker from "@freddydrodev/react-image-upload";

export default function Home() {
  return (
    <main>
      <ImagePicker
        maxFiles={4}
        onImageChange={(images) => console.log(images)}
        initImages={[
          "https://firebasestorage.googleapis.com/v0/b/frediustcdev-learning.appspot.com/o/logo_ali_cms%2Ffast_exchange_logo.png?alt=media&token=08f16893-95eb-437a-91bb-d12b62a8ed39",
        ]}
        sx={{ width: 400 }}
        imageGridCount={4}
        localImage={(props) => <Image {...props} />}
      />
    </main>
  );
}
