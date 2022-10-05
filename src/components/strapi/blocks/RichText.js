import React from 'react'
import ReactMarkdown from "react-markdown";

const RichText = ({body}) => {
  console.log(body)
  return (
    <>
      <ReactMarkdown children={body} />
      <div
        dangerouslySetInnerHTML={{
          __html: body
        }}
      />
      <style jsx>{`

      `}</style>
    </>
  )
}

export default RichText;