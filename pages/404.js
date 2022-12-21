import React from "react"
import Link from 'next/link'
import Head from "next/head"
import { Typography, Header, Footer } from '@originprotocol/origin-storybook'
import { fetchAPI } from '../lib/api'
import transformLinks from '../src/utils/transformLinks'

const Error404 = ({ navLinks }) => { 
  return (
    <>
      <Head>
        <title>404 | Origin Protocol</title>
      </Head>
      <section className='error grey'>
        <Header mappedLinks={navLinks} webProperty="originprotocol" />
        <div className='max-w-screen-xl mx-auto px-8 pb-[136px] md:pb-[294px]'>
          <div className=''>
            <div className='mt-5 md:mt-16'>
              <Typography.H2 as='h1' className='inline-block text-[36px] leading-[40px] md:text-[72px] md:leading-[84px] gradient1' style={{ fontWeight: 700 }}>
                {'Ooops...'}
              </Typography.H2>
            </div>
            <div className='max-w-[541px] mt-[20px] md:mt-[36px]'>
              <Typography.H3 className='text-[32px] leading-[56px] md:text-[56px] md:leading-[64px]' style={{ fontWeight: 400 }}>
                {'Sorry, we can’t seem to find that page'}
              </Typography.H3>
            </div>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="button gradient2 max-w-[328px] mt-10 md:mt-20 px-20 py-5 text-center"
            >
              <Typography.H7 className='opacity-100' style={{ fontWeight: 400 }}>
                Go back home
              </Typography.H7>
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx>{`
        section.error {
          background-image: url(/images/graphics/splines-404.png);
          background-repeat: no-repeat;
          background-position: right bottom;
        }

        @media (max-width: 1280px) {
          section.error {
            background-size: 40vw;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const navRes = await fetchAPI('/ousd-nav-links', {
    populate: {
      links: {
        populate: '*',
      },
    },
  })

  const navLinks = transformLinks(navRes.data)

  return {
    props: {
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  }
}

export default Error404
