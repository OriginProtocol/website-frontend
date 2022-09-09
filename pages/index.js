import React, { useEffect, useState } from 'react'
import { useStoreState } from 'pullstate'
import Link from 'next/link'

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

const Home = ({ locale, onLocale }) => {
  const totalOgvSupply = useStoreState(StatStore, (s) => {
    return s.ogv || 0
  })

  const apyQuery = useApyQuery({
    onSuccess: (apy) => {
      StatStore.update((s) => {
        s.apy = apy
      })
    },
  })

  const ogvQuery = useOgvQuery({
    onSuccess: (ogv) => {
      StatStore.update((s) => {
        s.ogv = ogv
      })
    },
  })

  useEffect(() => {
    apyQuery.refetch()
    ogvQuery.refetch()
  }, [])

  return (
    <Layout locale={locale}>
      <header>
        <Nav locale={locale} onLocale={onLocale} />
      </header>
      <section className="intro grey">
        <div className="container">
          <h1>
            {'Onboarding the next '}
            <span className='gradient1 bold'>100M users </span>
            {'to crypto'}
          </h1>
          <h6>{'Origin’s flagship products are tackling the fastest growing verticals in crypto'}</h6>
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
        <div className="d-flex flex-row">
          <div className="image-container">
            <img
              src={assetRootPath('/images/screens/screen-0n1.svg')}
              className="screen1"
              alt="0n1"
            />
            <img
              src={assetRootPath('/images/screens/screen-pudgy.svg')}
              className="screen2"
              alt="Pudgy Penguins"
            />
          </div>
          <div className="text-container">
            <img
              src={assetRootPath('/images/logos/origin-wordmark-blue.svg')}
              className="origin-logo"
              alt="Origin Logo"
            />
            <img
              src={assetRootPath('/images/logos/story-wordmark.svg')}
              className="origin-story-logo"
              alt="Origin Story Logo"
            />
            <h2>The record-breaking NFT platform</h2>
            <h6>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</h6>
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
      <section className="ousd dark d-flex flex-column">
        <div className="d-flex flex-row">
          <div className='text-container'>
            <img
              src={assetRootPath('/images/logos/origin-wordmark-blue.svg')}
              className="origin-logo"
              alt="Origin Logo"
            />
            <img
              src={assetRootPath('/images/logos/dollar-wordmark.svg')}
              className="origin-dollar-logo"
              alt="Origin Dollar Logo"
            />
            <h2>A yield-generating stablecoin</h2>
            <h6>Origin Dollar simplifies DeFi by eliminating the need for staking or lock-ups. Hold OUSD in any Ethereum wallet or custody solution and watch the balance increase every day.</h6>
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
                src={assetRootPath('/images/graphics/ellipses.png')}
                className="ellipses"
                alt="Ellipses"
              />
            </div>
            <div className="text-container">
              <h2>It's all about the community</h2>
              <h6>Join hundreds of thousands of community members and token holders, hundreds of open-source developers, or our world-class core team.</h6>
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
              <h2>A world-class team</h2>
              <h6>Our team is led by serial entrepreneurs, early employees at YouTube, and engineering managers at Google, Coinbase and Dropbox.</h6>
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
            <h2>Latest stories</h2>
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
          <div className="d-flex flex-row justify-content-center">
            <div className='placeholder gradient2'>
              <h2>News</h2>
            </div>
            <div className='placeholder gradient2'>
              <h2>News</h2>
            </div>
            <div className='placeholder gradient2'>
              <h2>News</h2>
            </div>
          </div>
        </div>
      </section>
      <section className="jobs light">
        <div className="d-flex flex-column">
          <h2>Work at Origin</h2>
          <h6>We’re always looking for the best talent. See open posisitions below.</h6>
          <h3>Engineering</h3>
          <div className="d-flex flex-row">
            <h5>Data Engineer</h5>
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
            <h5>Frontend Engineer</h5>
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
            <h5>Senior Full-stack Engineer</h5>
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
            <h5>Senior Solidity Engineer</h5>
            <a
              href='https://angel.co/company/originprotocol/jobs/308390-senior-solidity-engineer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <h3>Design</h3>
          <div className="d-flex flex-row">
            <h5>Marketing Designer</h5>
            <a
              href='https://angel.co/company/originprotocol/jobs/2226436-marketing-designer'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <h3>Marketing</h3>
          <div className="d-flex flex-row">
            <h5>Email Marketer</h5>
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
            <h5>Performance Marketer (Paid Ads)</h5>
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
            <h5>Public and Media Relations Manager</h5>
            <a
              href='https://angel.co/company/originprotocol/jobs/370212-public-and-media-relations-manager'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <h3>Product</h3>
          <div className="d-flex flex-row">
            <h5>Product Manager (DeFi)</h5>
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
            <h5>Product Manager (NFTs)</h5>
            <a
              href='https://angel.co/company/originprotocol/jobs/1505992-product-manager-nfts'
              target='_blank'
              rel='noopener noreferrer'
              className="button gradient2"
            >
              Apply
            </a>
          </div>
          <h3>Sales</h3>
          <div className="d-flex flex-row">
            <h5>Business Development Manager (DeFi)</h5>
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
            <h5>Business Development Manager (NFTs)</h5>
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
      <section className="dark gradient3">
        <div className="container">
          <h1>{totalOgvSupply}</h1>
        </div>
      </section>
      <style jsx>{`
        section.intro {
          background-image: url(/images/graphics/splines34.svg);
          background-repeat: no-repeat;
          background-position: 100% -10%;
          background-size: 40vw;
        }

        section.story {
          background-image: url(/images/graphics/splines35.svg);
          background-repeat: no-repeat;
          background-position: 10% 10%;
          background-size: 37%;
        }

        section.ousd {
          background-image: url(/images/graphics/splines22.svg);
          background-repeat: no-repeat;
          background-position: 100% 10%;
          background-size: 40%;
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

        .origin-story-logo {
          margin-top: 7px;
          margin-left: 5px;
        }

        .origin-dollar-logo {
          margin-bottom: 1px;
          margin-left: 7px;
        }

        .story .image-container {
          height: 96px;
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
          width: 60%;
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
          width: 50%;
          right: -1%;
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




        
        @media (min-width: 993px) {

        }

        @media (max-width: 992px) {
          section.intro {
            background-image: url(/images/graphics/splines34.svg);
            background-repeat: no-repeat;
            background-position: 100% 60vw;
            background-size: 40vw;
          }

          .intro .container {
            width: 100%;
            margin-left: 5%;
          }
        }

        }

      `}</style>
    </Layout>
  )
}

export default Home
