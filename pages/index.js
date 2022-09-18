import React, { useEffect, useState } from 'react'
import { useStoreState } from 'pullstate'
import Link from 'next/link'
import Head from 'next/head'

import Layout from 'components/Layout'
import Nav from 'components/Nav'
import Dashboard from 'components/Dashboard'
import EmailList from 'components/EmailList'
import useApyQuery from 'queries/useApyQuery'
import StatStore from 'stores/StatStore'
//import { formatCurrency } from 'utils/math'
//import { animateValue } from 'utils/animation'
import { getDocsLink } from 'utils/getDocsLink'
import { assetRootPath } from 'utils/image'
import { zipObject } from 'lodash'
import useOgvQuery from '../src/queries/useTotalSupplyQuery'
import { DEFAULT_SELECTED_APY } from 'utils/constants'
import { adjustLinkHref } from 'utils/utils'
import { Typography, Header, Footer, Card } from 'origin-storybook'
import useArticleQuery from 'queries/useArticleQuery'

const Home = ({ locale, onLocale }) => {
  const articleQuery = useArticleQuery(1)

  const articles = articleQuery.isSuccess ? articleQuery.data.data : 0

  useEffect(() => {
    articleQuery.refetch()
  }, [])

  return (
    <>
      <header>
        <Header webProperty='originprotocol' />
      </header>
      <section className="intro grey">
        <div className="container">
          <Typography.H1>
            {'Onboarding the next '}
            <span className='gradient1 bold'>100M users </span>
            {'to crypto'}
          </Typography.H1>
          <Typography.H6>{'Origin’s flagship products are tackling the fastest growing verticals in crypto'}</Typography.H6>
          <a
            href='https://story.xyz'
            target='_blank'
            rel='noopener noreferrer'
            className='button white shadow'
          >
            NFTs
          </a>
          <a
            href='https://ousd.com'
            target='_blank'
            rel='noopener noreferrer'
            className='button white shadow'
          >
            DeFi
          </a>
        </div>
      </section>
      <section className="story light d-flex flex-column">
        <div className="d-flex layout">
          <div className="image-container">
            <img
              src={assetRootPath('/images/screens/screens-story.svg')}
              className="screen1"
              alt="screens"
            />
          </div>
          <div className="text-container">
            <img
              src={assetRootPath('/images/logos/origin-story-wordmark.svg')}
              className="origin-story-logo"
              alt="Origin Story Logo"
            />
            <Typography.H3>The record-breaking NFT platform</Typography.H3>
            <div>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</div>
            <a
              href='https://story.xyz'
              target='_blank'
              rel='noopener noreferrer'
              className='button gradient2'
            >
              Learn more
            </a>
          </div>
        </div>
        <Dashboard ogn />
      </section>
      <section className="ousd dark gradient3 d-flex flex-column">
        <img
          src={assetRootPath('/images/graphics/splines22.svg')}
          className="splines"
          alt="splines"
        />
          <div className="d-flex layout">
            <div className='text-container'>
              <img
                src={assetRootPath('/images/logos/origin-dollar-wordmark.svg')}
                className="origin-dollar-logo"
                alt="Origin Dollar Logo"
              />
              <Typography.H3>A yield-generating stablecoin</Typography.H3>
              <div>Origin Dollar simplifies DeFi by eliminating the need for staking or lock-ups. Hold OUSD in any Ethereum wallet or custody solution and watch the balance increase every day.</div>
              <a
                href='https://ousd.com'
                target='_blank'
                rel='noopener noreferrer'
                className='button gradient2'
              >
                Learn more
              </a>
            </div>
            <div className='image-container'>
              <img
                src={assetRootPath('/images/screens/screen-ousd.svg')}
                className="screen3"
                alt="OUSD"
              />
            </div>
        </div>
        <Dashboard />
      </section>
      <section className="company light">
        <div className="d-flex flex-column">
          <div className="community d-flex flex-row">
            <div className="image-container">
              <img
                src={assetRootPath('/images/graphics/ellipses-homepage.png')}
                className="ellipses"
                alt="Ellipses"
              />
            </div>
            <div className="text-container">
              <Typography.H2>It's all about the community</Typography.H2>
              <Typography.H6>Join hundreds of thousands of community members and token holders, hundreds of open-source developers, or our world-class core team.</Typography.H6>
              <Link href={adjustLinkHref('/community')}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='button gradient2'
                >
                  Learn more
                </a>
              </Link>
            </div>
          </div>
          <div className="team d-flex flex-row">
            <div className="text-container">
              <Typography.H2>A world-class team</Typography.H2>
              <Typography.H6>Our team is led by serial entrepreneurs, early employees at YouTube, and engineering managers at Google, Coinbase and Dropbox.</Typography.H6>
              <img
                src={assetRootPath('/images/logos/companies.png')}
                className="companies"
                alt="Companies"
              />
              <a
                href='https://story.xyz'
                target='_blank'
                rel='noopener noreferrer'
                className='button gradient2'
              >
                Meet our team
              </a>
              <a
                href='https://story.xyz'
                target='_blank'
                rel='noopener noreferrer'
                className='button white shadow'
              >
                View careers
              </a>
            </div>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ERh2n-vlpQ4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="news grey">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <Typography.H2>Latest stories</Typography.H2>
            <Link href={adjustLinkHref('/company')}>
              <a
                target='_blank'
                rel='noopener noreferrer'
                className="link"
              >
                View stories
              </a>
            </Link>
          </div>
          {articles && (
            <div className="row mt-5">
              <div className='col'>
                <Card
                  webProperty={'originprotocol'}
                  title={articles[0].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articles[0].attributes.description}
                />
              </div>
              <div className='col'>
                <Card
                  webProperty={'originprotocol'}
                  title={articles[1].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articles[2].attributes.description}
                />
              </div>
              <div className='col'>
                <Card
                  webProperty={'originprotocol'}
                  title={articles[2].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articles[2].attributes.description}
                />
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="jobs light">
        <div className="d-flex flex-column">
          <Typography.H2>Work at Origin</Typography.H2>
          <div className='mb-3'></div>
          <Typography.H7>We’re always looking for the best talent. See open positions below.</Typography.H7>
          <div className='mb-5'></div>
          <Typography.H3>Engineering</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <Typography.H7>Data Engineer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2222160-data-engineer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Frontend Engineer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/335794-frontend-engineer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Senior Full-stack Engineer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2226588-senior-full-stack-engineer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Senior Solidity Engineer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/308390-senior-solidity-engineer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className='mb-2'></div>
          <Typography.H3>Design</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <Typography.H7>Marketing Designer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2226436-marketing-designer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className='mb-2'></div>
          <Typography.H3>Marketing</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <Typography.H7>Email Marketer</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2360663-email-marketer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Performance Marketer (Paid Ads)</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2226610-performance-marketer-paid-ads'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Public and Media Relations Manager</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/370212-public-and-media-relations-manager'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className='mb-2'></div>
          <Typography.H3>Product</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <Typography.H7>Product Manager (DeFi)</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/1860239-product-manager-defi'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Product Manager (NFTs)</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/1505992-product-manager-nfts'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className='mb-2'></div>
          <Typography.H3>Sales</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <Typography.H7>Business Development Manager (DeFi)</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2226595-business-development-manager-defi'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <div className="d-flex flex-row">
            <Typography.H7>Business Development Manager (NFTs)</Typography.H7>
            <a
              href='https://angel.co/company/originprotocol/jobs/2360681-business-development-manager-nfts'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
        </div>
      </section>
      <EmailList />
      <style jsx>{`
        section.intro {
          background-image: url(/images/graphics/splines34.svg);
          background-repeat: no-repeat;
          background-position: 100% -10%;
          background-size: 40vw;
        }

        section.ousd {
          position: relative;
        }

        .ousd .container {
          background-color: red;
          position: relative;
          margin: 0;
          z-index: 1;
        }
        
        .ousd .splines {
          position: absolute;
          width: 40%;
          top: 10%;
          right: 0;
          z-index: 0;
        }

        section.company {
          background-image: url(/images/graphics/splines32.svg);
          background-repeat: no-repeat;
          background-position: 90% 100%;
          background-size: 45%;
        }

        .intro .container {
          width: 60vw;
          margin-left: 5%;
        }

        .story .text-container {
          width: 70%;
          margin-top: 100px;
        }

        .ousd .text-container {
          width: 50%;
          padding: 50px;
        }

        .screen1 {
          width: 80%;
          margin-top: 10%;
          margin-left: 5%;
        }

        .screen2 {
          position: relative;
          bottom: 300%;
          left: 35%;
          width: 60%;
          z-index: 2;
        }

        .screen3 {
          position: absolute;
          top: 12%;
          width: 50%;
          right: 0;
        }

        .community .text-container {
          width: 70%;
          margin: 100px 100px 0 100px;
        }

        .team {
          margin-top: 150px;
        }

        .team .text-container{
          width: 50%;
          padding: 20px 70px 0 30px;
        }

        .video-container {
          padding: 10px;
          background: #000;
          webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          width: 560px;
          margin: 0 auto;
          overflow: hidden;
        }

        .companies {
          margin-bottom: 50px;
        }

        .news h2 {
          width: 90%;
        }

        .link {
          margin-top: 40px;
          height: 25px;
          color: #1a82ff;
          align-self: flex-start;
          margin-left: auto;
        }

        .link:hover {
          text-decoration: underline;
        }

        .jobs h5 {
          width: 90%;
        }

        .jobs .button {
          align-self: flex-start;
          margin-left: auto;
        }

        .layout {
          flex-direction: row;
        }


        
        @media (min-width: 993px) {

        }

        @media (max-width: 992px) {
          section.intro {
            background-image: url(/images/graphics/splines34.svg);
            background-repeat: no-repeat;
            background-position: 100% 60vw;
            background-size: 40vw;
          }

          section.story {
            text-align: center;
          }

          .story .text-container {
            width: 100%;
            margin-top: 50px;
          }

          .origin-story-logo {
            margin: auto;
          }

          .intro .container {
            width: 100%;
            margin-left: 5%;
          }

          .story .layout {
            flex-direction: column-reverse;
          }

          .ousd .layout {
            flex-direction: column;
          }
        }

        }

      `}</style>
      <Footer />
    </>
  )
}

export default Home
