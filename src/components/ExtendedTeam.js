import React from "react";
import { Typography } from "@originprotocol/origin-storybook";
import { assetRootPath } from "utils/image";
import Image from "next/future/image";

const ExtendedTeam = ({ team }) => {
  return (
    <>
      <section className="extended light text-center">
        <div className="max-w-screen-xl mx-auto py-20 px-8">
          <Typography.H3 className='font-bold text-left'>Community Team</Typography.H3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10 mt-16 mb-5">
            {team?.community?.map((t) => {
              const avatar = t.avatar;
              return (
                <div key={t.name}>
                  <div className="w-[80px] sm:w-[160px] m-auto aspect-square">
                    <Image
                      src={assetRootPath(avatar?.url)}
                      alt={t.name}
                      width='0'
                      height='0'
                      sizes='100vw'
                      className='w-full h-full mb-3 rounded-full'
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <Typography.Body2 className="name mt-4 font-bold">{t.name}</Typography.Body2>
                </div>
              );
            })}
          </div>
          <Typography.H3 className='font-bold text-left mt-20'>Advisors</Typography.H3>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-10 mt-16 mb-5">
            {team?.advisor?.map((t) => {
              const avatar = t.avatar;
              return (
                <div key={t.name}>
                  <a
                    href={t.linkedinUrl || t.twitterUrl || t.otherUrl}
                    target="_blank"
                    rel="noopenner noreferrer"
                  >
                    <div className="w-[80px] sm:w-[160px] m-auto aspect-square">
                      <Image
                        src={assetRootPath(avatar?.url)}
                        className="rounded-full mb-3"
                        alt={t.name}
                        height="400"
                        width="400"
                      />
                    </div>
                    <Typography.Body2 className="name mt-4 font-bold">{t.name}</Typography.Body2>
                    <Typography.Caption className="name mt-1 opacity-75 font-light">{t.title}</Typography.Caption>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExtendedTeam;