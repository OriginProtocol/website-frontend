import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Dashboard from 'components/Dashboard'
import EmailList from 'components/EmailList'
import StatStore from 'stores/StatStore'
import { assetRootPath } from 'utils/image'
import { adjustLinkHref } from 'utils/utils'
import { Typography, Header, Footer, Card } from 'origin-storybook'
import useArticleQuery from 'queries/useArticleQuery'
import withIsMobile from 'hoc/withIsMobile'

const Home = ({ locale, onLocale, isMobile, articles, categories, homepage }) => {
  const articleQuery = useArticleQuery(1)
  const articleList = articleQuery.isSuccess ? articleQuery.data.data : 0

  StatStore.update((s) => {
    s.article = articles,
    s.categories = categories,
    s.homepage = homepage
  })

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
          <Typography.H3>
            {'Onboarding the next '}
            <span className='gradient1 bold'>100M users </span>
            {'to crypto'}
          </Typography.H3>
          <div className='lighter mt-2 mb-4'>{'Origin’s flagship products are tackling the fastest growing verticals in crypto'}</div>
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
            <div className='lighter mt-2 mb-4'>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</div>
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
          <div className="d-flex layout">
            <div className='text-container'>
              <img
                src={assetRootPath('/images/logos/origin-dollar-wordmark.svg')}
                className="origin-dollar-logo mb-2"
                alt="Origin Dollar Logo"
              />
              <Typography.H3>A yield-generating stablecoin</Typography.H3>
              <div className='lighter mt-2 mb-4'>Origin Dollar simplifies DeFi by eliminating the need for staking or lock-ups. Hold OUSD in any Ethereum wallet or custody solution and watch the balance increase every day.</div>
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
                src={assetRootPath('/images/screens/screens-ousd.svg')}
                className="screen3"
                alt="OUSD"
              />
            </div>
        </div>
        <Dashboard />
      </section>
      <section className="company light">
        <div className="d-flex flex-column">
          <div className="community d-flex layout">
            <div className="image-container">
              <img
                src={assetRootPath('/images/graphics/ellipses-homepage.png')}
                className="ellipses"
                alt="Ellipses"
              />
            </div>
            <div className="text-container">
              <Typography.H2>It's all about the community</Typography.H2>
              <div className='lighter mt-2 mb-4'>Join hundreds of thousands of community members and token holders, hundreds of open-source developers, or our world-class core team.</div>
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
          <div className="team d-flex layout">
            <div className="text-container">
              <Typography.H2>A world-class team</Typography.H2>
              <div className='lighter mt-2 mb-4'>Our team is led by serial entrepreneurs, early employees at YouTube, and engineering managers at Google, Coinbase and Dropbox.</div>
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
                width={`${isMobile ? '280' : '560'}`}
                height={`${isMobile ? '158' : '316'}`}
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
          {articleList && (
            <div className='article-container mt-5'>
                <Card
                  webProperty={'originprotocol'}
                  title={articleList[0].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articleList[0].attributes.description}
                />
                <Card
                  webProperty={'originprotocol'}
                  title={articleList[1].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articleList[1].attributes.description}
                />
                <Card
                  webProperty={'originprotocol'}
                  title={articleList[2].attributes.title}
                  imgSrc={assetRootPath('/images/logos/origin-press.svg')}
                  imgAlt={'Origin Protocol'}
                  body={articleList[2].attributes.description}
                />
            </div>
          )}
        </div>
      </section>
      <section className="jobs light">
        <div className="d-flex flex-column">
          <Typography.H2>Work at Origin</Typography.H2>
          <div className='mb-3'></div>
          <div className='lighter mt-2 mb-4'>We’re always looking for the best talent. See open positions below.</div>
          <div className='mb-5'></div>
          <Typography.H3>Engineering</Typography.H3>
          <div className='mt-4'></div>
          <div className="d-flex flex-row">
            <div className='role mt-2 mb-4'>Data Engineer</div>
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
            <div className='role mt-2 mb-4'>Frontend Engineer</div>
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
            <div className='role mt-2 mb-4'>Senior Full-stack Engineer</div>
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
            <div className='role mt-2 mb-4'>Senior Solidity Engineer</div>
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
            <div className='role mt-2 mb-4'>Marketing Designer</div>
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
            <div className='role mt-2 mb-4'>Email Marketer</div>
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
            <div className='role mt-2 mb-4'>Performance Marketer (Paid Ads)</div>
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
            <div className='role mt-2 mb-4'>Public and Media Relations Manager</div>
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
            <div className='role mt-2 mb-4'>Product Manager (DeFi)</div>
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
            <div className='role mt-2 mb-4'>Product Manager (NFTs)</div>
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
            <div className='role mt-2 mb-4'>Business Development Manager (DeFi)</div>
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
            <div className='role mt-2 mb-4'>Business Development Manager (NFTs)</div>
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
          background-position: 100% 0%;
          background-size: 40vw;
        }

        section.company {
          background-image: url(/images/graphics/splines32.svg);
          background-repeat: no-repeat;
          background-position: 90% 90%;
          background-size: 40vw;
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
          width: 70%;
          margin-top: 50px;
          margin-bottom: 50px;
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
          
        }

        .community .text-container {
          width: 70%;
          margin: 100px 100px 0 100px;
        }

        .team {
          margin-top: 150px;
          margin-bottom: 100px;
        }

        .team .text-container{
          width: 50%;
          margin-right: 50px;
        }

        .video-container {
          position: relative;
          padding: 10px;
          background: #000;
          webkit-border-radius: 20px;
          -moz-border-radius: 20px;
          border-radius: 20px;
          width: 580px;
          height: 335px;
          margin: 0 auto;
          overflow: hidden;
        }

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
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

        .role {
          font-size: 1.25rem;
        }

        .article-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 1vw;
        }
        
        @media (max-width: 1199px) {
          section.company {
            background-position: 90% 80%;
            background-size: 50vw;
          }

          .community .image-container {
            margin-top: 50px;
          }

          .team .button {
            padding-left: 35px;
            padding-right: 35px;
          }
        }

        @media (max-width: 992px) {
          section.intro {
            background-image: url(/images/graphics/splines34.svg);
            background-repeat: no-repeat;
            background-position: 100% 60vw;
            background-size: 100vw;
          }

          section.story {
            text-align: center;
          }

          .story .layout {
            flex-direction: column-reverse;
          }

          .origin-story-logo {
            margin: auto;
          }

          .story .text-container {
            width: 100%;
            margin-top: 50px;
          }

          .intro .container {
            width: 100%;
            margin-left: 5%;
          }

          section.ousd {
            text-align: center;
          }

          .ousd .layout {
            flex-direction: column;
          }

          .origin-dollar-logo {
            margin: auto;
          }

          .ousd .text-container {
            width: 100%;
            margin-top: 50px;
          }

          section.company {
            background-image: none;
            text-align: center;
          }

          .community.layout {
            flex-direction: column;
          }

          .community .text-container {
            width: 100%;
            margin: 50px 0 0 0;
          }

          .community .image-container {
            margin: auto;
          }

          .team {
            margin-top: 100px;
          }

          .team.layout {
            flex-direction: column-reverse;
          }

          .team .text-container {
            width: 100%;
            margin: 50px 0 0 0;
          }

          .video-container {
            width: 280px;
            height: 168px;
          }

          .team .button {
            margin-bottom: 20px;
            padding-left: 50px;
            padding-right: 50px;
          }

          .article-container {
            grid-template-columns: 1fr;
            grid-gap: 5vw;
          }
        }
      `}</style>
      <Footer />
    </>
  )
}

export default withIsMobile(Home)
