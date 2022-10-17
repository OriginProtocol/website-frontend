import { Footer, Header } from "@originprotocol/origin-storybook";

const Layout = ({ children, navLinks }) => (
  <>
    <Header mappedLinks={navLinks} webProperty="originprotocol" />
    {children}
    <Footer />
  </>
);

export default Layout;
