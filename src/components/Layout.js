import React, { useState } from "react";
import Head from "next/head";
import Footer from "components/Footer";

const Layout = ({ locale, onLocale, children }) => {
  return (
    <>
      <Head>
        <title>Origin Protocol</title>
      </Head>
      <main>{children}</main>
      <Footer locale={locale} />
      <style jsx>{`
        .container {
          max-width: 940px !important;
          padding-left: 0px;
          padding-right: 0px;
        }
      `}</style>
    </>
  );
};

export default Layout;
