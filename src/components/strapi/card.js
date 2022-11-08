import Link from "next/link";
import React from "react";

const Scard = ({ article }) => {
  return (
    <Link href={`/article/${article.attributes.slug}`}>
      <a>Read more</a>
    </Link>
  );
};

export default Scard;
