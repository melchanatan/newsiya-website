import React from "react";
import Image from "next/image";

const PricingImages = ({ images }) => {
  return images.map((image, index) => (
    <Image
      className="border-primary border-[3px] min-h-[40vh]"
      src={image.src}
      width={600}
      height={600}
      style={{ objectFit: "cover" }}
      alt={image.titile}
    ></Image>
  ));
};

export default PricingImages;
