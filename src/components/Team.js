import React, { useState, useEffect } from "react";
import { Typography } from "@originprotocol/origin-storybook";
import { assetRootPath } from "utils/image";
import Image from "next/image";

const TeamMember = ({ name, title, description, avatar, links }) => {
  const linkKeys = Object.keys(links);

  return (
    <>
      <div className="card">
        <div className="flex flex-row mb-3">
          <Image
            src={assetRootPath(avatar.url)}
            className="rounded-full"
            alt={name}
            height="100"
            width="100"
          />
          <div className="links">
            <ul>
              {linkKeys.map((l, i) => {
                if (!links[l]) return "";

                return (
                  <li key={i}>
                    <a
                      href={links[l]}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={
                          l === "wikipedia" || l === "github"
                            ? assetRootPath(`/images/logos/external-link.svg`)
                            : assetRootPath(`/images/logos/icon-${l}.svg`)
                        }
                        className="link ml-2"
                        alt={l}
                        width="20px"
                        height="20px"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="name">{name}</div>
        <div className="title mb-3">{title}</div>
        <div className="description">{description}</div>
      </div>
      <style jsx>{`
        .card {
          position: relative;
          top: 50px;
          background-color: #ffffff20;
          max-width: 21vw;
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

        @media (max-width: 799px) {
          .card {
            max-width: 40vw;
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
  );
};

const Team = ({ team }) => {
  return (
    <>
      <section className="team relative gradient3">
        <div className="spots1">
          <Image
            src={assetRootPath('/images/graphics/spots1.png')}
            alt="spots"
            width="500px"
            height="1000px"
          />
        </div>
        <div className="spots2">
          <Image
            src={assetRootPath('/images/graphics/spots2.png')}
            alt="spots"
            width="800px"
            height="600px"
          />
        </div>
        <div className="max-w-screen-xl mx-auto py-20 px-8">
          <div className="content text-center">
            <Typography.H3 as='h2' className="text-white font-bold">Core team</Typography.H3>
            <div className="text w-3/4 mx-auto mt-3 font-light">
              The core contributors hail from iconic tech companies like
              Coinbase, YouTube, Google, Paypal, Dropbox, and Pinterest. Our
              founders are serial entrepreneurs, and multiple team members have
              founded and exited successful ventures.
            </div>
            <div className="container-fluid text-left mt-5 max-w-screen-xl mx-auto">
              {team?.core?.map((t) => {
                return (
                  <TeamMember
                    name={t.name}
                    title={t.title}
                    description={t.bio}
                    avatar={t.avatar}
                    key={t.name}
                    links={{
                      linkedin: t.linkedinUrl,
                      twitter: t.twitterUrl,
                      wikipedia: t.otherUrl,
                    }}
                  />
                );
              })}
            </div>
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
          top: 0;
          left: 0;
          z-index: 0;
        }

        .spots2 {
          position: absolute;
          bottom: -6px;
          right: 0;
          z-index: 0;
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
  );
};

export default Team;
