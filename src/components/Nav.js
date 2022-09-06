import React from 'react'
import classnames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useStoreState } from 'pullstate'

import withIsMobile from 'hoc/withIsMobile'
import { formatCurrency } from 'utils/math'
import { getDocsLink } from 'utils/getDocsLink'
import LanguageOptions from 'components/LanguageOptions'
//import LanguageSelected from 'components/LanguageSelected'
import LocaleDropdown from 'components/LocaleDropdown'
import ContractStore from 'stores/ContractStore'

//import Languages from '../constants/Languages'
import { adjustLinkHref } from 'utils/utils'
import { assetRootPath } from 'utils/image'

const Nav = ({ dapp, isMobile, locale, onLocale, page }) => {
  const { pathname } = useRouter()

  return (
    <>
      <nav
        className={classnames(
          'navbar navbar-expand-lg d-flex justify-content-center flex-column'
        )}
      >
        <div className="container p-lg-0 flex-nowrap">
          <Link href={adjustLinkHref('/')}>
            <a className="navbar-brand d-flex flex-column justify-content-center">
              <img
                src={assetRootPath('/images/pages/origin-wordmark-blue.svg')}
                className="origin-logo"
                alt="Origin Logo"
              />
            </a>
          </Link>
          <button
            className="navbar-toggler d-lg-none ml-4"
            type="button"
            data-toggle="collapse"
            data-target=".navLinks"
            aria-controls="navLinks"
            aria-expanded="false"
            aria-label="Toggle menu side panel"
          >
            <img
              src={assetRootPath('/images/menu-icon.svg')}
              alt="Activity menu"
            />
          </button>
          <div
            className="primarySidePanel dark-background collapse"
            data-toggle="collapse"
            data-target=".primarySidePanel"
            aria-controls="primarySidePanel"
          />
          <div
            className="navLinks dark-background collapse"
            data-toggle="collapse"
            data-target=".navLinks"
            aria-controls="navLinks"
          />
          <div
            className="langLinks dark-background collapse"
            data-toggle="collapse"
            data-target=".langLinks"
            aria-controls="langLinks"
          />
          <div className="langLinks collapse navbar-collapse justify-content-end lang-opts">
            <button
              className="close navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".langLinks"
              aria-controls="langLinks"
              aria-expanded="false"
              aria-label="Toggle language navigation"
            >
              <img
                src={assetRootPath('/images/close.svg')}
                alt="Close icon"
                loading="lazy"
              />
            </button>
            <LanguageOptions locale={locale} onLocale={onLocale} />
          </div>
          <div className="navLinks collapse navbar-collapse justify-content-end flex-column flex-lg-row d-flex">
            <button
              className="close navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target=".navLinks"
              aria-controls="navLinks"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img
                src={assetRootPath('/images/close.svg')}
                alt="Close icon"
                loading="lazy"
              />
            </button>
            <div className="d-flex flex-column flex-lg-row mb-auto w-100 align-items-center">
                <ul className={`navbar-nav ml-auto`}>
                  <li
                    className={classnames('nav-item', {
                      active: pathname === '/',
                    })}
                  >
                    <Link href={adjustLinkHref('/')}>
                      <a className="nav-link">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li
                    className={classnames('nav-item')}
                  >
                    <a
                      href={'https://ousd.com'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      Products
                    </a>
                  </li>
                  <li
                    className={classnames('nav-item', {
                      active: pathname === '/company',
                    })}
                  >
                    <Link href={adjustLinkHref('/company')}>
                      <a className="nav-link">
                        Company
                      </a>
                    </Link>
                  </li>
                  <li
                    className={classnames('nav-item', {
                      active: pathname === '/community',
                    })}
                  >
                    <Link href={adjustLinkHref('/community')}>
                      <a className="nav-link">
                        Community
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                      English
                  </li>
                </ul>
              {<div
                className={`d-flex flex-column ${
                  dapp ? 'flex-lg-row-reverse' : 'flex-lg-row'
                }`}
              >
                <LocaleDropdown
                  locale={locale}
                  onLocale={onLocale}
                  outerClassName={`${dapp ? 'ml-2' : ''}`}
                  className="nav-dropdown"
                  useNativeSelectbox={false}
                />
                </div>}
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar-brand {
          min-height: 40px;
        }

        .origin-logo {
          max-width: 100px;
          margin-right: 500px;
        }

        .navbar {
          padding-top: 50px;
          font-size: 0.8125rem;
          margin-top: 0;
          z-index: 2;
        }
        .navbar a {
          color: black;
          text-decoration: none;
        }
        .navbar a:hover {
          opacity: 0.8;
        }
        .navbar .container {
          margin-top: 30px;
        }
        .navbar-toggler {
          margin-left: 10px;
          padding-left: 0;
          padding-right: 0;
        }
        .navbar-toggler:focus {
          border-color: transparent;
          outline: none;
          opacity: 0.8;
        }
        .nav-item {
          align-items: center;
          display: flex;
          margin-right: 31px;
        }

        .dark-background {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: #000000aa;
          z-index: 3;
        }

        .navLinks {
          z-index: 4;
        }
        
        @media (max-width: 992px) {
          .container {
            width: 100%;
            max-width: 100%;
            padding-left: 30px;
            padding-right: 30px;
          }
          .navbar-collapse {
            background: white;
            font-size: 1.5rem;
            position: fixed;
            left: 100%;
            padding: 74px 30px;
            height: 9999px;
            width: 256px;
            transition: all 0.3s ease;
            display: block;
            top: 0;
          }
          .navbar-collapse.collapsing {
            transition: all 0.3s ease;
            display: block;
          }
          .navbar-collapse.show {
            left: calc(100% - 256px);
          }
          .navbar a {
            color: black;
          }

          .close {
            background: none;
            border: none;
            position: absolute;
            top: 30px;
            right: 30px;
          }

          ul {
            position: relative;
            left: -15px;
            width: calc(100% + 30px);
          }

          .nav-item {
            font-size: 1.5rem;
            margin: 0 0 28px;
          }

          .nav-item.active {
            border-left: 5px solid #1a82ff;
          }

          .nav-item:not(.active) {
            border-left: 5px solid white;
          }

          .nav-item .nav-link {
            line-height: 1;
            padding: 2px 0 2px 30px;
          }

          .navLinks {
            height: 100vh !important;
            padding-bottom: 30px !important;
          }
        }

        @media (max-width: 992px) {
          .origin-logo {
            max-width: 170px;
          }

          .navbar .container {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }

        @media (min-width: 992px) {
          .navbar .nav-link {
            border: 1px solid transparent;
            padding-left: 0;
            padding-right: 0;
          }

          .navbar .nav-link:hover,
          .navbar .active .nav-link {
            border-bottom-color: white;
            opacity: 1;
          }

          .langLinks {
            display: none !important;
          }
        }

        @media (min-width: 1200px) {
          .navbar {
            margin-top: 0;
          }
        }

        @media (max-width: 992px) {
          .navbar {
            z-index: 100;
          }

          .navbar .container {
            margin: 1.5rem 0;
            padding: 0 30px;
          }

          .lang-opts {
            z-index: 1000;
          }
        }
      `}</style>
    </>
  )
}

export default withIsMobile(Nav)
