"use client";

import * as React from "react";
import { AccordionDemo } from "./setps";

export default function Home() {
  const [images, setImages] = React.useState<(string | File)[]>([
    // "https://firebasestorage.googleapis.com/v0/b/frediustcdev-learning.appspot.com/o/logo_ali_cms%2Ffast_exchange_logo.png?alt=media&token=08f16893-95eb-437a-91bb-d12b62a8ed39",
  ]);

  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <AccordionDemo images={images} setImages={setImages} />
    </main>
  );
}
