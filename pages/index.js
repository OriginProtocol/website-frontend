import {
  Button,
  Card,
  Footer,
  Header,
  Typography
} from "@originprotocol/origin-storybook";
import Dashboard from "components/Dashboard";
import EmailList from "components/EmailList";
import Seo from "components/strapi/seo";
import withIsMobile from "hoc/withIsMobile";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import styles from "styles/Home.module.css";
import { assetRootPath } from "utils/image";
import { adjustLinkHref } from "utils/utils";
import { fetchAPI } from "../lib/api";
import Jobs from "../src/components/Jobs";
import formatSeo from "../src/utils/seo";
import transformLinks from "../src/utils/transformLinks";

const Home = ({ locale, onLocale, isMobile, articles, seo, navLinks }) => {
  return (
    <>
      <Head>
        <title>Origin Protocol</title>
      </Head>
      <Seo seo={seo} />
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <section className="grey relative">
        <span className={`${styles.splines34} absolute z-0`}>
          <Image
            src="/images/graphics/splines34.svg"
            width={1100}
            height={800}
            alt="spline"
            priority
          />
        </span>
        <div className="relative overflow-hidden max-w-screen-xl mx-auto pb-20 px-8">
          <Typography.H2 as="h1">
            Onboarding the next <br className="hidden md:block" />
            <span className="gradient1 font-black">100M users </span>
            {"to crypto"}
          </Typography.H2>
          <div className="opacity-75 font-light mt-5 mb-9">
            {
              "Origin’s flagship products are tackling the fastest growing verticals in crypto"
            }
          </div>
          <a
            href="https://story.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="button white shadow mr-4 w-32 md:w-40 px-6 py-3.5"
          >
            <div className='flex flex-row justify-between'>
              {'NFTs'}
              <Image
                src="/images/right-arrow.svg"
                height={6}
                width={6}
              />
            </div>
          </a>
          <a
            href="https://ousd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button white shadow w-32 md:w-40 px-6 py-3.5"
          >
            <div className='flex flex-row justify-between'>
              {'DeFi'}
              <Image
                src="/images/right-arrow.svg"
                height={6}
                width={6}
              />
            </div>
          </a>
        </div>
      </section>
      <section className="story light flex flex-col z-10 relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row layout items-center pt-10">
            <div className="image-container self-end md:self-start pt-10 flex-1">
              <Image
                src={assetRootPath("/images/screens/screens-story.png")}
                className="screen1"
                alt="screens"
                width="640"
                height="580"
                priority
              />
            </div>
            <div className="text-container flex-1 md:ml-10 pt-20 md:pt-0 px-6 md:px-0 text-center sm:text-left">
              <Image
                src={assetRootPath("/images/logos/origin-story-wordmark.svg")}
                className="mx-auto md:mx-0 mb-6 md:mb-0"
                alt="Origin Story Logo"
                width="190"
                height="31"
              />
              <Typography.H3 className='mt-2 font-bold'>The record-breaking NFT platform</Typography.H3>
              <div className="opacity-75 font-light mt-5 mb-9">
                Origin Story powers NFT ecosystems, providing creators with
                branded storefronts and secondary marketplaces.
              </div>
              <a
                href="https://story.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="button gradient2 w-32 md:w-40 px-6 py-4 text-center"
              >
                Learn more
              </a>
            </div>
          </div>
          <div className="md:mt-10 md:mb-20">
            <Dashboard ogn />
          </div>
        </div>
      </section>
      <section className="ousd dark gradient3 flex flex-col">
        <div className="max-w-screen-xl mx-auto md:pb-20">
          <div className="flex flex-col md:flex-row layout relative">
            <div className="text-container text-center sm:text-left pt-14 pb-10 px-6 md:pt-32 md:pb-28 md:pr-10 md:w-1/2">
              <Image
                src={assetRootPath("/images/logos/origin-dollar-wordmark.svg")}
                className="origin-dollar-logo mb-2 mx-auto md:mx-0"
                alt="Origin Dollar Logo"
                width="230px"
                height="31px"
              />
              <Typography.H3 className="text-white mt-3 font-bold">
                The yield-generating stablecoin
              </Typography.H3>
              <div className="opacity-75 font-light mt-5 mb-9">
                Origin Dollar simplifies DeFi by eliminating the need for
                staking or lock-ups. Hold OUSD in any Ethereum wallet or custody
                solution and watch the balance increase every day.
              </div>
              <a
                href="https://ousd.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button gradient4 w-32 md:w-40 px-6 py-4 text-center"
              >
                Learn more
              </a>
            </div>
            <div className="image-container flex-1 pb-10 md:absolute md:top-1/2 -translate-y-1/2 md:-right-20 md:w-1/2">
              <Image
                src={assetRootPath('/images/screens/screens-ousd.png')}
                className="screen3"
                alt="OUSD"
                width="918"
                height="698"
              />
            </div>
          </div>
          <Dashboard />
        </div>
      </section>
      <section className="company light">
        <div className="mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-col mx-auto pt-10 px-10 max-w-screen-xl md:flex-row md:flex-1 md:mt-12 md:pb-24">
              <div className={`${styles.ellipsesContainer}`}>
                <Image
                  src={assetRootPath("/images/graphics/ellipses-homepage.png")}
                  className="ellipses pb-10"
                  alt="Ellipses"
                  width="635px"
                  height="635px"
                />
              </div>
              <div className="md:flex md:flex-col md:items-start md:justify-center md:pl-16 md:flex-1">
                <Typography.H3 className='font-bold'>It's all about the community</Typography.H3>
                <div className="opacity-75 font-light mt-5 mb-7">
                  Join hundreds of thousands of community members and token
                  holders, hundreds of open-source developers, or our
                  world-class core team.
                </div>
                <Button
                  target="_blank"
                  href={adjustLinkHref("/community")}
                  rel="noopener noreferrer"
                  className="button gradient2"
                >
                  Learn more
                </Button>
              </div>
            </div>
            <div className="team flex layout flex-col-reverse mt-10 md:flex-row max-w-screen-xl mx-auto">
              <div className="text-container px-6 mt-10 max-w-xl md:mr-12">
                <Typography.H3 className='font-bold'>A world-class team</Typography.H3>
                <div className="opacity-75 font-light mt-3 mb-9">
                  Our team is led by serial entrepreneurs, early employees at
                  YouTube, and engineering managers at Google, Coinbase and
                  Dropbox.
                </div>
                <div className="grid grid-cols-3 gap-4 md:flex md:items-center">
                  <Image
                    src={assetRootPath('/images/logos/company-paypal.svg')}
                    className="companies"
                    alt="Paypal"
                    width="80px"
                    height="17px"
                  />
                  <Image
                    src={assetRootPath('/images/logos/company-youtube.svg')}
                    className="companies"
                    alt="Youtube"
                    width="80px"
                    height="17px"
                  />
                  <Image
                    src={assetRootPath('/images/logos/company-google.svg')}
                    className="companies"
                    alt="Google"
                    width="80px"
                    height="17px"
                  />
                  <Image
                    src={assetRootPath('/images/logos/company-dropbox.svg')}
                    className="companies"
                    alt="Dropbox"
                    width="80px"
                    height="17px"
                  />
                  <Image
                    src={assetRootPath('/images/logos/company-coinbase.svg')}
                    className="companies"
                    alt="Coinbase"
                    width="80px"
                    height="17px"
                  />
                </div>
                <div className="flex-column md:justify-center space-x-0 mt-8 mb-16">
                  <Button
                    href="/community"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='mr-4'
                  >
                    Meet our team
                  </Button>
                  <Button
                    href="https://angel.co/company/originprotocol/jobs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:px-10 mt-2"
                    type='secondary'
                  >
                    View careers
                  </Button>
                </div>
              </div>
              <div className="relative my-10 md:my-0">
                <span
                  className={`absolute left-10 sm:left-24 right-10 sm:right-24 md:left-0 md:-right-20 -top-12 sm:-top-20 md:-top-20 md:w-full`}
                >
                  <Image
                    src="/images/graphics/splines32.png"
                    width={732}
                    height={654}
                    alt="spline32"
                  />
                </span>
                <div
                  className={`${styles.videoContainer} mt-10 mb-10 relative`}
                >
                  <iframe
                    width={`${isMobile ? "280" : "560"}`}
                    height={`${isMobile ? "158" : "316"}`}
                    src="https://www.youtube.com/embed/ERh2n-vlpQ4"
                    srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/ERh2n-vlpQ4?autoplay=1><img src=https://img.youtube.com/vi/ERh2n-vlpQ4/hqdefault.jpg alt='Video Working at Origin'><span>▶</span></a>"
                    loading="lazy"
                    className={`${styles.iframe}`}
                    title="Working at Origin"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news grey md:mt-32">
        <div className="mx-auto">
          <div className="flex flex-col px-7 py-12 max-w-screen-xl mx-auto md:py-32">
            <div className="flex flex-col mt-1 md:mt-10 md:flex-row md:items-center md:justify-between">
              <Typography.H3 className='font-bold'>Latest stories</Typography.H3>
              <Link href={adjustLinkHref("/company")}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-blue-500 font-bold"
                >
                  View all stories
                </a>
              </Link>
            </div>
            {articles && (
              <div className="article-container mt-9 md:mb-4 space-y-6 md:space-y-0 md:grid md:grid-cols-3 gap-10">
                {articles.slice(0, 3).map((article, i) => (
                  <Card
                    key={i}
                    webProperty={"originprotocol"}
                    title={article.title}
                    img={
                      <Image
                        src={article.cardCover?.url || article.cover?.url || assetRootPath('/images/logos/origin-press.svg')}
                        alt='Origin Protocol'
                        width='640' height='312'
                      />
                    }
                    body={article.description}
                    linkText={"Read more"}
                    linkHref={`/${article.slug}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="jobs light py-28 px-6">
        <div className="mx-auto">
          <div className="flex flex-col max-w-screen-xl mx-auto md:mt-4 md:px-14">
            <Typography.H3 as='h2' className='font-bold'>Work at Origin</Typography.H3>
            <div className="mb-3"></div>
            <div className="lighter mt-2 mb-4">
              We’re always looking for the best talent. See open positions
              below.
            </div>
            <Jobs />
          </div>
        </div>
      </section>
      <EmailList />
      <ToastContainer />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const articlesRes = await fetchAPI("/website/blog/en");
  const seoRes = await fetchAPI("/website/page/en/%2F");
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
      articles: articlesRes.data,
      seo: formatSeo(seoRes.data),
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  };
}

export default withIsMobile(Home);
