/** @jsxImportSource @emotion/react */
import css from 'design-system/css';
import Box, { PaddingProps } from 'design-system/box';

const styles = css({
  inline: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const gapStyles = css({
  none: {},
  '-small': {
    '> *': { marginInlineEnd: -4 },
  },
  '-regular': {
    '> *': { marginInlineEnd: -8 },
  },
  '-medium': {
    '> *': { marginInlineEnd: -12 },
  },
  '-large': {
    '> *': { marginInlineEnd: -16 },
  },
  '-xlarge': {
    '> *': { marginInlineEnd: -24 },
  },
  small: {
    gap: 4,
  },
  regular: {
    gap: 8,
  },
  medium: {
    gap: 12,
  },
  large: {
    gap: 16,
  },
  xlarge: {
    gap: 24,
  },
});

const inlineAlignStyles = css({
  end: {
    justifyContent: 'flex-end',
  },
  start: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  stretch: {
    justifyContent: 'stretch',
  },
});

const blockAlignStyles = css({
  bottom: {
    alignItems: 'flex-end',
  },
  top: {
    alignItems: 'flex-start',
  },
  middle: {
    alignItems: 'center',
  },
  stretch: {
    alignItems: 'stretch',
  },
});

const widthStyles = css({
  auto: {},
  full: {
    inlineSize: '100%',
  },
});

interface InlineProps extends PaddingProps {
  children: React.ReactNode;
  gap?: keyof typeof gapStyles;
  inlineAlign?: keyof typeof inlineAlignStyles;
  blockAlign?: keyof typeof blockAlignStyles;
  width?: keyof typeof widthStyles;
}

function Inline({
  children,
  inlineAlign = 'start',
  blockAlign = 'top',
  gap = 'none',
  width = 'auto',
  ...props
}: InlineProps) {
  const gapStyle = gapStyles[gap];
  const alignStyle = inlineAlignStyles[inlineAlign];
  const justifyStyle = blockAlignStyles[blockAlign];
  const widthStyle = widthStyles[width];

  return (
    <Box
      {...props}
      css={[styles.inline, alignStyle, justifyStyle, gapStyle, widthStyle]}
      >
      {children}
    </Box>
  );
}

export default Inline;
