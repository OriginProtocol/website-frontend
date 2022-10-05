import { Typography } from '@originprotocol/origin-storybook';
import React from 'react';

const Quote = ({title, body}) => {
  return (
    <>
      <div className='container text-center'>
        <div className='quote'>
          <Typography.H4>{`"${body}"`}</Typography.H4>
        </div>
        <div className='name mt-3'>
          <Typography.Body>{title}</Typography.Body>
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 5vw 0 5vw auto;
        }
      `}</style>
    </>
  )
}

export default Quote;