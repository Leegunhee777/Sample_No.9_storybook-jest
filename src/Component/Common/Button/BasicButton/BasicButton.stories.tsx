import { BasicButton } from './index';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'ewq/BasicButton',
  component: BasicButton,
};

const Template: ComponentStory<typeof BasicButton> = args => (
  <BasicButton {...args} />
);
export const Main = Template.bind({});
export const Side = Template.bind({});
