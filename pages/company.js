import React from 'react'
import Layout from 'components/Layout'
import Nav from 'components/Nav'
import CompanyContent from 'components/CompanyContent'

export default function Company({ locale, onLocale }) {
  return (
    <>
      <Layout locale={locale} onLocale={onLocale} dapp>
      <header>
        <Nav dapp page={'community'} locale={locale} onLocale={onLocale} />
        </header>
        <div className="home d-flex flex-column">
          <CompanyContent />
        </div>
      </Layout>
      <style jsx>{`
        

        @media (max-width: 799px) {
          .home {
            padding: 0;
          }
        }
      `}</style>
    </>
  )
}
