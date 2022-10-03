import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

import Seo from "../../src/components/strapi/seo";
import Layout from "../../src/components/strapi/layout";

import { fetchAPI } from "../../lib/api";
import { getStrapiMedia } from "../../lib/media";
import { Typography } from "@originprotocol/origin-storybook";

import RichText from '../../src/components/strapi/blocks/RichText';
import Media from '../../src/components/strapi/blocks/Media';
import Quote from '../../src/components/strapi/blocks/Quote';
import Image from "next/image";
import Link from "next/link";

const getBlockComponent = ({ __component, ...rest }, index) => {
  let Block;

  switch (__component) {
    case 'shared.rich-text':
      Block = RichText;
      break;
    case 'shared.media':
      Block = Media;
      break;
    case 'shared.quote':
      Block = Quote;
      break;
  }
  return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
  return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
  blocks: [],
};

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.attributes.cover);

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.cover,
    article: true,
  };

  return (
    <Layout categories={categories.data}>
      <Seo seo={seo} />
      <div className="pb-20 px-6" style={{
        backgroundColor: '#F6F8FE'
      }}>
        <div
          className="max-w-screen-xl mx-auto pb-2"
        >
          <Link href='/company'>Back to home page</Link>
        </div>
        <div className="max-w-screen-xl mx-auto bg-white rounded-2xl pb-10">
          <div
            id="banner"
            className="bg-cover flex justify-center items-center m-0 h-96 w-full rounded-tl-2xl rounded-tr-2xl"
            data-src={imageUrl}
            data-srcset={imageUrl}
            data-uk-img
          />
          <div className="p-6 md:px-14 pt-10">
            <Typography.H3 as='h1'>{article.attributes.title}</Typography.H3>
          </div>
          <div className="">
            <div className="px-6 md:px-14">
              <BlockManager blocks={article.attributes.blocks} />
              <hr className="uk-divider-small" />
              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  {article.attributes.author.data.attributes.avatar && (
                    <img
                      src={getStrapiMedia(
                        article.attributes.author.data.attributes.avatar
                      )}
                      alt={
                        article.attributes.author.data.attributes.avatar.data
                          .attributes.alternativeText
                      }
                      style={{
                        position: "static",
                        borderRadius: "20%",
                        height: 60,
                      }}
                    />
                  )}
                </div>
                <div className="uk-width-expand">
                  <p className="uk-margin-remove-bottom">
                    By {article.attributes.author.data.attributes.name}
                  </p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">
                      {article.attributes.published_at}
                    </Moment>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const articlesRes = await fetchAPI("/articles", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.attributes.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI("/articles", {
    filters: {
      slug: params.slug,
    },
    populate: ["cover", "category", "author.avatar", "blocks", "blocks.file"],
  });
  const categoriesRes = await fetchAPI("/categories");

  return {
    props: { article: articlesRes.data[0], categories: categoriesRes },
    revalidate: 1,
  };
}

export default Article;