import Inline from 'design-system/inline';
import Lozenge from 'design-system/lozenge';
import Stack from 'design-system/stack';
import Button from 'design-system/button';
import LinkButton from 'design-system/link-button';
import Avatar, { AvatarButton, AvatarLink } from 'design-system/avatar';
import Tag, { TagLink } from 'design-system/tag';
import DropdownMenu, { MenuItem } from 'design-system/dropdown-menu';
import Tabs, { Tab, TabList, TabPanel } from 'design-system/tabs';
import Box from 'design-system/box';
import Text from 'design-system/text';

function Playground() {
  return (
    <Box padding="xlarge">
      <Stack gap="regular">
        <Inline gap="regular">
          <Lozenge appearance="defaultBold">Lozenge</Lozenge>
          <Lozenge appearance="new">Lozenge</Lozenge>
          <Lozenge appearance="success">Lozenge</Lozenge>
          <Lozenge appearance="moved">Lozenge</Lozenge>
          <Lozenge appearance="new">Lozenge</Lozenge>
          <Lozenge appearance="removed">Lozenge</Lozenge>
        </Inline>
        <Inline gap="regular">
          <Lozenge appearance="defaultBold">Lozenge</Lozenge>
          <Lozenge appearance="newBold">Lozenge</Lozenge>
          <Lozenge appearance="successBold">Lozenge</Lozenge>
          <Lozenge appearance="movedBold">Lozenge</Lozenge>
          <Lozenge appearance="newBold">Lozenge</Lozenge>
          <Lozenge appearance="removedBold">Lozenge</Lozenge>
        </Inline>
        <Inline gap="regular">
          <Button appearance="subtle">Button</Button>
          <Button appearance="default">Button</Button>
          <Button appearance="primary">Button</Button>
          <Button appearance="warning">Button</Button>
          <Button appearance="danger">Button</Button>
          <Button isSelected>Button</Button>
          <Button isDisabled>Button</Button>
        </Inline>
        <Inline gap="regular">
          <LinkButton href="#" appearance="subtle">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="default">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="primary">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="warning">
            Button
          </LinkButton>
          <LinkButton href="#" appearance="danger">
            Button
          </LinkButton>
          <LinkButton href="#" isSelected>
            Button
          </LinkButton>
        </Inline>
        <Inline gap="small">
          <Avatar size="xsmall" />
          <Avatar size="small" />
          <Avatar size="medium" />
          <Avatar size="large" />
          <Avatar size="xlarge" />
        </Inline>
        <Inline gap="small">
          <AvatarLink size="xsmall" appearance="square" />
          <AvatarLink size="small" appearance="square" />
          <AvatarLink size="medium" appearance="square" />
          <AvatarLink size="large" appearance="square" />
          <AvatarLink size="xlarge" appearance="square" />
        </Inline>
        <Inline gap="-small">
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
          <AvatarButton size="medium" />
        </Inline>
        <Inline gap="small">
          <Tag color="greyLight">Tag</Tag>
          <Tag color="blueLight">Tag</Tag>
          <Tag color="greenLight">Tag</Tag>
          <Tag color="redLight">Tag</Tag>
          <Tag color="tealLight">Tag</Tag>
          <Tag color="yellowLight">Tag</Tag>
          <Tag color="purpleLight">Tag</Tag>
        </Inline>
        <Inline gap="small">
          <Tag color="grey">Tag</Tag>
          <Tag color="blue">Tag</Tag>
          <Tag color="green">Tag</Tag>
          <Tag color="red">Tag</Tag>
          <Tag color="teal">Tag</Tag>
          <Tag color="yellow">Tag</Tag>
          <Tag color="purple">Tag</Tag>
        </Inline>
        <Inline gap="small">
          <TagLink color="greyLight">Tag</TagLink>
          <TagLink color="blueLight">Tag</TagLink>
          <TagLink color="greenLight">Tag</TagLink>
          <TagLink color="redLight">Tag</TagLink>
          <TagLink color="tealLight">Tag</TagLink>
          <TagLink color="yellowLight">Tag</TagLink>
          <TagLink color="purpleLight">Tag</TagLink>
        </Inline>
        <Inline gap="small">
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="grey" appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="blue" appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="green"
            appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="red" appearance="rounded">
            Tag
          </Tag>
          <Tag icon={<Avatar borderColor="none" size="xsmall" />} color="teal" appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="yellow"
            appearance="rounded">
            Tag
          </Tag>
          <Tag
            icon={<Avatar borderColor="none" size="xsmall" />}
            color="purple"
            appearance="rounded">
            Tag
          </Tag>
        </Inline>

        <DropdownMenu trigger="Open menu">
          <MenuItem>Foo</MenuItem>
          <MenuItem isSelected>Bar</MenuItem>
          <MenuItem>Baz</MenuItem>
        </DropdownMenu>

        <Tabs>
          <TabList>
            <Tab isSelected>Tab 1</Tab>
            <Tab>Tab 2</Tab>
            <Tab>Tab 3</Tab>
          </TabList>
          <TabPanel>
            <Box paddingY="xlarge" paddingX="regular" background="neutralSubtle">
              <Text weight="bolder" color="low" size="regular">
                Panel one
              </Text>
            </Box>
          </TabPanel>
        </Tabs>
      </Stack>
    </Box>
  );
}

export default Playground;
