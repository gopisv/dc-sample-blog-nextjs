import { NextSeo } from 'next-seo';
import theme from '../common/styles/default/theme';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

interface DefaultLayoutProps {
  children: JSX.Element[];
  title: string;
  description?: string;
}

export default ({ children, title, description }: DefaultLayoutProps) => {
  return (
    <>
      <NextSeo title={title} description={description} />
      <div className="site-container">
        <Header title={title} />
        <div className="site-content">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          height: 100%;
          min-height: 100%;
        }

        html {
          font-size: ${theme.fonts.size.root};
        }

        body {
          font-family: Roboto, Arial, sans-serif;
          font-weight: ${theme.fonts.weight.regular};
          max-width: 100%;
        }

        *,
        ::before,
        ::after {
          box-sizing: border-box;
        }

        #__next,
        .site-container {
          height: 100%;
        }

        .site-container {
          margin: 0;
          display: flex;
          flex-direction: column;
        }

        .site-content {
          flex: auto;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
};