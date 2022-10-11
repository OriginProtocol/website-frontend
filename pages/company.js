import React from 'react'
import Head from 'next/head'
import News from 'components/News'
import { assetRootPath } from 'utils/image'
import { Typography, Header, Footer, Card } from '@originprotocol/origin-storybook'
import { mappedLinks } from 'utils/constants'
import { fetchAPI } from "../lib/api"

export default function Company({ locale, onLocale, articles, meta, categories }) {
  return (
    <>
      <Head>
        <title>Company</title>
      </Head>
      <Header
        mappedLinks={mappedLinks.links}
        webProperty='originprotocol'
      />
      <section className='intro grey pb-12'>
        <div className='container-fluid max-w-screen-xl mx-auto px-6 mb-6'>
          <Typography.H1>Latest news</Typography.H1>
        </div>
      </section>
      <News articles={articles} meta={meta} categories={categories} />
      <section className='articles grey'>
        <div className='container-fluid max-w-screen-xl mx-auto py-10 px-6'>
          <Typography.H3>As seen in</Typography.H3>
          <div className='companies flex flex-row'>
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
          <div className='companies flex flex-row'>
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
        </div>
      </section>
      <section className='press light'>
        <div className='container-fluid max-w-screen-xl mx-auto py-10 px-6'>
          <Typography.H3>Press kit</Typography.H3>
          <div className="container mt-5">
            <Card
              webProperty={'press'}
              title={'Origin Logo'}
              imgSrc={assetRootPath('/images/logos/origin-press.svg')}
              imgAlt={'Origin Logo'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/logo-origin.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/logo-origin.png')}
            />
            <Card
              webProperty={'press'}
              title={'Origin Dollar Logo'}
              imgSrc={assetRootPath('/images/logos/dollar-press.svg')}
              imgAlt={'Origin Dollar Logo'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/logo-origin-dollar.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/logo-origin-dollar.png')}
            />
            <Card
              webProperty={'press'}
              title={'Origin Story'}
              imgSrc={assetRootPath('/images/logos/story-press.svg')}
              imgAlt={'Origin Story'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/logo-origin-story.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/logo-origin-story.png')}
            />
            <Card
              webProperty={'press'}
              title={'OGN Symbol'}
              imgSrc={assetRootPath('/images/logos/ogn-press.svg')}
              imgAlt={'OGN Symbol'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/symbol-ogn.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/symbol-ogn.png')}
            />
            <Card
              webProperty={'press'}
              title={'OUSD Symbol'}
              imgSrc={assetRootPath('/images/logos/ousd-press.svg')}
              imgAlt={'OUSD Symbol'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/symbol-ousd.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/symbol-ousd.png')}
            />
            <Card
              webProperty={'press'}
              title={'OGV Symbol'}
              imgSrc={assetRootPath('/images/logos/ogv-press.svg')}
              imgAlt={'OGV Symbol'}
              body={''}
              linkText={'Download SVG'}
              linkHref={assetRootPath('/images/logos/symbol-ogv.svg')}
              linkText2={'Download PNG'}
              linkHref2={assetRootPath('/images/logos/symbol-ogv.png')}
            />
          </div>
        </div>
      </section>
      <section className='inquiries grey'>
        <div className='container-fluid max-w-screen-xl mx-auto py-20 px-6'>
          <div className='content text-center m-auto space-y-6'>
            <Typography.H2>Press inquiries</Typography.H2>
            <div className='mt-2 mb-4'>Origin Story powers NFT ecosystems, providing creators with branded storefronts and secondary marketplaces.</div>
            <a
                href={process.env.NEXT_PUBLIC_DISCORD_URL}
                target='_blank'
                rel='noopener noreferrer'
                className='button gradient2'
            >
              Get in touch
            </a>
          </div>
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

export async function getStaticProps() {
  // Run API calls in parallel
  const articlesRes = await fetchAPI("/website/blog/en", { populate: ["cover", "category"] });

  const categories = {}
  articlesRes.data.forEach(article => {
    categories[article.category?.slug] = article.category
  })

  return {
    props: {
      articles: articlesRes.data,
      meta: articlesRes.meta,
      categories: Object.values(categories),
    },
  };
}
