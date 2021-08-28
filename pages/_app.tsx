/** @jsxImportSource @emotion/react */
import type { AppProps } from 'next/app';
import { css } from '@emotion/react';
import { Fragment } from 'react';
import '@atlaskit/css-reset';
import '@atlaskit/tokens/css/atlassian-light.css';
import '@atlaskit/tokens/css/atlassian-dark.css';
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import Blog from 'components/blog';
import Button from 'design-system/button';
import Section from 'design-system/section';
import toggleTheme from 'lib/toggle-theme';
import components from 'components/blog-mdx-components';
import { token } from '@atlaskit/tokens';
import SignUp from 'components/sign-up';

const stickyButtonStyles = css({
  position: 'absolute',
  top: 40,
  right: 32,
});

const stickyBackButtonStyles = css({
  position: 'absolute',
  top: 40,
  left: 32,
});

const appStyles = css({
  borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
});

function App({ Component, pageProps, router }: AppProps) {
  const isBlogRoute = router.route.startsWith('/blog');

  return (
    <MDXProvider components={components}>
      <Head>
        <style>{'*{box-sizing:border-box}'}</style>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>

      <div css={appStyles}>
        <div css={stickyButtonStyles}>
          <Button appearance="subtle" onClick={toggleTheme}>
            ☾
          </Button>
        </div>
      </div>

      {isBlogRoute ? (
        <Fragment>
          <Section isSeparated>
            <div css={stickyBackButtonStyles}>
              <Button appearance="subtle" onClick={() => router.push('/')}>
                ←
              </Button>
            </div>

            <Blog {...(Component as any).meta}>
              <Component {...pageProps} />
            </Blog>
          </Section>

          <Section isSunken isSeparated>
            <SignUp />
          </Section>
        </Fragment>
      ) : (
        <Component {...pageProps} />
      )}
    </MDXProvider>
  );
}

export default App;
