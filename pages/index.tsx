/** @jsxImportSource @emotion/react */
import { Fragment, ComponentType } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { css } from '@emotion/react';
import { token } from '@atlaskit/tokens';
import pkg from '../package.json';
import { getTime } from 'lib/time';
import Card from 'design-system/card';
import Blog from 'components/blog';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import dynamic from 'next/dynamic';
import { promises as fs } from 'fs';
import Link from 'next/link';
import Section from 'design-system/section';
import A from 'design-system/link';
import type { BlogMeta } from 'types/types';
import SignUp from 'components/sign-up';

let LatestBlog: ComponentType<{}>;

const heroStyles = css({
  borderTop: `8px solid ${token('color.background.boldBrand.resting')}`,
  height: '55vh',
  minHeight: 600,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'left',
  borderBottom: `2px solid ${token('color.border.neutral')}`,
});

const heroDescriptionStyles = css({
  color: token('color.text.mediumEmphasis'),
  fontSize: 18,
  marginTop: 8,
});

const gridListStyles = css({
  display: 'grid',
  gap: 32,
  gridTemplateColumns: '1fr',
  '@media screen and (min-width: 650px)': {
    gridTemplateColumns: '1fr 1fr',
  },
});

const Home: NextPage<{ latest: BlogMeta; moreBlogs: BlogMeta[] }> = ({ latest, moreBlogs }) => {
  if (!LatestBlog) {
    LatestBlog = dynamic(() => import(`./blog/${latest.slug}.mdx`));
  }

  return (
    <Fragment>
      <Head>
        <title>
          {pkg.name} | {pkg.description}
        </title>
        <meta name="description" content={pkg.description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="beprimed.dev" />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="" />
        <meta property="og:image:height" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@itsdouges" />
        <meta name="twitter:title" content={pkg.name} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:description" content={pkg.description} />
      </Head>

      <main>
        <div css={heroStyles}>
          <Stack gap={8}>
            <Section>
              <Heading level={0}>beprimed&#8203;.dev</Heading>
              <div css={heroDescriptionStyles}>{pkg.description}</div>
            </Section>
          </Stack>
        </div>

        <Section isSeparated>
          <Blog {...latest}>
            <LatestBlog />
          </Blog>
        </Section>

        <Section isSeparated isSunken>
          <Stack gap={2}>
            <Heading level={2}>There&apos;s more where that came from</Heading>
            <div css={gridListStyles}>
              {moreBlogs.map((blog, index) => (
                <Link key={index} href={`/blog/${blog.slug}`} passHref>
                  <A>
                    <Card title={blog.title} secondary={blog.blurb} />
                  </A>
                </Link>
              ))}
            </div>
          </Stack>
        </Section>

        <Section isSeparated>
          <SignUp />
        </Section>
      </main>
    </Fragment>
  );
};

export async function getStaticProps() {
  const allBlogs = await fs.readdir(process.cwd() + '/pages/blog');
  const mdxBlogs = allBlogs.map((filename) => ({
    slug: filename.replace('.mdx', ''),
    ...require(`./blog/${filename}`).meta,
  }));

  mdxBlogs.sort((a, b) => getTime(b.publishDate) - getTime(a.publishDate));

  const latest = mdxBlogs[0];
  const moreBlogs = mdxBlogs.slice(1);

  return Promise.resolve({ props: { latest, moreBlogs } });
}

export default Home;
