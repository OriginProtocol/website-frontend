import Nav from "./nav";
import { Typography, Header, Footer, Card } from '@originprotocol/origin-storybook'
import { mappedLinks } from 'utils/constants'

const Layout = ({ children, categories, seo }) => (
  <>
    <Header
        mappedLinks={mappedLinks.links}
        webProperty='originprotocol'
    />
    {children}
  </>
);

export default Layout;