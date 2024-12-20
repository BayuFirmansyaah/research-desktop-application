import { createFooter } from './createFooter';

export default {
  title: 'Footer',
  component: createFooter,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createFooter(args);
  },
  argTypes: {
    // Contents
    variant: { 
      control: { type: 'select' },
      options: ['Default', "Alt 1", "Alt 2"], },
    borderless: { control: 'boolean' },
    hideOnMobile: { control: 'boolean' },
  },
};

const Template = (args) => createFooter(args);

export const Default = Template.bind({});
export const Alternative_1 = Template.bind({});
export const Alternative_2 = Template.bind({});
Default.args = {
    variant: 'Default',
    borderless: false,
    hideOnMobile: false,
};
Alternative_1.args = {
    variant: "Alt 1",
    borderless: true,
    hideOnMobile: false,
};
Alternative_2.args = {
    variant: "Alt 2",
    borderless: true,
    hideOnMobile: false,
};


