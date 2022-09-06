import React, { useEffect, useState } from 'react'
import { useStoreState } from 'pullstate'
import Link from 'next/link'

import Layout from 'components/Layout'
import Nav from 'components/Nav'
import useApyQuery from 'queries/useApyQuery'
import ContractStore from 'stores/ContractStore'
//import { formatCurrency } from 'utils/math'
//import { animateValue } from 'utils/animation'
import { getDocsLink } from 'utils/getDocsLink'
import { assetRootPath } from 'utils/image'
import { zipObject } from 'lodash'
import useOgvQuery from '../src/queries/useOgvQuery'
import { DEFAULT_SELECTED_APY } from 'utils/constants'
import { adjustLinkHref } from 'utils/utils'

const discordURL = process.env.DISCORD_URL
const jobsURL = process.env.JOBS_URL
const githubURL = process.env.GITHUB_URL

const Home = ({ locale, onLocale }) => {
  const apyDayOptions = [7, 30, 365]

  const apyOptions = useStoreState(ContractStore, (s) =>
    apyDayOptions.map((d) => {
      return s.apy[`apy${d}`] || 0
    })
  )
  const daysToApy = zipObject(apyDayOptions, apyOptions)
  const [apyDays, setApyDays] = useState(
    process.browser &&
      localStorage.getItem('last_user_selected_apy') !== null &&
      apyDayOptions.includes(
        Number(localStorage.getItem('last_user_selected_apy'))
      )
      ? localStorage.getItem('last_user_selected_apy')
      : DEFAULT_SELECTED_APY
  )

  const totalOgvSupply = useStoreState(ContractStore, (s) => {
    return s.ogv || 0
  })

  useEffect(() => {
    localStorage.setItem('last_user_selected_apy', apyDays)
  }, [apyDays])

  const apyQuery = useApyQuery({
    onSuccess: (apy) => {
      ContractStore.update((s) => {
        s.apy = apy
      })
    },
  })

  const ogvQuery = useOgvQuery({
    onSuccess: (ogv) => {
      ContractStore.update((s) => {
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
        <div className="container">
        </div>
      </header>
      <section className="intro grey">
        <div className="container">
          <h1>
            {'Onboarding the next '}
            <span className='gradient1 bold'>100M users </span>
            {'to crypto'}
          </h1>
          <h6>{'Origin’s flagship products are tackling the fastest growing verticals in crypto'}</h6>
          <button className='white shadow'>NFTs</button>
          <button className='white shadow'>DeFi</button>
        </div>
      </section>
      <section className="story light d-flex flex-column">
        <div className="d-flex flex-row">
          <div className="image-container">
            <img
              src={assetRootPath('/images/pages/screen-0n1.svg')}
              className="screen1"
              alt="0n1"
            />
            <img
              src={assetRootPath('/images/pages/screen-pudgy.svg')}
              className="screen2"
              alt="Pudgy Penguins"
            />
          </div>
          <div className="text-container">
            <img
              src={assetRootPath('/images/pages/origin-wordmark-blue.svg')}
              className="origin-logo"
              alt="Origin Logo"
            />
            <img
              src={assetRootPath('/images/pages/story-wordmark.svg')}
              className="origin-story-logo"
              alt="Origin Story Logo"
            />
            <h2>The record-breaking NFT platform</h2>
            <h6>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</h6>
            <button className='gradient2'>Learn more</button>
          </div>
        </div>
        <div className='token-dashboard gradient2'>
          <h3>OGN token</h3>
          <h5>
            {'Origin Token (OGN) stakers earn their share of Story’s platform fees. View on '}
            <a
              href={'https://coinmarketcap.com/currencies/origin-protocol/'}
              target='_blank'
              rel='noopener noreferrer'
              className='bold'
            >
                Coinmarketcap
            </a>
            {' or '}
            <a
              href={'https://www.coingecko.com/en/coins/origin-protocol'}
              target='_blank'
              rel='noopener noreferrer'
              className='bold'
            >
                Coingecko
            </a>
          </h5>
          <button className='white'>Buy OGN</button>
        </div>
      </section>
      <section className="ousd dark d-flex flex-column">
        <div className="d-flex flex-row">
          <div className='text-container'>
            <img
              src={assetRootPath('/images/pages/origin-wordmark-blue.svg')}
              className="origin-logo"
              alt="Origin Logo"
            />
            <img
              src={assetRootPath('/images/pages/dollar-wordmark.svg')}
              className="origin-dollar-logo"
              alt="Origin Dollar Logo"
            />
            <h2>A yield-generating stablecoin</h2>
            <h6>Origin Dollar simplifies DeFi by eliminating the need for staking or lock-ups. Hold OUSD in any Ethereum wallet or custody solution and watch the balance increase every day.</h6>
            <button className='gradient2'>Learn more</button>
          </div>
          <div className='image-container'>
            <img
              src={assetRootPath('/images/pages/screen-ousd.svg')}
              className="screen3"
              alt="OUSD"
            />
          </div>
        </div>
        <div className='token-dashboard gradient2'>
          <h3>OGV token</h3>
          <h5>
            {'Origin Governance Token (OGV) stakers earn fees from OUSD’s growth. View on '}
            <a
              href={'https://coinmarketcap.com/currencies/origin-dollar-governance/'}
              target='_blank'
              rel='noopener noreferrer'
              className='bold'
            >
                Coinmarketcap
            </a>
            {' or '}
            <a
              href={'https://www.coingecko.com/en/coins/origin-dollar-governance/'}
              target='_blank'
              rel='noopener noreferrer'
              className='bold'
            >
                Coingecko
            </a>
          </h5>
          <button className='white'>Buy OGV</button>
        </div>
      </section>
      <section className="company light">
        <div className="d-flex flex-column">
          <div className="community d-flex flex-row">
            <div className="image-container">
              <img
                src={assetRootPath('/images/pages/ellipses.png')}
                className="ellipses"
                alt="Ellipses"
              />
            </div>
            <div className="text-container">
              <h2>It's all about the community</h2>
              <h6>Join hundreds of thousands of community members and token holders, hundreds of open-source developers, or our world-class core team.</h6>
              <button className='gradient2'>Learn more</button>
            </div>
          </div>
          <div className="team d-flex flex-row">
            <div className="text-container">
              <h2>A world-class team</h2>
              <h6>Our team is led by serial entrepreneurs, early employees at YouTube, and engineering managers at Google, Coinbase and Dropbox.</h6>
              <img
                src={assetRootPath('/images/pages/companies.png')}
                className="companies"
                alt="Companies"
              />
              <button className='gradient2'>Meet our team</button>
              <button className='white shadow'>View careers</button>
            </div>
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ERh2n-vlpQ4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="news grey">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row">
            <h2>Latest stories</h2>
            <Link href={adjustLinkHref('/news')}>
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
            <h5>Senior Blockchain Engineer</h5>
            <button className="gradient2">Apply</button>
          </div>
          <h3>Design</h3>
          <div className="d-flex flex-row">
            <h5>Senior Designer</h5>
            <button className="gradient2">Apply</button>
          </div>
        </div>
      </section>
      <section className="mail">
        <div className="d-flex flex-column align-center justify-content-center">
          <h3>Join our mailing list</h3>
          <h6>Be the first to hear about major NFT drops and important product updates. Your email will be kept private.</h6>
        </div>
      </section>
      <section className="dark gradient3">
        <div className="container">
          <h1>{totalOgvSupply}</h1>
        </div>
      </section>
      <style jsx>{`
        header {
          background-color: #f6f8fe;
          color: #183140;
        }

        section.intro {
          background-image: url(/images/pages/splines34.svg);
          background-repeat: no-repeat;
          background-position: 100% -10%;
          background-size: 500px;
        }

        .intro .container {
          width: 60%;
          margin-left: 5%;
        }

        .gradient1 {
          background-image:-webkit-linear-gradient(left,#CB6FDE,#5C2EFF,#0074F0);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .gradient2 {
          background-image:-webkit-linear-gradient(left,#0274F1,#8C66FC);
        }

        .gradient3 {
          background-image:-webkit-linear-gradient(left,#000000,#1E313F);
        }

        .origin-story-logo {
          margin-top: 7px;
          margin-left: 5px;
        }

        .origin-dollar-logo {
          margin-bottom: 1px;
          margin-left: 7px;
        }

        section.story {
          background-image: url(/images/pages/splines35.svg);
          background-repeat: no-repeat;
          background-position: 10% 10%;
          background-size: 37%;
        }

        section.ousd {
          background-image: url(/images/pages/splines22.svg);
          background-repeat: no-repeat;
          background-position: 100% 10%;
          background-size: 40%;
        }

        section.company {
          background-image: url(/images/pages/splines32.svg);
          background-repeat: no-repeat;
          background-position: 90% 100%;
          background-size: 45%;
          
        }

        .token-dashboard {
          color: white;
          margin: 200px 50px 0 50px;
          padding: 50px;
          border-radius: 20px;
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
          padding: 50px 50px 50px 100px;
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

        .bold {
          font-weight: 700;
        }

        button {
          border: 0;
          border-radius: 50px;
          margin: 10px;
          padding: 10px 40px;
        }

        button .shadow {
          box-shadow: 2px 2px 10px #c0c0c0;
        }

        button.gradient2 {
          color: white;
        }

        .white {
          background-color: #ffffff;
        }

        .community .image-container {
          
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
          margin: 25px 0;
        }

        .placeholder {
          color: white;
          min-height: 200px;
          width: 20%;
          margin: 100px 35px 0 35px;
          padding: 80px 0 100px 60px;
          border-radius: 50px;
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






        
        @media (min-width: 993px) {

        }

        @media (max-width: 992px) {

        }

        }

      `}</style>
    </Layout>
  )
}

export default Home
