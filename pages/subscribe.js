import { Footer, Header, Typography } from "@originprotocol/origin-storybook";
import Head from "next/head";
import React from "react";
import { fetchAPI } from "../lib/api";
import transformLinks from "../src/utils/transformLinks";
import EmailList2 from "../src/components/EmailList2";
import { ToastContainer } from "react-toastify";

const Subscribe = ({ navLinks }) => {
  return (
    <>
      <Head>
        <title>Origin Protocol | Subscribe</title>
      </Head>
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <section
        className="grey relative overflow-hidden bg-[left_150px_top_150px] md:bg-[right_-600px_top_275px]"
        style={{
          backgroundImage: "url(/images/graphics/splines34.svg)",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mb-10 md:mb-16 sm:px-12 md:px-24 max-w-6xl mx-auto scale-90 sm:scale-100">
          <Typography.H3 className="text-center">
            Be the first to hear about <br />
            <div className="gradient1 pb-2">
              new products, yield strategies, and ecosystem integrations.
            </div>
          </Typography.H3>
        </div>
        <div className="my-10 md:my-16 sm:px-12 md:px-24">
          <div className="overflow-hidden sm:rounded-3xl max-w-3xl mx-auto">
            <EmailList2 />
          </div>
        </div>
      </section>
      <Footer webProperty="originprotocol" />
      <ToastContainer />
      <style jsx>{`
        ol {
          counter-reset: item;
          list-style-type: none;
        }

        ol > li {
          counter-increment: item;
        }

        ol > li::before {
          content: counters(item, ".") " ";
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  const navRes = await fetchAPI("/website-nav-links", {
    populate: {
      links: {
        populate: "*",
      },
    },
  });

  const navLinks = transformLinks(navRes.data);

  return {
    props: {
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  };
}

export default Subscribe;
