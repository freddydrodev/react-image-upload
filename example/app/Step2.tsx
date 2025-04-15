"use client";

import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import React from "react";
import ImagePicker from "@freddydrodev/react-image-upload";
import Image from "next/image";

const Step2: React.FC<{
  images: (string | File)[];
  setImages: (images: (string | File)[]) => void;
}> = ({ images, setImages }) => {
  return (
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it styled?</AccordionTrigger>
      <AccordionContent>
        <ImagePicker
          onImagesChanged={(images) => setImages(images)}
          images={images}
          renderImage={(props) => {
            console.log(props);

            return <Image {...props} />;
          }}
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
      </AccordionContent>
    </AccordionItem>
  );
};

export default Step2;
