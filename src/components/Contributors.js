import { Typography } from "@originprotocol/origin-storybook";
import Image from "next/image";
import React from "react";

const Contributor = ({ login, avatar, profile }) => {
  return (
    <>
      <div className='rounded-full'>
        <a href={profile} target="_blank" rel="noopener noreferrer">
          <img
            src={avatar}
            className="contributor rounded-full border-[1px]"
            alt={login}
            
          />
        </a>
      </div>
      <style jsx>{`
        @media (min-width: 2000px) {
          .contributor {
            width: 72px;
            height: 72px;
          }
        }
      `}</style>
    </>
  );
};

const Contributors = ({contributors}) => {
  return (
    <>
      <section className="contributors grey text-center">
        <div className="container-fluid max-w-screen-xl mx-auto py-20">
          <Typography.H5>{`${contributors.length} open-source contributors`}</Typography.H5>
          <div className="list container-fluid mt-10 px-6">
            {contributors?.map((c, i) => {
              return (
                <Contributor
                  login={c.login}
                  avatar={c.avatar_url}
                  profile={c.html_url}
                  key={c.html_url}
                />
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .list.container-fluid {
          display: grid;
          grid-template-columns: repeat(14, 1fr);
          grid-gap: 1vw;
        }

        @media (max-width: 1199px) {
          .list.container-fluid {
            grid-template-columns: repeat(10, 1fr);
          }
        }

        @media (max-width: 767px) {
          .list.container-fluid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>
    </>
  );
};

export default Contributors;
