import React, { useState, useEffect } from 'react'
import { Typography } from '@originprotocol/origin-storybook'
import useRepositoryQuery from 'queries/useRepositoryQuery'
import useContributorQuery from 'queries/useContributorQuery'

const Contributor = ({login, avatar, profile}) => {
  return (
    <>
      <div>
        <a
          href={profile}
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src={avatar}
            className="contributor"
            alt={login}
          />
        </a>
      </div>
      <style jsx>{`
        .contributor {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        @media (min-width: 2000px) {
          .contributor {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </>
  )
}

const Contributors = () => {
  const [repositoryList, setRepositoryList] = useState([])
  const [contributorLists, setContributorLists] = useState([])
  const [contributorList, setContributorList] = useState([])

  const repositoryQuery = useRepositoryQuery()
  const contributorQuery = useContributorQuery(repositoryList)

  useEffect(() => {
    repositoryQuery.refetch()
  }, [])

  useEffect(() => {
    setRepositoryList(fetchRepositories(repositoryQuery.isSuccess ? repositoryQuery.data : []))
  }, [repositoryQuery.isSuccess])

  useEffect(() => {
    if (repositoryList.length > 0) {
      contributorQuery.refetch()
    }
  }, [repositoryList])

  useEffect(() => {
    if (!contributorQuery.isRefetching)setContributorLists(contributorQuery.isSuccess ? contributorQuery.data : [])
  }, [contributorQuery.isRefetching])

  const fetchRepositories = (repositories) => {
    return (
      repositories.map((r) => {
        return r.name
      })
    )
  }

  useEffect(() => {
    const list = []
    contributorLists.forEach((contributorList) => {
      contributorList?.map((contributor) => {
        if (!list.some(c => c.login === contributor.login)) list.push(contributor)
      })
    })
    setContributorList(list)
  }, [contributorLists])

  return (
    <>
      <section className='contributors grey text-center'>
        <div className='container-fluid'>
          <Typography.H3>{`${contributorList.length} open-source contributors`}</Typography.H3>
          <div className='list container-fluid mt-5'>
            {contributorList?.map((c, i) => {
              return (
                <Contributor login={c.login} avatar={c.avatar_url} profile={c.html_url} />
              )
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
            grid-template-columns: repeat(10, 1fr)
          }
        }

        @media (max-width: 767px) {
          .list.container-fluid {
            grid-template-columns: repeat(6, 1fr)
          }
        }
      `}</style>
    </>
  )
}

export default Contributors