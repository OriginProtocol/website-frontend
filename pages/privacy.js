import { Footer, Header, Typography } from '@originprotocol/origin-storybook'
import Head from 'next/head'
import React from 'react'
import { fetchAPI } from '../lib/api'
import transformLinks from '../src/utils/transformLinks'

const Privacy = ({navLinks}) => {
  return (
    <>
      <Head>
        <title>Origin Protocol</title>
      </Head>
      <Header mappedLinks={navLinks} webProperty="originprotocol" />
      <section>
        <>
          <br/><br/>
          <Typography.H4 className='text-center'>Privacy Policy</Typography.H4>
          <div className='container-fluid py-20 px-32'>
            <div>
                Last updated: October 30th, 2020
                <br/><br/>
                This privacy policy ("<b>Policy</b>") describes how Origin Protocol Labs and its related companies ("<b>Company</b>") collect, use and share personal information of consumer users of this website, originprotocol.com (the "<b>Site</b>"). This Policy also applies to any of our other websites that post this Policy. This Policy does not apply to websites that post different statements.
                <br/><br/>
                <Typography.Body2>1. WHAT WE COLLECT</Typography.Body2>
                <br/>
                We get information about you in a range of ways.
                <br/><br/>
                <b>Information You Give Us.</b> We collect your name, email address as well as other information you directly give us on our Site.
                <br/><br/>
                <b>Information We Get From Others.</b> We may get information about you from other sources. We may add this to information we get from this Site.
                <br/><br/>
                <b>Information Automatically Collected.</b> We automatically log information about you and your computer. For example, when visiting our Site, we log your computer operating system type, browser type, browser language, the website you visited before browsing to our Site, pages you viewed, how long you spent on a page, access times and information about your use of and actions on our Site.
                <br/><br/>
                <b>Cookies.</b> We may log information using "cookies." Cookies are small data files stored on your hard drive by a website. We may use both session Cookies (which expire once you close your web browser) and persistent Cookies (which stay on your computer until you delete them) to provide you with a more personal and interactive experience on our Site.    This type of information is collected to make the Site more useful to you and to tailor the experience with us to meet your special interests and needs.
                <br/><br/>
                <Typography.Body2>2. USE OF PERSONAL INFORMATION</Typography.Body2>
                <br/>
                We use your personal information as follows:
                <ul className='list-disc ml-10'>
                  <li>We use your personal information to operate, maintain, and improve our sites, products, and services.</li>
                  <li>We use your personal information to process and deliver contest entries and rewards.</li>
                  <li>We use your personal information to respond to comments and questions and provide customer service.</li>
                  <li>We use your personal information to send information including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.</li>
                  <li>We use your personal information to communicate about promotions, upcoming events, and other news about products and services offered by us and our selected partners.</li>
                  <li>We use your personal information to link or combine user information with other personal information.</li>
                  <li>We use your personal information to protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.</li>
                  <li>We use your personal information to provide and deliver products and services customers request.</li>
                </ul>
                <br/>
                <Typography.Body2>3. SHARING OF PERSONAL INFORMATION</Typography.Body2>
                <br/>
                We may share personal information as follows:
                <br/>
                <ul className='list-disc ml-10'>
                  <li>We may share personal information with your consent. For example, you may let us share personal information with others for their own marketing uses. Those uses will be subject to their privacy policies.</li>
                  <li>We may share personal information when we do a business deal, or negotiate a business deal, involving the sale or transfer of all or a part of our business or assets. These deals can include any merger, financing, acquisition, or bankruptcy transaction or proceeding.</li>
                  <li>We may share personal information for legal, protection, and safety purposes.</li>
                  <ul className='list-disc ml-10'>
                    <li>We may share information to comply with laws.</li>
                    <li>We may share information to respond to lawful requests and legal processes.</li>
                    <li>We may share information to protect the rights and property of Origin Protocol Labs., our agents, customers, and others. This includes enforcing our agreements, policies, and terms of use.</li>
                    <li>We may share information in an emergency. This includes protecting the safety of our employees and agents, our customers, or any person.</li>
                  </ul>
                  <li>We may share information with those who need it to do work for us.</li>
                </ul>
                We may also share aggregated and/or anonymized data with others for their own uses.
                <br/><br/>
                <Typography.Body2>4. INFORMATION CHOICES AND CHANGES</Typography.Body2>
                <br/>
                Our marketing emails tell you how to "opt-out." If you opt out, we may still send you non-marketing emails. Non-marketing emails include emails about your accounts and our business dealings with you.
                <br/>
                You may send requests about personal information to our Contact Information below. You can request to change contact choices, opt-out of our sharing with others, and update your personal information.
                <br/>
                You can typically remove and reject cookies from our Site with your browser settings. Many browsers are set to accept cookies until you change your settings. If you remove or reject our cookies, it could affect how our Site works for you.
                <br/><br/>
                <Typography.Body2>5. CONTACT INFORMATION.</Typography.Body2>
                <br/>
                We welcome your comments or questions about this privacy policy. You may also contact us at our address:
                <br/><br/>
                Origin Protocol Labs<br/>
                Floor 4, Willow House,<br />Cricket Square, Grand Cayman KY1‐9010,<br />Cayman Islands<br/>
                Email: support@originprotocol.com<br/><br/>
                Email: support@originprotocol.com<br/><br/>
                <Typography.Body2>6. CHANGES TO THIS PRIVACY POLICY.</Typography.Body2>
                <br/>
                We may change this privacy policy at anytime. If we make any changes, we will change the Last Updated date above.
                <br />
                </div>
          </div>
        </>
      </section>
      <Footer webProperty="originprotocol" />
    </>
  );
};

export async function getStaticProps() {
  const navRes = await fetchAPI("/website-nav-links", {
    populate: {
      links: {
        populate: "*",
      },
    }
  });

  const navLinks = transformLinks(navRes.data);

  return {
    props: {
      navLinks,
    },
    revalidate: 5 * 60, // Cache response for 5m
  };
}

export default Privacy;
