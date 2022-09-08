import React, { useEffect } from 'react'
import { useStoreState } from 'pullstate'
import StatStore from 'stores/StatStore'
import usePriceQuery from 'queries/usePriceQuery'
import useCirculatingSupplyQuery from 'queries/useCirculatingSupplyQuery'
import useTotalSupplyQuery from 'queries/useTotalSupplyQuery'
import { formatCurrency } from 'utils/math'
import { assetRootPath } from 'utils/image'

const Dashboard = ({ogn}) => {
  const symbol = ogn ? 'OGN' : 'OGV'
  const coin = symbol.toLowerCase()
  const link = ogn ? 'origin-protocol' : 'origin-dollar-governance'
  const buy = ogn ? 'app.uniswap.org/#/swap?outputCurrency=0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26&chain=mainnet' : 'ousd.com'
  const description = ogn ? 'Origin Token (OGN) stakers earn their share of Story’s platform fees. ' : 'Origin Governance Token (OGV) stakers earn fees from OUSD’s growth. '

  const price = useStoreState(StatStore, (s) => {
    return s.price || 0
  })

  const circulatingSupply = useStoreState(StatStore, (s) => {
    return s.circulatingSupply || 0
  })

  const totalSupply = useStoreState(StatStore, (s) => {
    return s.totalSupply || 0
  })

  const priceQuery = usePriceQuery({
    onSuccess: (price) => {
      StatStore.update((s) => {
        s.price.ogn = price['origin-protocol'].usd,
        s.price.ogv = price['origin-dollar-governance'].usd
      })
    },
  })

  const circulatingSupplyQuery = useCirculatingSupplyQuery({
    onSuccess: (circulatingSupply) => {
      StatStore.update((s) => {
        s.circulatingSupply.ogn = circulatingSupply[0],
        s.circulatingSupply.ogv = circulatingSupply[1]
      })
    },
  })

  const totalSupplyQuery = useTotalSupplyQuery({
    onSuccess: (totalSupply) => {
      StatStore.update((s) => {
        s.totalSupply.ogn = totalSupply[0],
        s.totalSupply.ogv = totalSupply[1]
      })
    },
  })

  useEffect(() => {
    priceQuery.refetch()
    circulatingSupplyQuery.refetch()
    totalSupplyQuery.refetch()
  }, [])

  return (
    <>
      <div className='token-dashboard gradient2 d-flex flex-column'>
        <div className='d-flex flex-row'>
          <div className='text-container'>
            <img
              src={assetRootPath(`/images/logos/${coin}-logo.svg`)}
              className={`logo`}
              alt="Logo"
            />
            <span className='text'>{symbol} token</span>
            <h5>
              {`${description} View on `}
              <a
                href={`https://coinmarketcap.com/currencies/${link}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bold'
              >
                  CoinMarketCap
              </a>
              {' or '}
              <a
                href={`https://www.coingecko.com/en/coins/${link}`}
                target='_blank'
                rel='noopener noreferrer'
                className='bold'
              >
                  CoinGecko
              </a>
            </h5>
          </div>
          <a
            href={`https://${buy}`}
            target='_blank'
            rel='noopener noreferrer'
            className='button white'
          >
            Buy {symbol}
          </a>
        </div>
        <div className='value-container d-flex flex-row'>
          <div className='value'>
            <h4>{`${symbol} PRICE`}</h4>
            <div className='number'>{`$${formatCurrency(price[coin], 4)}`}</div>
          </div>
          <div className='value'>
          <h4>MARKET CAP</h4>
            <div className='number'>{`$${formatCurrency(circulatingSupply[coin] * price[coin], 0)}`}</div>
          </div>
          <div className='value'>
            <h4>CIRCULATING SUPPLY</h4>
            <div className='number'>{formatCurrency(circulatingSupply[coin], 0)}</div>
          </div>
          <div className='value'>
            <h4>TOTAL SUPPLY</h4>
            <div className='number'>{formatCurrency(totalSupply[coin], 0)}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .token-dashboard {
          color: white;
          margin-top: 7.5vw;
          padding: 50px;
          border-radius: 20px;
          align-content: flex-start;
        }

        .button {
          align-self: flex-start;
          margin-left: auto;
        }

        .logo {
          width: 7%;
          margin-right: 2%;
        }

        .text {
          display: inline;
          font-family: 'Poppins';
          font-size: 2vw;
        }

        .value {
          width: 25%;
          display: inline;
        }

        .number {
          font-family: 'Poppins';
          font-size: 2.5vw;
          font-weight: 700;
        }
      `}</style>
    </>
  )
}

export default Dashboard