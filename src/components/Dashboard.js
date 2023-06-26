import { Button } from "@originprotocol/origin-storybook";
import withIsMobile from "hoc/withIsMobile";
import Image from "next/image";
import { useStoreState } from "pullstate";
import useCirculatingSupplyQuery from "queries/useCirculatingSupplyQuery";
import usePriceQuery from "queries/usePriceQuery";
import useTotalSupplyQuery from "queries/useTotalSupplyQuery";
import React, { useEffect } from "react";
import StatStore from "stores/StatStore";
import { assetRootPath } from "utils/image";
import { formatCurrency } from "utils/math";

const Dashboard = ({ ogn, isMobile }) => {
  const symbol = ogn ? "OGN" : "OGV";
  const coin = symbol.toLowerCase();
  const link = ogn ? "origin-protocol" : "origin-dollar-governance";
  const buy = ogn
    ? "api.originprotocol.com/dashboard"
    : "app.uniswap.org/#/swap?outputCurrency=0x9c354503C38481a7A7a51629142963F98eCC12D0&chain=mainnet";
  const description = ogn
    ? "Origin Token (OGN) stakers earn their share of Story’s platform fees. "
    : "Origin Governance Token (OGV) stakers earn fees from the growth of Origin's DeFi products. ";

  const price = useStoreState(StatStore, (s) => {
    return s.price || 0;
  });

  const circulatingSupply = useStoreState(StatStore, (s) => {
    return s.circulatingSupply || 0;
  });

  const totalSupply = useStoreState(StatStore, (s) => {
    return s.totalSupply || 0;
  });

  const priceQuery = usePriceQuery({
    onSuccess: (price) => {
      StatStore.update((s) => {
        (s.price.ogn = price["origin-protocol"].usd),
          (s.price.ogv = price["origin-dollar-governance"].usd);
      });
    },
  });

  const circulatingSupplyQuery = useCirculatingSupplyQuery({
    onSuccess: (circulatingSupply) => {
      StatStore.update((s) => {
        (s.circulatingSupply.ogn = circulatingSupply[0]),
          (s.circulatingSupply.ogv = circulatingSupply[1]);
      });
    },
  });

  const totalSupplyQuery = useTotalSupplyQuery({
    onSuccess: (totalSupply) => {
      StatStore.update((s) => {
        (s.totalSupply.ogn = totalSupply[0]),
          (s.totalSupply.ogv = totalSupply[1]);
      });
    },
  });

  useEffect(() => {
    priceQuery.refetch();
    circulatingSupplyQuery.refetch();
    totalSupplyQuery.refetch();
  }, []);

  return (
    <>
      <div className={`token-dashboard ${ogn ? 'gradient2' : 'gradient4'} max-w-screen-2xl mx-auto flex flex-col md:rounded-2xl py-12 pl-6 pr-6 md:py-12 md:px-20`}>
        <div className="flex flex-row justify-between">
          <div className="text-container">
            <div className="flex flex-row items-center">
              <Image
                src={assetRootPath(`/images/logos/${coin}-logo.svg`)}
                className="logo"
                alt="Logo"
                width="50px"
                height="50px"
              />
              <span className="text font-bold mt-1 ml-4">{symbol} Token</span>
            </div>
            <div className="leading-7 font-light mt-4 mb-14">
              {`${description} View on `}
              <a
                href={`https://coinmarketcap.com/currencies/${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                CoinMarketCap
              </a>
              {" or "}
              <a
                href={`https://www.coingecko.com/en/coins/${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold"
              >
                CoinGecko
              </a>
            </div>
          </div>
          <Button
            href={`https://${buy}`}
            target="_blank"
            rel="noopener noreferrer"
            type='secondary'
            className="self-start bg-white hover:text-gray-700 hidden sm:flex"
          >
            Buy {symbol}
          </Button>
        </div>
        <div className="value-container">
          <div className="value">
            <div className='font-bold'>{`${symbol} PRICE`}</div>
            <div className="number">{`$${formatCurrency(price[coin], 4)}`}</div>
          </div>
          <div className="value">
            <div className='font-bold'>MARKET CAP</div>
            <div className="number">{`$${formatCurrency(
              circulatingSupply[coin] * price[coin],
              0
            )}`}</div>
          </div>
          <div className="value">
            <div className='font-bold'>CIRCULATING SUPPLY</div>
            <div className="number">
              {formatCurrency(circulatingSupply[coin], 0)}
            </div>
          </div>
          <div className="value">
            <div className='font-bold'>TOTAL SUPPLY</div>
            <div className="number">{formatCurrency(totalSupply[coin], 0)}</div>
          </div>
        </div>
        <Button
          href={`https://${buy}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white hover:text-gray-700 sm:hidden mt-8 text-center"
          type='secondary'
        >
          Buy {symbol}
        </Button>
      </div>
      <style jsx>{`
        .token-dashboard {
          color: white;
          align-content: flex-start;
        }

        .button {
          align-self: flex-start;
          margin-left: auto;
        }

        .text {
          display: inline;
          font-size: 2rem;
        }

        .value-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-gap: 1vw;
        }

        .number {
          font-size: 2.25rem;
          font-weight: 700;
        }

        .b2 {
          display: none;
        }

        @media (max-width: 1199px) {
          .number {
            font-size: 1.5rem;
            font-weight: 700;
          }
        }

        @media (max-width: 767px) {
          .text {
            font-size: 1.4rem;
            font-weight: 500;
          }

          .value-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 2vw;
          }

          .number {
            font-size: 1.25rem;
            font-weight: 700;
          }

          .button {
            align-self: auto;
            margin: 25px auto 0 auto;
            width: 100%;
            text-align: center;
          }

          .b1 {
            display: none;
          }

          .b2 {
            display: inline;
          }
        }
      `}</style>
    </>
  );
};

export default withIsMobile(Dashboard);
