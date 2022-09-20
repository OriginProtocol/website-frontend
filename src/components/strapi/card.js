import React from "react";
import Link from "next/link";
import NextImage from "./image";

const Scard = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>Read more</a>
    </Link>
  );
};

export default Scard;