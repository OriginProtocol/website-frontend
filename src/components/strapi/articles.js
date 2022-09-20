import React from "react";
import Scard from "./card";
import News from 'components/News'

const Articles = ({ articles }) => {
  return (
    <News articles={articles}/>
  );
};

export default Articles;