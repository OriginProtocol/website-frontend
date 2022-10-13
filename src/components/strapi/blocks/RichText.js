import React from "react";

const RichText = ({ body }) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: body,
        }}
      />
      <style jsx>{``}</style>
    </>
  );
};

export default RichText;
