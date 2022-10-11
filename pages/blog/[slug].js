import Moment from "react-moment"

import Layout from "../../src/components/strapi/layout"
import Seo from "../../src/components/strapi/seo"

import { Typography } from "@originprotocol/origin-storybook"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"

import Link from "next/link"
import Media from '../../src/components/strapi/blocks/Media'
import Quote from '../../src/components/strapi/blocks/Quote'
import RichText from '../../src/components/strapi/blocks/RichText'

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
  return <div>{blocks.map(getBlockComponent)}</div>
};

BlockManager.defaultProps = {
  blocks: [],
};

const Article = ({ article }) => {
  const imageUrl = article.cover?.formats.large.url;

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
    article: true,
  };

  return (
    <Layout>
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
            <Typography.H3 as='h1'>{article.title}</Typography.H3>
          </div>
          <div className="">
            <div className="px-6 md:px-14">
              <div
                dangerouslySetInnerHTML={{
                  __html: article.body
                }}
              />
              <hr className="uk-divider-small" />
              <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
                <div>
                  {article.author.avatar && (
                    <img
                      src={getStrapiMedia(
                        article.author.avatar
                      )}
                      alt={
                        article.author.avatar.alternativeText
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
                    By {article.author.name}
                  </p>
                  <p className="uk-text-meta uk-margin-remove-top">
                    <Moment format="MMM Do YYYY">
                      {article.published_at}
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
  const articlesRes = await fetchAPI("/website/blog/en", { fields: ["slug"] });

  return {
    paths: articlesRes.data.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articlesRes = await fetchAPI(`/website/blog/en/${params.slug}`);

  return {
    props: { article: articlesRes.data },
    revalidate: 1,
  };
}

export default Article;