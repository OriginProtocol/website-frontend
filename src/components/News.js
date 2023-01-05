import React, { useEffect, useState, useRef } from 'react'
import { Card, Select } from '@originprotocol/origin-storybook'
import withIsMobile from 'hoc/withIsMobile'
import Image from 'next/image'
import Moment from 'react-moment'
import { assetRootPath } from 'utils/image'
import capitalize from 'lodash/capitalize'

const Dropdown = ({ options, option, setOption, category }) => {
  const [open, setOpen] = useState()
  const optionsFormatted = category ? [
    {
      name: 'All news',
      unavailable: false,
    },
  ].concat(
    options.map((option) => {
      return {
        name: capitalize(option.name),
        unavailable: false,
      }
    })
  ) : [{
    name: 'Most recent'
  },
  {
    name: 'Least recent'
  },]

  return (
    <div
      className='relative w-full md:!w-[200px]'
      tabIndex='1'
      onBlur={() => setOpen(false)}
    >
      <div
        className={`relative w-full md:w-[200px] px-6 py-3.5 bg-white shadow-2xl rounded-full cursor-pointer ${category ? 'z-40' : 'z-20'}`}
        onClick={() => {
          setOpen(!open)
        }}
      >
        <div className='flex flex-row justify-between'>
          {option || 'All news'}
          <Image
            src={assetRootPath(`/images/arrow-down.svg`)}
            width='20'
            height='12'
            alt='arrow'
          />
        </div>
      </div>
      <div
        className={`absolute top-16 w-full md:w-[200px] bg-white drop-shadow-ousd rounded-lg cursor-pointer ${open ? '' : 'hidden'} ${category ? 'z-40' : 'z-20'}`}
      >
        {optionsFormatted.map((c, i) => {
          return (
            <div
              className={`w-full text-left px-6 py-3.5 hover:text-[#fafbfb] hover:bg-[#0074f0] ${i === 0 ? 'rounded-t-lg' : ''} ${i === optionsFormatted.length - 1 ? 'rounded-b-lg' : ''}`}
              onClick={() => {
                setOption(c.name === 'All news' ? '' : c.name)
                setOpen(false)
              }}
              key={i}
            >
              {c.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const News = ({ isMobile, articles, meta, categories, pageRef }) => {
  const [loaded, setLoaded] = useState(false);
  const perPage = isMobile ? 3 : 9

  useEffect(() => {
    setLoaded(true);
  }, []);

  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [order, setOrder] = useState('Most recent')

  const articlesSorted = articles.sort((a, b) => (b.publishBackdate || b.publishedAt).localeCompare(a.publishBackdate || a.publishedAt))
  const articlesOrdered = order === 'Most recent' ? articlesSorted : articlesSorted.reverse()

  const categoryArticles = category ? articlesOrdered.filter((article) => article.category?.slug === category) : articlesOrdered

  const articlePages = Math.ceil(
    (category
      ? categoryArticles.filter((article) => article.slug === category.slug).length
      : meta.pagination.total) / perPage
  );
  const currentPageArticles = articlesOrdered
    ? categoryArticles.slice(perPage * (page - 1), perPage * page)
    : [];

  useEffect(() => {
    const pages = articlePages;

    let pageNumbers = [1, 2, pages, pages - 1, page, page - 1, page + 1];
    pageNumbers = pageNumbers.filter((number) => number > 0 && number <= pages);
    pageNumbers = [...new Set(pageNumbers)];
    pageNumbers = pageNumbers.sort((a, b) => a - b);
    setPageNumbers(pageNumbers);
  }, [page, articlePages]);

  return (
    <>
      {loaded && currentPageArticles && (
        <section className="stories light">
          <div className="container-fluid max-w-screen-xl mx-auto mt-14 md:mb-28 px-6">
            <div className='flex flex-col md:flex-row space-y-3 md:space-x-6 md:space-y-0'>
              <Dropdown
                options={categories}
                option={category}
                setOption={setCategory}
                category
              />
              <Dropdown
                option={order}
                setOption={setOrder}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-11 max-w-screen-xl mx-auto px-6 md:!px-0">
              {currentPageArticles.map((a, i) => {
                if (!category || category === a.category.slug) {
                  return (
                    <Card
                      webProperty={"originprotocol"}
                      title={a.title}
                      img={<Image src={ a.cardCover?.url || a.cover?.url || assetRootPath('/images/logos/origin-press.svg')} alt={a.cover?.alternativeText} width='640' height='312' />}
                      body={<Moment format="MMMM D, YYYY">{a.publishBackdate || a.publishedAt}</Moment>}
                      linkText={"Read more"}
                      linkHref={`/${a.slug}`}
                      key={a.title}
                    />
                  );
                }
              })}
            </div>
            <div className="pagination flex justify-center md:mt-16">
              {pageNumbers.map((pageNumber, index) => {
                const isCurrent = pageNumber === page;
                const skippedAPage =
                  index > 0 && pageNumber - pageNumbers[index - 1] !== 1;

                return (
                  <div className="flex" key={pageNumber}>
                    {skippedAPage && (
                      <div className="page-skip flex items-center justify-center">
                        ...
                      </div>
                    )}
                    <div
                      className={`page-number ${
                        isCurrent ? "current" : ""
                      } flex items-center justify-center`}
                      onClick={() => {
                        if (isCurrent) {
                          return
                        }
                        setPage(pageNumber)
                        pageRef.current.scrollIntoView()
                      }}
                    >
                      {pageNumber}
                    </div>
                  </div>
                );
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
  );
};

export default withIsMobile(News);
