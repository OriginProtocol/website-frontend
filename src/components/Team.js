import React, { useState, useEffect } from 'react'
import { Typography } from '@originprotocol/origin-storybook'
import { assetRootPath } from 'utils/image'
import team from '../../public/team.json'

const TeamMember = ({name, title, description, headshot, links}) => {
  const linkKeys = Object.keys(links)

  return (
    <>
      <div className='card'>
        <div className='d-flex flex-row'>
        <img
          src={assetRootPath(headshot)}
          className="headshot mb-3"
          alt={name}
        />
        <div className='links'>
          <ul>
            {linkKeys.map((l, i) => {
              return (
                <li key={i}>
                  <a
                    href={links[l]}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      src={l === 'wikipedia' || l === 'github' ? assetRootPath(`./images/logos/external-link.svg`) : assetRootPath(`./images/logos/icon-${l}.svg`)}
                      className="link ml-2"
                      alt={l}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        </div>
        <div className='name'>{name}</div>
        <div className='title mb-3'>{title}</div>
        <div className='description'>{description}</div>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          top: 50px;
          font-family: 'Poppins';
          background-color: #ffffff20;
          width: 21vw;
          height: auto;
          padding: 30px;
          border-radius: 20px;
        }

        .card:nth-of-type(even) {
          top: 150px;
        }

        .headshot {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        li {
          display: inline-block;
        }

        .links {
          align-self: flex-start;
          margin-left: auto;
        }

        .link {
          width: 20px;
        }

        .name {
          font-size: 1.125rem;
          font-weight: 600;
        }

        .title {
          font-size: 1rem;
          font-weight: 300;
        }

        .description {
          font-size: 0.875rem;
          font-weight: 300;
        }

        @media (max-width: 1199px) {

        }

        @media (max-width: 799px) {
          .card {
            width: 40vw;
            padding: 20px;
          }

          .card:nth-of-type(even) {
            top: 100px;
          }

          .headshot {
            width: 70px;
            height: 70px;
            border-radius: 50%;
          }

          .name {
            font-size: 1rem;
            font-weight: 600;
          }
  
          .title {
            font-size: 0.875rem;
            font-weight: 300;
          }

          .description {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

const Team = () => {
  return (
    <>
      <section className='team gradient3'>
        <img
          src={assetRootPath('/images/graphics/spots1.svg')}
          className="spots1"
          alt="spots"
        />
        <img
          src={assetRootPath('/images/graphics/spots2.svg')}
          className="spots2"
          alt="spots"
        />
        <div className='content text-center'>
          <Typography.H2>Core team</Typography.H2>
          <div className='text m-auto mt-3'>The core contributors hail from iconic tech companies like Coinbase, YouTube, Google, Paypal, Dropbox, and Pinterest. Our founders are serial entrepreneurs, and multiple team members have founded and exited successful ventures.</div>
          <div className='container-fluid text-left mt-5'>
            {team.core.map((t) => {
              return (
                <TeamMember name={t.name} title={t.title} description={t.description} headshot={t.headshot} links={t.links} />)
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        section.team {
          position: relative;
          z-index: 2;
          padding-bottom: 250px;
        }

        .content {
          position: relative;
          z-index: 1;
        }
        
        .spots1 {
          position: absolute;
          width: 25%;
          top: 0;
          left: 0;
          z-index: 0;
        }

        .spots2 {
          position: absolute;
          width: 50%;
          bottom: 0;
          right: 0;
          z-index: 0;
        }

        .text {
          width: 50%;
        }

        .container-fluid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 1vw;
        }

        @media (max-width: 1199px) {
          .text {
            width: 75%;
          }
        }

        @media (max-width: 799px) {
          .container-fluid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 3vw;
          }

          .text {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Team