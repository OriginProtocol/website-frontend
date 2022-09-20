import React from 'react'
import Head from 'next/head'
import News from 'components/News'
import News2 from 'components/News2'
import { assetRootPath } from 'utils/image'
import { Typography, Header, Footer, Card } from 'origin-storybook'

import { fetchAPI } from "../lib/api";

export default function Company({ locale, onLocale, articles, categories, homepage }) {
  return (
    <>
      <Head>
        <title>Origin Protocol</title>
      </Head>
      <Header webProperty='originprotocol'/>
      <section className='intro grey'>
        <Typography.H1>Latest news</Typography.H1>
      </section>
      <News />
      {/*<News2 articles={articles} categories={categories} homepage={homepage} />*/}
      <section className='articles grey'>
        <Typography.H2>As seen in</Typography.H2>
        <div className='companies d-flex flex-row'>
          <img
            src={assetRootPath('/images/logos/company-coindesk.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-wsj.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-nasdaq.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-tnw.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-fastcompany.svg')}
            className="company"
            alt="Company"
          />
        </div>
        <div className='companies d-flex flex-row'>
          <img
            src={assetRootPath('/images/logos/company-vice.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-cointelegraph.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-inc.svg')}
            className="company"
            alt="Company"
          />
          <img
            src={assetRootPath('/images/logos/company-techcrunch.svg')}
            className="company"
            alt="Company"
          />
        </div>
      </section>
      <section className='press light'>
        <Typography.H2>Press kit</Typography.H2>
        <div className="container mt-5">
            <Card
              webProperty={'originprotocol'}
              title={'Origin Logo'}
              imgSrc={assetRootPath('/images/logos/origin-press.svg')}
              imgAlt={'Origin Logo'}
              body={''}
            />
            <Card
              webProperty={'originprotocol'}
              title={'Origin Dollar Logo'}
              imgSrc={assetRootPath('/images/logos/dollar-press.svg')}
              imgAlt={'Origin Dollar Logo'}
              body={''}
            />
            <Card
              webProperty={'originprotocol'}
              title={'Origin Story'}
              imgSrc={assetRootPath('/images/logos/story-press.svg')}
              imgAlt={'Origin Story'}
              body={''}
            />
            <Card
              webProperty={'originprotocol'}
              title={'OGN Symbol'}
              imgSrc={assetRootPath('/images/logos/ogn-press.svg')}
              imgAlt={'OGN Symbol'}
              body={''}
            />
            <Card
              webProperty={'originprotocol'}
              title={'OUSD Symbol'}
              imgSrc={assetRootPath('/images/logos/ousd-press.svg')}
              imgAlt={'OUSD Symbol'}
              body={''}
            />
            <Card
              webProperty={'originprotocol'}
              title={'OGV Symbol'}
              imgSrc={assetRootPath('/images/logos/ogv-press.svg')}
              imgAlt={'OGV Symbol'}
              body={''}
            />
        </div>
      </section>
      <section className='inquiries grey'>
        <div className='content text-center m-auto'>
          <Typography.H2>Press inquiries</Typography.H2>
          <div className='mt-2 mb-4'>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</div>
          <a
              href=''
              target='_blank'
              rel='noopener noreferrer'
              className='button gradient2'
          >
            Get in touch
          </a>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section.inquiries {
          background-image: url(/images/graphics/splines25.svg);
          background-repeat: no-repeat;
          background-position: 100% 100%;
          background-size: 40vw;
        }

        .press .container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-gap: 2vw;
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
    </>
  )
}
