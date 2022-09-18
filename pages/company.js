import React from 'react'
import Head from 'next/head'
import News from 'components/news'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import { assetRootPath } from 'utils/image'
import { Typography, Header, Footer, Card } from 'origin-storybook'

export default function Company({ locale, onLocale }) {
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
        <div className="row mt-5">
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'Origin Logo'}
              imgSrc={assetRootPath('/images/logos/origin-press.svg')}
              imgAlt={'Origin Logo'}
              body={''}
            />
          </div>
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'Origin Dollar Logo'}
              imgSrc={assetRootPath('/images/logos/dollar-press.svg')}
              imgAlt={'Origin Dollar Logo'}
              body={''}
            />
          </div>
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'Origin Story'}
              imgSrc={assetRootPath('/images/logos/story-press.svg')}
              imgAlt={'Origin Story'}
              body={''}
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'OGN Symbol'}
              imgSrc={assetRootPath('/images/logos/ogn-press.svg')}
              imgAlt={'OGN Symbol'}
              body={''}
            />
          </div>
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'OUSD Symbol'}
              imgSrc={assetRootPath('/images/logos/ousd-press.svg')}
              imgAlt={'OUSD Symbol'}
              body={''}
            />
          </div>
          <div className='col'>
            <Card
              webProperty={'originprotocol'}
              title={'OGV Symbol'}
              imgSrc={assetRootPath('/images/logos/ogv-press.svg')}
              imgAlt={'OGV Symbol'}
              body={''}
            />
          </div>
        </div>
      </section>
      <section className='inquiries grey'>
        <div className='text-center w-50 m-auto'>
          <Typography.H2>Press inquiries</Typography.H2>
          <div className='mb-3'>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</div>
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

        .companies {
          justify-content: space-around;
          margin: 50px 0;
        }

        @media (max-width: 1199px) {

        }

        @media (max-width: 799px) {
          .company {
            width: 15vw;
          }
        }
      `}</style>
    </>
  )
}
