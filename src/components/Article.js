import Moment from "react-moment";
import Seo from "./strapi/seo";
import { Typography } from "@originprotocol/origin-storybook";
import Image from "next/future/image";
import Link from "next/link";
import styles from "styles/Article.module.css";
import formatSeo from "../utils/seo";

const Article = ({ article, navLinks }) => {
  const imageUrl = article.cover?.url;

  const seo = formatSeo(article.seo);

  return (
    <>
      <Seo seo={seo} />
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <div
        className="pb-20 px-6"
        style={{
          backgroundColor: "#F6F8FE",
        }}
      >
        <div className="max-w-screen-lg mx-auto">
          <Typography.Link className="flex space-x-2">
            <Image
              src="/images/left-arrow.svg"
              width="10"
              height="7"
              className="ml-2"
              alt="left arrow"
            />
            <Link href="/blog" className="ml-3">
              Back to home page
            </Link>
          </Typography.Link>
        </div>
        <div className="mb-2.5 mt-2 max-w-screen-lg mx-auto">
          <Typography.H4 as="h1" style={{ fontSize: '2.75rem', lineHeight: '3.75rem' }}>{article.title}</Typography.H4>
        </div>
        <div className="max-w-screen-lg mx-auto bg-white rounded-2xl pb-10">
          {imageUrl && (
            <div
              id="banner"
              className="bg-cover flex justify-center items-center m-0 rounded-tl-2xl rounded-tr-2xl relative overflow-hidden"
              data-src={imageUrl}
              data-srcset={imageUrl}
            >
              <Image
                src={imageUrl}
                alt={article.cover?.alternativeText}
                width='0'
                height='0'
                sizes='100vw'
                className='w-full h-auto'
                priority
              />
            </div>
          )}
          <div className="pt-6 md:pt-12">
            <div className={`py-6 pl-6 pr-6 md:px-28 ${styles.article}`}>
              <div
                dangerouslySetInnerHTML={{
                  __html: article.body,
                }}
              />
              <hr className="my-6" />
              <div className="flex items-center">
                <div>
                  {article.author?.avatar && (
                    <Image
                      src={article.author.avatar.url}
                      alt={article.author.avatar.alternativeText}
                      style={{
                        position: "static",
                        borderRadius: "20%",
                        height: 60,
                      }}
                      width="64px"
                      height="64px"
                    />
                  )}
                </div>
                <div className="ml-4">
                  {article.author?.name && (
                    <p>
                      By {article.author.name}
                    </p>
                  )}
                  <p>
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Article;