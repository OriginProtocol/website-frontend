import React, { useState, useEffect, useMemo } from 'react'
import { useStoreState } from 'pullstate'
import StatStore from 'stores/StatStore'
import useArticleQuery from 'queries/useArticleQuery'
import { Typography, Card } from '@originprotocol/origin-storybook'
import Dropdown from 'components/Dropdown'
import DownCaret from 'components/DownCaret'
import { assetRootPath } from 'utils/image'
import withIsMobile from 'hoc/withIsMobile'
import Scard from "./strapi/card";
import { getStrapiMedia } from '../../lib/media'

const Category = ({categories, category, setCategory}) => {
  const [open, setOpen] = useState(false)
  //const categories = ['All news', 'News', 'Food', 'Nature', 'Tech', 'Story']
  const capitalize = (name) => {
    return name.slice(0,1).toUpperCase() + name.slice(1, name.length)
  }
  return (
    <>
      <Dropdown
        content={
          <div className="dropdown-menu flex flex-col">
            <div
              key={0}
              className="dropdown-item justify-start items-center"
              onClick={(e) => {
                e.preventDefault()
                setCategory(0)
                setOpen(false)
              }}
            >
              All news
            </div>
            {categories.map((c) => {
              return (
                <div
                  key={c.id}
                  className="dropdown-item justify-start items-center"
                  onClick={(e) => {
                    e.preventDefault()
                    setCategory(c.id)
                    setOpen(false)
                  }}
                >
                  {`${capitalize(c.attributes.name)}`}
                </div>
              )
            })}
          </div>
        }
        open={open}
        onClose={() => setOpen(false)}
      >
        <div
          className={`category-select flex flex-row items-center`}
          onClick={(e) => {
            e.preventDefault()
            setOpen(!open)
          }}
        >
          {!category ? 'All news' : capitalize(categories[category-1].attributes.name)}
          <div className='downcaret'>
            <DownCaret color={'black'} size={26} />
          </div>
        </div>
      </Dropdown>
      <style jsx>{`
        .category-select {
          display: inline-block;
          border: 0;
          border-radius: 50px;
          white-space: nowrap;
          margin-bottom: 10px;
          padding: 15px 0 15px 25px;
          color: #183140;
          background-color: #ffffff;
          box-shadow: 2px 2px 10px #c0c0c0;
          width: 15vw;
          cursor: pointer;
        }

        .category-select:hover {
          background-color: #f2f3f5;
        }

        .dropdown-menu {
          margin-right: 200px;
          background-color: white;
          font-size: 16px;
          color: black;
          max-width: 98px;
          top: 100%;
          left: 0;
          padding: 5px;
        }

        .dropdown-item {
          background-color: white;
          color: black;
          padding: 3px 5px 3px 10px;
          line-height: 20px;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: #f2f3f5;
        }

        .downcaret {
          display: relative;
          margin-right: 25px;
          margin-left: auto;
        }

        @media (max-width: 1199px) {

        }

        @media (max-width: 799px) {
          .category-select {
            width: 40vw;
          }
        }
      `}</style>
    </>
  )
}

const News2 = ({isMobile, articles, meta, categories}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const [pageNumbers, setPageNumbers] = useState([])

  /*const articlePages = useMemo(
    () => (articleQuery.isSuccess ? articleQuery.data.meta.pagination.pageCount : 0),
    [articleQuery.isSuccess, articleQuery.data]
  )*/

  const articlePages = Math.ceil((category ? categories[category-1].attributes.articles.data.length : meta.pagination.total) / 9)

  /*const receivedPage = articleQuery.data
    ? articleQuery.data.meta.pagination.page
    : 1*/

  const receivedPage = page

  /*const currentPageArticles = useMemo(
    () => (articleQuery.data ? articleQuery.data.data : []),
    [articleQuery.data]
  )*/

  // grid-auto-rows: 1fr;

  const currentPageArticles = articles ? articles.slice(9 * (page - 1), 9 * page) : []

  useEffect(() => {
    const pages = articlePages

    let pageNumbers = [
      1,
      2,
      pages,
      pages - 1,
      page,
      page - 1,
      page + 1,
    ]
    pageNumbers = pageNumbers.filter((number) => number > 0 && number <= pages)
    pageNumbers = [...new Set(pageNumbers)]
    pageNumbers = pageNumbers.sort((a, b) => a - b)
    setPageNumbers(pageNumbers)
  }, [page, articlePages])

  return (
  <>
    {loaded && currentPageArticles && (
    <section className='stories light'>
      <div className='container-fluid max-w-screen-xl mx-auto'>
        <Category categories={categories} category={category} setCategory={setCategory}/>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 max-w-screen-xl mx-auto px-6 md:px-0'>
          {currentPageArticles.map((a, i) => {
            if (!category || category === a.attributes.category.data.id) {
              return (
                <Card
                  webProperty={'originprotocol'}
                  title={a.attributes.title}
                  imgSrc={getStrapiMedia(a.attributes.cover)}
                  imgAlt={'Origin Protocol'}
                  body={a.attributes.description}
                  linkText={'Read more'}
                  linkHref={`/article/${a.attributes.slug}`}
                  key={a.attributes.title}
                />
              )
            }
          })}
        </div>
        <div className="pagination flex justify-center">
          {pageNumbers.map((pageNumber, index) => {
            const isCurrent =
              pageNumber === page
            const skippedAPage =
              index > 0 && pageNumber - pageNumbers[index - 1] !== 1

            return (
              <div className="flex" key={pageNumber}>
                {skippedAPage && (
                  <div className="page-skip flex items-center justify-center">
                    ...
                  </div>
                )}
                <div
                  className={`page-number ${
                    isCurrent ? 'current' : ''
                  } flex items-center justify-center`}
                  onClick={() => {
                    if (isCurrent) {
                      return
                    }
                    setPage(pageNumber)
                  }}
                >
                  {pageNumber}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    )}
    <style jsx>{`


      .pagination {
        padding: 40px;
        border-radius: 10px;
      }

      .page-number {
        cursor: pointer;
        color: #8293a4;
        min-width: 40px;
        min-height: 40px;
        border-radius: 5px;
        border: solid 1px #cdd7e0;
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
        padding-left: 15px;
        padding-right: 15px;
      }

      .page-skip {
        color: #8293a4;
        margin-right: 10px;
        min-width: 40px;
        min-height: 40px;
      }

      .page-number.current,
      .page-number.current:hover {
        background-color: #1a82ff;
        color: white;
      }

      .page-number:hover {
        background-color: #edf2f5;
      }

      @media (max-width: 799px) {
        .container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          grid-gap: 5vw;
        }
      }
    `}</style>
  </>
  )
}

export default withIsMobile(News2)