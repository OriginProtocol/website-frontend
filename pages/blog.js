import {
  Button,
  Card, Footer, Header, Typography
} from "@originprotocol/origin-storybook";
import News from "components/News";
import Head from "next/head";
import Image from "next/image";
import React, { useRef } from "react";
import { assetRootPath } from "utils/image";
import { fetchAPI } from "../lib/api";
import Seo from "../src/components/strapi/seo";
import formatSeo from "../src/utils/seo";
import transformLinks from "../src/utils/transformLinks";

const Blog = ({
  locale,
  onLocale,
  articles,
  meta,
  categories,
  seo,
  navLinks,
}) => {
  const pageRef = useRef(null)

  return (
    <div ref={pageRef}>
      <Head>
        <title>Blog</title>
      </Head>
      <Seo seo={seo} />
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <section className="intro grey pt-10 pb-24">
        <div className="container-fluid max-w-screen-xl mx-auto px-8 mb-6">
          <Typography.H2 className='font-bold'>Latest news</Typography.H2>
        </div>
      </section>
      {!articles?.length ? null : <News articles={articles} meta={meta} categories={categories} pageRef={pageRef} />}
      <section className="articles grey">
        <div className="container-fluid max-w-screen-xl mx-auto pt-10 md:pb-32 px-6">
          <Typography.H3 as='h3' className='font-bold md:mt-28'>As seen in</Typography.H3>
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-24 py-24">
            <Image
              src={assetRootPath("/images/logos/company-coindesk.svg")}
              className="company"
              alt="Coindesk"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-wsj.svg")}
              className="company"
              alt="Wall Street Journal"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-nasdaq.svg")}
              className="company"
              alt="Nasdaq"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-tnw.svg")}
              className="company"
              alt="TNW"
              width="140px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-fastcompany.svg")}
              className="company"
              alt="Fast Company"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-vice.svg")}
              className="company"
              alt="Vice"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-cointelegraph.svg")}
              className="company"
              alt="Coin Telegraph"
              width="200px"
              height="50px"
            />
            <Image
              src={assetRootPath("/images/logos/company-inc.svg")}
              className="company"
              alt="inc"
              width="200px"
              height="40px"
            />
            <Image
              src={assetRootPath("/images/logos/company-techcrunch.svg")}
              className="company"
              alt="Techcrunch"
              width="200px"
              height="50px"
            />
          </div>
        </div>
      </section>
      <section className="press light" id="press">
        <div className="max-w-screen-xl mx-auto py-20 md:py-36 px-12">
          <Typography.H3 as='h3' className='font-bold'>Press kit</Typography.H3>
          <div className="flex flex-col md:flex-row mt-10 space-y-8 md:space-x-8 md:space-y-0">
            <Card
              webProperty={"press"}
              title={"Origin Protocol"}
              img={<Image src={assetRootPath("/images/logos/press-origin.svg")} alt="Origin Logo" width='640' height='336' />}
              body={"Download the Origin Protocol logo."}
              linkText={"Download"}
              linkHref={assetRootPath("/images/origin-assets.zip")}
            />
            <Card
              webProperty={"press"}
              title={"Origin Dollar"}
              img={<Image src={assetRootPath("/images/logos/press-origin-dollar.svg")} alt="Origin Dollar Logo" width='640' height='336'/>}
              body={"Download the Origin Dollar logo, OUSD symbol and OGV symbol."}
              linkText={"Download"}
              linkHref={assetRootPath("/images/origin-dollar-assets.zip")}
            />
            <Card
              webProperty={"press"}
              title={"Origin Story"}
              img={<Image src={assetRootPath("/images/logos/press-origin-story.svg")} alt="Origin Story Logo" width='640' height='336' />}
              body={"Download the Origin Story logo and OGN symbol."}
              linkText={"Download"}
              linkHref={assetRootPath("/images/origin-story-assets.zip")}
            />
          </div>
        </div>
      </section>
      <section className="inquiries grey">
        <div className="container-fluid max-w-screen-xl mx-auto py-20 md:py-32 px-6">
          <div className="content text-center m-auto space-y-6">
            <Typography.H3 className='font-bold'>Press inquiries</Typography.H3>
            <div className="mt-2 mb-4 pb-6 font-light">
              Origin Story powers NFT ecosystems, providing creators with
              branded storefronts and secondary marketplaces.
            </div>
            <Button
              href={process.env.NEXT_PUBLIC_DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </section>
      <Footer webProperty="originprotocol" />
      <style jsx>{`
        section.inquiries {
          background-image: url(/images/graphics/splines25.png);
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: 40vw;
        }

        .press .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2.5vw;
        }

        .inquiries .content {
          width: 50%;
        }

        .companies {
          justify-content: space-around;
          margin: 50px 0;
        }

        @media (max-width: 1199px) {
        }

        @media (max-width: 799px) {
          .press .container {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5vw;
          }

          .inquiries .content {
            width: 100%;
          }

          .company {
            width: 15vw;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/website/blog/en", {
    pagination: {
      pageSize: 1000
    },
    populate: ["cover", "category"],
  });

  const categories = {};
  articlesRes?.data?.forEach((article) => {
    if (article && article.category) {
      categories[article.category.slug] = article.category;
    }
  });

  const seoRes = await fetchAPI("/website/page/en/%2Fblog");
  const navRes = await fetchAPI("/website-nav-links", {
    populate: {
      links: {
        populate: "*",
      },
    }
  });

  const navLinks = transformLinks(navRes.data);

  return {
    props: {
      articles: articlesRes?.data || null,
      meta: articlesRes?.meta || null,
      categories: Object.values(categories),
      seo: formatSeo(seoRes.data),
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  };
}

export default Blog