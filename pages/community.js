import React, { useState, useEffect } from 'react'
import { useStoreState } from 'pullstate'
import StatStore from 'stores/StatStore'
import { Typography, Header, Footer, Card, AltCard } from '@originprotocol/origin-storybook'
import Contributors from 'components/Contributors'
import Team from 'components/Team'
import team from '../public/team.json'
import useSocialQuery from 'queries/useSocialQuery'
import withIsMobile from 'hoc/withIsMobile'
import { assetRootPath } from 'utils/image'
import { formatCurrency } from 'utils/math'
import { mappedLinks } from 'utils/constants'

const Community = ({ locale, onLocale, isMobile }) => {
  const [loaded, setLoaded] = useState(false);

  const socials = useStoreState(StatStore, (s) => {
    return s.socials || 0
  })

  const socialQuery = useSocialQuery({
    onSuccess: (socials) => {
      StatStore.update((s) => {
        s.socials = socials
      })
    },
  })

  useEffect(() => {
    socialQuery.refetch()
    setLoaded(true)
  }, []);

  return (
    <>
      {loaded && (
        <div>
          <Header
            webProperty='originprotocol'
            mappedLinks={mappedLinks.links}
          />
          <section className='intro grey'>
            <div className='container-fluid d-flex layout'>
              <div className='d-flex flex-column'>
                <Typography.H3>
                  {'Welcome to the '}
                  <span className='gradient1 bold'>Origin community</span>
                </Typography.H3>
                <div className='mt-3'>Origin is a decentralized ecosystem hundreds of thousands strong</div>
              </div>
              <div className="image-container">
                <img
                  src={assetRootPath('/images/graphics/ellipses-community.png')}
                  className="ellipses"
                  alt="Ellipses"
                />
              </div>
            </div>
          </section>
          <section className='contact light'>
            <Typography.H3>Partner with Origin</Typography.H3>
            <div className='drops container-fluid mt-5 mb-5'>
              <Card
                webProperty={'launchpad'}
                title={'3LAU'}
                imgSrc={assetRootPath('/images/screens/background-3lau.svg')}
                imgAlt={'3LAU'}
                thumbnailSrc={assetRootPath('/images/screens/avatar-3lau.svg')}
                thumbnailAlt={'3LAU'}
                body={"Acclaimed musician and producer 3LAU's Ultraviolet Vinyl NFT collection was auctioned on Origin's NFT platform with each NFT..."}
                linkText={'Learn more'}
                linkHref={'https://blog.originprotocol.com/origin-nft-platform-powers-record-setting-11-7m-auction-with-3lau-c30a6812192c'}
              />
              <Card
                webProperty={'launchpad'}
                title={'Inspiration4 Mission'}
                imgSrc={assetRootPath('/images/screens/background-inspiration4.svg')}
                imgAlt={'Inspiration4'}
                thumbnailSrc={assetRootPath('/images/screens/avatar-inspiration4.svg')}
                thumbnailAlt={'Inspiration4'}
                body={'Inspiration4, powered by SpaceX, was the first civilian orbital space mission. Mission Commander Jared Isaacman chose to raise 200...'}
                linkText={'Learn more'}
                linkHref={'https://blog.originprotocol.com/origin-and-inspiration4-partner-for-good-acafa7c41eb8'}
              />
              <Card
                webProperty={'launchpad'}
                title={'Trevor Jones x Don Diablo x Alotta Money'}
                imgSrc={assetRootPath('/images/screens/background-ethereal.svg')}
                imgAlt={'ETHEREAL'}
                thumbnailSrc={assetRootPath('/images/screens/avatar-ethereal.svg')}
                thumbnailAlt={'ETHEREAL'}
                body={'ΞTHΞRΞAL is the coming of age of EthBoy. The original EthBoy was designed as a programmatic art piece that dynamically changes scen...'}
                linkText={'Learn more'}
                linkHref={'https://blog.originprotocol.com/trevor-jones-don-diablo-and-alotta-money-launch-%CE%BEth%CE%BEr%CE%BEal-on-origins-nft-launchpad-f62f5e2c9629'}
              />
              <Card
                webProperty={'launchpad'}
                title={'BT'}
                imgSrc={assetRootPath('/images/screens/background-bt.svg')}
                imgAlt={'BT'}
                thumbnailSrc={assetRootPath('/images/screens/avatar-bt.svg')}
                thumbnailAlt={'BT'}
                body={"Metaversal is BT's 14th artist album and the first album imagined as a programatic blockchain experience. It encompasses beautiful audio..."}
                linkText={'Learn more'}
                linkHref={'https://blog.originprotocol.com/origin-partners-with-bt-to-release-an-album-unlike-anything-youve-seen-before-8659e48ad441'}
              />
            </div>
            <Typography.H3>Community</Typography.H3>
            <div className='socials container-fluid mt-5 mb-5'>
              {socials && socials.stats.map((social) => {
                if (social.name.indexOf(' ') < 0) {
                  return (
                    <AltCard
                      title={social.name.toUpperCase()}
                      body={`${formatCurrency(social.subscribed_count / 1000, 1)}k followers`}
                      imgSrc={assetRootPath(`/images/logos/social-${social.name.toLowerCase()}.svg`)}
                      imgAlt={social.name}
                      narrow={false}
                    />
                  )
                }
              })}
              {/*<AltCard
                title={'YOUTUBE'}
                body={'156.8k followers'}
                imgSrc={assetRootPath('/images/logos/social-youtube.svg')}
                imgAlt={'Youtube'}
                linkText={"Join on Youtube"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={false}
              />
              <AltCard
                title={'BLOCKFOLIO'}
                body={'156.8k followers'}
                imgSrc={assetRootPath('/images/logos/social-blockfolio.svg')}
                imgAlt={'Blockfolio'}
                linkText={"Join on Blockfolio"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={false}
              />*/}
            </div>
            <Typography.H7>Region-specific channels</Typography.H7>
            {socials && (
            <div className='telegram container-fluid mt-5'>
              <AltCard
                title={'INDONESIAN'}
                body={`${formatCurrency(1400 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-indonesia.png')}
                thumbnailAlt={'Flag'}
              />
              <AltCard
                title={'KOREAN'}
                body={`${formatCurrency(1600 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-korea.png')}
                thumbnailAlt={'Flag'}
              />
              <AltCard
                title={'RUSSIAN'}
                body={`${formatCurrency(1300 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-russia.png')}
                thumbnailAlt={'Flag'}
              />
              <AltCard
                title={'SPANISH'}
                body={`${formatCurrency(2400 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-spain.png')}
                thumbnailAlt={'Flag'}
              />
              <AltCard
                title={'TURKISH'}
                body={`${formatCurrency(1100 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-turkey.png')}
                thumbnailAlt={'Flag'}
              />
              <AltCard
                title={'VIETNAMESE'}
                body={`${formatCurrency(2300 / 1000, 1)}k followers`}
                imgSrc={assetRootPath('/images/logos/social-telegram.svg')}
                imgAlt={'Telegram'}
                linkText={"Join"}
                linkHref={'https://twitter.com/originprotocol'}
                narrow={true}
                thumbnailSrc={assetRootPath('/images/graphics/flag-vietnam.png')}
                thumbnailAlt={'Flag'}
              />
    </div>)}
          </section>
          <Team />
          <section className='extended light text-center'>
            <Typography.H5>Community Team</Typography.H5>
            <div className='community container mt-5 mb-5'>
              {team.community.map((t) => {
                const headshot = t.headshot
                return (
                  <div className='profile'>
                    <img
                      src={assetRootPath(headshot)}
                      className="headshot mb-3"
                      alt={t.name}
                    />
                    <div className='name'>{t.name}</div>
                  </div>
                )
              })}
            </div>
            <Typography.H5>Advisors</Typography.H5>
            <div className='advisors container mt-5 text-left'>
              {team.advisors.map((t) => {
                const headshot = t.headshot
                return (
                  <div className='profile'>
                    <a
                      href={t.link}
                      target='_blank'
                      rel='noopenner noreferrer'
                    >
                      <img
                        src={assetRootPath(headshot)}
                        className="headshot mb-3"
                        alt={t.name}
                      />
                      <div className='name'>{t.name}</div>
                    </a>
                  </div>
                )
              })}
            </div>
          </section>
          <Contributors />
          <section className='investors light text-center'>
            <Typography.H3>Notable investors</Typography.H3>
            <div className='companies d-flex flex-row'>
              <img
                src={assetRootPath('/images/logos/company-pantera.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-foundationcapital.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-spartan.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-blocktower.svg')}
                className="company"
                alt="Company"
              />
            </div>
            <div className='companies d-flex flex-row'>
              <img
                src={assetRootPath('/images/logos/company-hackvc.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-f33.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-1kx.svg')}
                className="company"
                alt="Company"
              />
              <img
                src={assetRootPath('/images/logos/company-preangel.svg')}
                className="company"
                alt="Company"
              />
            </div>
            <img
              src={assetRootPath('/images/logos/investors.svg')}
              className="people m-auto"
              alt="Investors"
            />
          </section>
          <Footer />
          <style jsx>{`
            section.intro {
              background-image: url(/images/graphics/splines33.svg);
              background-repeat: no-repeat;
              background-position: 100% 100%;
              background-size: 40vw;
            }

            .intro .container-fluid {
              justify-content: space-around;
            }

            .layout {
              flex-direction: row;
            }

            .contact .drops.container-fluid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 2vw;
            }

            .contact .socials.container-fluid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-gap: 2vw;
            }

            .contact .telegram.container-fluid {
              display: grid;
              grid-template-columns: repeat(8, 1fr);
              grid-gap: 2vw;
            }

            .companies {
              justify-content: space-around;
              margin: 50px 0;
            }

            .extended {
              font-size: 1.25rem;
            }

            .extended .community {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2vw;
            }

            .extended .advisors {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-gap: 2vw;
            }

            .extended .profile {
              margin: 0 auto 0 auto;
            }

            .extended .headshot {
              width: 7vw;
              height: 7vw;
              margin: 0 auto 0 auto;
              border-radius: 50%;
            }

            @media (max-width: 1199px) {
              .contact .drops.container-fluid {
                display: grid;
                grid-template-columns: 1fr;
              }

              .contact .socials.container-fluid {
                grid-template-columns: repeat(4, 1fr);
              }
  
              .contact .telegram.container-fluid {
                grid-template-columns: repeat(4, 1fr);
              }
            }

            @media (max-width: 799px) {
              section.intro {
                padding-top: 0;
                text-align: center;
                background-size: 100vw;
              }

              .layout {
                flex-direction: column;
              }

              .image-container {
                margin-top: 5%;
              }

              .contact .drops.container-fluid {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 2vw;
              }

              .contact .socials.container-fluid {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 2vw;
              }
  
              .contact .telegram.container-fluid {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 2vw;
              }

              .company {
                width: 15vw;
              }

              .extended {
                font-size: 1rem;
              }
              
              .extended .headshot {
                width: 15vw;
                height: 15vw;
                margin: 0 auto 0 auto;
                border-radius: 50%;
              }
            }
          `}</style>
        </div>
      )}
    </>
  )
}

export default withIsMobile(Community)
