import { css } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import Header from './Header';

import { HEIGHTS } from '#constants';
import { useResponsive } from '#hooks';
import { mq } from '#styles/mediaQuery';
import { META_TAG } from 'metatag';

interface LayoutProps {
  children: React.ReactNode;
  pageProps: AppProps['pageProps'];
}

const Layout = ({ children, pageProps }: LayoutProps) => {
  const pageTitle = pageProps?.title
    ? `${pageProps?.title}`
    : META_TAG['main']['title'];
  const pageDescription = pageProps?.description
    ? `${pageProps?.description}`
    : META_TAG['main']['description'];

  useResponsive();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property='og:title' content={pageTitle} />
        <meta name='description' content={pageDescription} />
        <meta property='og:description' content={pageDescription} />
      </Head>
      <div>
        <Header />
        <main
          css={css`
            padding-top: ${HEIGHTS.HEADER_MOBILE}px;
            padding-bottom: ${HEIGHTS.PADDING_BOTTOM_MOBILE}px;
            margin: 0 auto;

            ${mq('desktop')} {
              min-height: calc(100dvh - ${HEIGHTS.FOOTER}px);
              padding-top: ${HEIGHTS.HEADER_DESKTOP}px;
              padding-bottom: ${HEIGHTS.PADDING_BOTTOM_DESKTOP}px;
            }
          `}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
