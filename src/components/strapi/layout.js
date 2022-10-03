import { Footer, Header } from '@originprotocol/origin-storybook';
import { mappedLinks } from 'utils/constants';

const Layout = ({ children, categories, seo }) => (
  <>
    <Header
      mappedLinks={mappedLinks.links}
      webProperty='originprotocol'
    />
    {children}
    <Footer />
  </>
);

export default Layout;