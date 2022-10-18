import React from "react";
import Image from "next/image";
import { getStrapiMedia } from "../../../../lib/media";

const Media = ({ file }) => {
  return (
    <div className="image-container m-5">
      <Image src={getStrapiMedia(file)} className="image" alt="image" layout="fill" />
    </div>
  );
};

export default Media;
