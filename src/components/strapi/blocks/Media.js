import React from 'react'
import ReactMarkdown from "react-markdown"
import { assetRootPath } from 'utils/image'
import { getStrapiMedia } from "../../../../lib/media";

const Media = ({file}) => {
  return (
    <div className="image-container m-5">
      <img
        src={getStrapiMedia(file)}
        className="image"
        alt="image"
      />
    </div>
  )
}

export default Media;