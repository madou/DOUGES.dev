/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, Fragment } from 'react';
import Textfield from 'design-system/textfield';
import Label from 'design-system/label';
import Button from 'design-system/button';
import { token } from '@atlaskit/tokens';
import Heading from 'design-system/heading';
import Stack from 'design-system/stack';
import Text from 'design-system/text';
import Inline from 'design-system/inline';

const completeStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'opacity 150ms',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 3,
  padding: 8,
  fontSize: 28,
  color: token('color.text.onBold'),
  background: token('color.background.boldSuccess.resting'),
});

const hiddenStyles = css({
  opacity: 0,
});

const visibleStyles = css({
  opacity: 1,
});

const sendSignUpRequest = async (email: string) => {
  const formData = new FormData();
  formData.append('email', email);

  await fetch('https://buttondown.email/api/emails/embed-subscribe/douges.dev', {
    method: 'POST',
    body: formData,
  });
};

function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [email, setEmail] = useState('');
  const id = 'mailing-list';

  return (
    <Stack gap={1}>
      <Heading level={3}>Like it? Come hang out again soon.</Heading>
      <Text as="p">
        Join others and get notified early when new content is available, unsubscribe at any time.
      </Text>

      <form
        data-splitbee-event="Submit Mailing List Form"
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          await sendSignUpRequest(email);
          setIsComplete(true);
        }}>
        <Label htmlFor={id} label="Join the mailing list today" />
        <Inline gap={1}>
          <Textfield
            isRequired
            isDisabled={isLoading}
            type="email"
            name={id}
            id={id}
            placeholder="Your email here"
            onChange={setEmail}
          />
          <Button type="submit" isDisabled={isLoading} appearance="primary">
            <Fragment>
              <div css={[completeStyles, isComplete ? visibleStyles : hiddenStyles]}>✓</div>
              Join
            </Fragment>
          </Button>
        </Inline>
      </form>
    </Stack>
  );
}

export default SignUp;
