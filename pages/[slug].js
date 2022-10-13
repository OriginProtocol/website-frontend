import React from "react";
import { fetchAPI } from "../lib/api";
import Article from "../src/components/Article";

const FallbackRenderer = ({ article }) => {
  return <Article article={article} />;
};

export async function getStaticPaths() {
  const { data } = await fetchAPI("/website/blog/en");

  return {
    paths: (data || []).map((post) => ({
      params: { slug: post.slug },
      // TODO: Should all locales be pre-generated?
      locale: "en",
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params, locale }) {
  // TODO: Do something for rate-limit
  const { data } = await fetchAPI(`/website/blog/${locale}/${params.slug}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article: data },
    revalidate: 5 * 60, // Cache response for 5m
  };
}

export default FallbackRenderer;
