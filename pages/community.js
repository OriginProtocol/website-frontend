import {
  AltCard,
  Card,
  Footer,
  Header,
  Typography
} from "@originprotocol/origin-storybook";
import Contributors from "components/Contributors";
import Team from "components/Team";
import ExtendedTeam from "components/ExtendedTeam";
import withIsMobile from "hoc/withIsMobile";
import Head from "next/head";
import Image from "next/image";
import { useStoreState } from "pullstate";
import useSocialQuery from "queries/useSocialQuery";
import React, { useEffect } from "react";
import StatStore from "stores/StatStore";
import { assetRootPath } from "utils/image";
import { formatCurrency } from "utils/math";
import { fetchAPI } from "../lib/api";
import Seo from "../src/components/strapi/seo";
import fetchContributorsFromRepos from "../src/utils/contributors";
import formatSeo from "../src/utils/seo";
import transformLinks from "../src/utils/transformLinks";

const Community = ({ locale, onLocale, isMobile, team, seo, contributors, navLinks }) => {
  const socials = useStoreState(StatStore, (s) => {
    return s.socials || 0
  })

  const socialQuery = useSocialQuery({
    onSuccess: (socials) => {
      StatStore.update((s) => {
        s.socials = socials
      })
    },
  })

  useEffect(() => {
    socialQuery.refetch()
  }, [])

  const links = {
    Facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    Twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
    Youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    Medium: process.env.NEXT_PUBLIC_MEDIUM_URL,
    Telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL,
    Discord: process.env.NEXT_PUBLIC_DISCORD_URL,
    Reddit: process.env.NEXT_PUBLIC_REDDIT_URL,
    Blockfolio: process.env.NEXT_PUBLIC_BLOCKFOLIO_URL,
  };

  return (
    <>
      <Head>
        <title>Community</title>
      </Head>
      <Seo seo={seo} />
      <div>
        <Header webProperty="originprotocol" mappedLinks={navLinks} />
        <section className="intro grey relative overflow-hidden">
          <div
            className="absolute z-0 top-44"
            style={{
              right: "calc(50% - 70rem)",
            }}
          >
            <Image
              src={assetRootPath("/images/graphics/splines32.png")}
              alt="screens"
              width="1124"
              height="1002"
              priority
            />
          </div>
          <div className="max-w-screen-xl mx-auto pb-20 px-8 relative">
            <div className="flex layout justify-between items-center">
              <div className="flex flex-col">
                <Typography.H2 as="h1">
                  <span className='font-normal'>Welcome to the {" "}</span>
                  <br className="hidden md:block" />
                  <span className="gradient1 py-1 font-black">Origin community</span>
                </Typography.H2>
                <div className="mt-5 font-norm">
                  Origin is a decentralized ecosystem hundreds of thousands
                  strong
                </div>
              </div>
              <div className="image-container">
                <Image
                  src={assetRootPath("/images/graphics/ellipses-community.png")}
                  className="ellipses"
                  alt="Ellipses"
                  width="505px"
                  height="505px"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="contact light">
          <div className="max-w-screen-xl mx-auto pt-28 pb-16 px-8">
            <Typography.H3 className='mb-16 font-bold'>Partner with Origin</Typography.H3>
            <div className="drops container-fluid mt-5 space-y-4 md:space-y-0">
              <Card
                webProperty={"launchpad"}
                title={"3LAU"}
                img={
                  <Image src={assetRootPath("/images/screens/background-3lau.png")} alt={"3LAU"} width='620' height='138' />
                }
                thumbnail={
                  <Image src={assetRootPath("/images/screens/avatar-3lau.png")} alt={"3LAU avatar"} layout='fill' objectFit="cover" />
                }
                body={
                  "Acclaimed musician and producer 3LAU's Ultraviolet Vinyl NFT collection was auctioned on Origin's NFT platform with each NFT..."
                }
                linkText={"Learn more"}
                linkHref={
                  "https://blog.originprotocol.com/origin-nft-platform-powers-record-setting-11-7m-auction-with-3lau-c30a6812192c"
                }
              />
              <Card
                webProperty={"launchpad"}
                title={"Inspiration4 Mission"}
                img={
                  <Image src={assetRootPath("/images/screens/background-inspiration4.png")} alt={"Inspiration4"} width='620' height='138' />
                }
                thumbnail={
                  <Image src={assetRootPath("/images/screens/avatar-inspiration4.png")} alt={"Inspiration4 avatar"} layout='fill' objectFit="cover" />
                }
                body={
                  "Inspiration4, powered by SpaceX, was the first civilian orbital space mission. Mission Commander Jared Isaacman chose to raise 200..."
                }
                linkText={"Learn more"}
                linkHref={
                  "https://blog.originprotocol.com/origin-and-inspiration4-partner-for-good-acafa7c41eb8"
                }
              />
              <Card
                webProperty={"launchpad"}
                title={"Trevor Jones x Don Diablo x Alotta Money"}
                img={
                  <Image src={assetRootPath("/images/screens/background-ethereal.png")} alt={"ETHEREAL"} width='620' height='138' />
                }
                thumbnail={
                  <Image src={assetRootPath("/images/screens/avatar-ethereal.png")} alt={"ETHEREAL avatar"} layout='fill' objectFit="cover" />
                }
                body={
                  "ΞTHΞRΞAL is the coming of age of EthBoy. The original EthBoy was designed as a programmatic art piece that dynamically changes scen..."
                }
                linkText={"Learn more"}
                linkHref={
                  "https://blog.originprotocol.com/trevor-jones-don-diablo-and-alotta-money-launch-%CE%BEth%CE%BEr%CE%BEal-on-origins-nft-launchpad-f62f5e2c9629"
                }
              />
              <Card
                webProperty={"launchpad"}
                title={"BT"}
                img={
                  <Image src={assetRootPath("/images/screens/background-bt.png")} alt={"BT"} width='620' height='138' />
                }
                thumbnail={
                  <Image src={assetRootPath("/images/screens/avatar-bt.png")} alt={"BT avatar"} layout='fill' objectFit="cover" />
                }
                body={
                  "Metaversal is BT's 14th artist album and the first album imagined as a programatic blockchain experience. It encompasses beautiful audio..."
                }
                linkText={"Learn more"}
                linkHref={
                  "https://blog.originprotocol.com/origin-partners-with-bt-to-release-an-album-unlike-anything-youve-seen-before-8659e48ad441"
                }
              />
            </div>
          </div>
        </section>
        <section className='contact light'>
          <div className='max-w-screen-xl mx-auto pb-20 px-8'>
            <Typography.H3 className='mb-16 font-bold'>Community</Typography.H3>
            <div className='socials container-fluid mt-5 mb-5'>
              {socials && socials?.stats?.map((social) => {
                if (social.name.indexOf(' ') < 0 && social.name !== 'Facebook') {
                  return (
                    <AltCard
                      title={social.name.toUpperCase()}
                      body={`${formatCurrency(
                        social.subscribed_count / 1000,
                        1
                      )}k followers`}
                      imgSrc={assetRootPath(
                        `/images/logos/social-${social.name.toLowerCase()}.svg`
                      )}
                      imgAlt={social.name}
                      linkHref={links[social.name]}
                      narrow={false}
                      key={social.name}
                    />
                  );
                }
              })}
            </div>
            <Typography.H7 className="pt-12">Region-specific channels</Typography.H7>
            {socials && (
              <div className="telegram container-fluid mt-5">
                {socials.stats[5]?.name === 'Telegram (Indonesia)' &&
                  <AltCard
                    title={"INDONESIAN"}
                    body={`${formatCurrency(
                      socials.stats[5].subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_INDONESIA_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-indonesia.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
                {socials.stats[6]?.name === 'Telegram (Korean)' &&
                  <AltCard
                    title={"KOREAN"}
                    body={`${formatCurrency(
                      socials.stats[6].subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_KOREA_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-korea.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
                {socials.stats[7]?.name === 'Telegram (Russia)' &&
                  <AltCard
                    title={"RUSSIAN"}
                    body={`${formatCurrency(
                      socials.stats[7].subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_RUSSIA_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-russia.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
                {socials.stats[8]?.name === 'Telegram (Spanish)' &&
                  <AltCard
                    title={"SPANISH"}
                    body={`${formatCurrency(
                      socials.stats[8].subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_SPAIN_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-spain.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
                {socials.stats[9]?.name === 'Telegram (Turkish)' &&
                  <AltCard
                    title={"TURKISH"}
                    body={`${formatCurrency(
                      socials.stats[9]?.subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_TURKEY_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-turkey.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
                {socials.stats[10]?.name === 'Telegram (Vietnam)' &&
                  <AltCard
                    title={"VIETNAMESE"}
                    body={`${formatCurrency(
                      socials.stats[10]?.subscribed_count / 1000,
                      1
                    )}k followers`}
                    imgSrc={assetRootPath("/images/logos/social-telegram.svg")}
                    imgAlt={"Telegram"}
                    linkHref={process.env.NEXT_PUBLIC_TELEGRAM_VIETNAM_URL}
                    narrow={true}
                    thumbnailSrc={assetRootPath(
                      "/images/graphics/flag-vietnam.png"
                    )}
                    thumbnailAlt={"Flag"}
                  />
                }
              </div>
            )}
          </div>
        </section>
        <Team team={team} />
        <ExtendedTeam team={team} />
        {contributors.length && <Contributors contributors={contributors} />}
        <section className="investors light text-center">
          <div className="max-w-screen-xl mx-auto pt-24 pb-32 px-20">
            <Typography.H3 className='pb-4 font-bold'>Notable investors</Typography.H3>
            <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-32 mt-24 mb-10 pb-10">
              <Image
                src={assetRootPath("/images/logos/company-pantera.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath(
                  "/images/logos/company-foundationcapital.svg"
                )}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-spartan.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-blocktower.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-hackvc.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-f33.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-1kx.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
              <Image
                src={assetRootPath("/images/logos/company-preangel.svg")}
                className="company"
                alt="Company"
                width="200px"
                height="50px"
              />
            </div>
            <div className="people container pt-6 max-w-xl mx-auto">
              {team?.investor?.map((t) => {
                const avatar = t.avatar;
                return (
                  <div className="profile" key={t.name}>
                    <Image
                      src={assetRootPath(avatar?.url)}
                      className="headshot mb-3 rounded-full"
                      alt={t.name}
                      width="100px"
                      height="100px"
                    />
                    <div className="name">{t.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <Footer webProperty="originprotocol" />
        <style jsx>{`
          .layout {
            flex-direction: row;
          }

          .contact .drops.container-fluid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 2.5vw;
          }

          .contact .socials.container-fluid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2vw;
          }

          .contact .telegram.container-fluid {
            display: grid;
            grid-template-columns: repeat(8, 1fr);
            grid-gap: 2vw;
          }

          .headshot {
            width: 7vw;
            height: 7vw;
            margin: 0 auto 0 auto;
            border-radius: 50%;
          }

          .people {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 2vw;
          }

          @media (max-width: 1199px) {
            .contact .drops.container-fluid {
              display: grid;
              grid-template-columns: 1fr;
            }

            .contact .socials.container-fluid {
              grid-template-columns: repeat(4, 1fr);
            }

            .contact .telegram.container-fluid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          @media (max-width: 799px) {
            section.intro {
              padding-top: 0;
              text-align: center;
              background-size: 100vw;
            }

            .layout {
              flex-direction: column;
            }

            .image-container {
              margin-top: 5%;
            }

            .contact .drops.container-fluid {
              display: grid;
              grid-template-columns: 1fr;
              grid-gap: 2vw;
            }

            .contact .socials.container-fluid {
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 2vw;
            }

            .contact .telegram.container-fluid {
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 2vw;
            }

            .company {
              width: 15vw;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const teamRes = await fetchAPI("/website/team/en");
  const seoRes = await fetchAPI("/website/page/en/%2Fcommunity");
  const contributors = await fetchContributorsFromRepos();
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
      team: teamRes.data,
      seo: formatSeo(seoRes.data),
      contributors,
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5 min
  }
}

export default withIsMobile(Community)