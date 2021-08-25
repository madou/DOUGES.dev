/** @jsxImportSource @emotion/react */
import { token } from '@atlaskit/tokens';
import { css } from '@emotion/react';

const resetStyles = css({
  margin: 0,
});

const largeHeadingStyles = css({
  fontSize: 64,
  lineHeight: 1.1,
  color: token('color.text.highEmphasis'),
  fontWeight: 900,
  letterSpacing: '-0.01em',
});

const mediumHeadingStyles = css({
  fontSize: 40,
  lineHeight: 1.16,
  color: token('color.text.highEmphasis'),
  fontWeight: 700,
  letterSpacing: '-0.01em',
});

const smallHeadingStyles = css({
  fontSize: 28,
  lineHeight: 1.2,
  color: token('color.text.mediumEmphasis'),
  fontWeight: 600,
  letterSpacing: '-0.01em',
});

const headingStyles = {
  1: largeHeadingStyles,
  2: mediumHeadingStyles,
  3: smallHeadingStyles,
};

const headingLevel = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
};

interface HeadingProps {
  as?: 'div' | 'h1' | 'h2' | 'h3';
  level: 1 | 2 | 3;
  children: string;
}

function Heading({ level, as, children }: HeadingProps) {
  const styles = headingStyles[level];
  const Level: any = as || headingLevel[level];

  return <Level css={[resetStyles, styles]}>{children}</Level>;
}

export default Heading;
