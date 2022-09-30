import React from 'react'
import ReactMarkdown from "react-markdown";

const RichText = ({body}) => {
  return (
    <>
      <ReactMarkdown children={body} />
      <style jsx>{`

      `}</style>
    </>
  )
}

export default RichText;