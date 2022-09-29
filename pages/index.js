import Link from 'next/link'
import React, { useEffect } from 'react'

import { Card, Footer, Header, Typography } from '@originprotocol/origin-storybook'
import Dashboard from 'components/Dashboard'
import EmailList from 'components/EmailList'
import withIsMobile from 'hoc/withIsMobile'
import Image from 'next/image'
import useArticleQuery from 'queries/useArticleQuery'
import StatStore from 'stores/StatStore'
import { mappedLinks } from 'utils/constants'
import { assetRootPath } from 'utils/image'
import { adjustLinkHref } from 'utils/utils'
import styles from 'styles/Home.module.css'

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
      <Header
        mappedLinks={mappedLinks.links}
        webProperty='originprotocol'
      />
      <section className="grey relative">
        <span className={`${styles.splines34} absolute z-0`}>
          <Image src='/images/graphics/splines34.svg' height={1363} width={1341} alt="spline" />
        </span>
        <div className="relative overflow-hidden max-w-screen-xl mx-auto pb-20 px-8">
          <Typography.H2 as='h1'>
            Onboarding the next{' '}
            <br className='hidden md:block' />
            <span className='gradient1 font-bold'>100M users </span>
            {'to crypto'}
          </Typography.H2>
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
      <section className="story light d-flex flex-col z-10 relative">
        <div className='container-fluid'>
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
        </div>
      </section>
      <section className="ousd dark gradient3 d-flex flex-col">
        <div className='container-fluid'>
          <div className="d-flex layout">
            <div className='text-container'>
              <img
                src={assetRootPath('/images/logos/origin-dollar-wordmark.svg')}
                className="origin-dollar-logo mb-2"
                alt="Origin Dollar Logo"
              />
              <Typography.H3 className='text-white'>A yield-generating stablecoin</Typography.H3>
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
        </div>
      </section>
      <section className="company light">
        <div className='container-fluid'>
          <div className="d-flex flex-col">
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
              <div className={`${styles.videoContainer}`}>
                <iframe
                  width={`${isMobile ? '280' : '560'}`}
                  height={`${isMobile ? '158' : '316'}`}
                  src="https://www.youtube.com/embed/ERh2n-vlpQ4"
                  className={`${styles.iframe}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news grey">
        <div className='container-fluid'>
          <div className="d-flex flex-col">
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
                    imgSrc={articleList[0].attributes.cover.data.attributes.formats.large.url}
                    imgAlt={'Origin Protocol'}
                    body={articleList[0].attributes.description}
                    linkText={'Read more'}
                    linkHref={`/article/${articleList[0].attributes.slug}`}
                  />
                  <Card
                    webProperty={'originprotocol'}
                    title={articleList[1].attributes.title}
                    imgSrc={articleList[1].attributes.cover.data.attributes.formats.large.url}
                    imgAlt={'Origin Protocol'}
                    body={articleList[1].attributes.description}
                    linkText={'Read more'}
                    linkHref={`/article/${articleList[1].attributes.slug}`}
                  />
                  <Card
                    webProperty={'originprotocol'}
                    title={articleList[2].attributes.title}
                    imgSrc={articleList[2].attributes.cover.data.attributes.formats.large.url}
                    imgAlt={'Origin Protocol'}
                    body={articleList[2].attributes.description}
                    linkText={'Read more'}
                    linkHref={`/article/${articleList[2].attributes.slug}`}
                  />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="jobs light">
        <div className='container-fluid'>
          <div className="d-flex flex-col">
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
        </div>
      </section>
      <EmailList />
      <Footer />
    </>
  )
}

export default withIsMobile(Home)
