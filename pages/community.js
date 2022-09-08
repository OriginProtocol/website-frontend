import React from 'react'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import CommunityContent from 'components/CommunityContent'

export default function Community({ locale, onLocale }) {
  return (
    <>
      <Layout locale={locale} onLocale={onLocale} dapp>
        <Nav dapp page={'community'} locale={locale} onLocale={onLocale} />
        <div className="home d-flex flex-column">
          <CommunityContent />
        </div>
      </Layout>
      <style jsx>{`
        .home {
          padding-top: 20px;
        }

        @media (max-width: 799px) {
          .home {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}
