import { createBottomNav } from './createBottomNav';

export default {
  title: 'Bottom Nav',
  component: createBottomNav,
  parameters: {
    viewport: { defaultViewport: 'mobile' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createBottomNav(args);
  },
  argTypes: {
    // Contents
    variant: { 
      control: { type: 'select' },
      options: ['Default', 'On Form']
    },
    withToc: { control: 'boolean' },
    isStepper: { control: 'boolean' },
  },
};

const Template = (args) => createBottomNav(args);

export const Default = Template.bind({});
export const OnForm = Template.bind({});
export const OnFormToc = Template.bind({});
export const OnFormStepper = Template.bind({});
Default.args = {
  variant: 'Default',
};
OnForm.args = {
  variant: 'On Form',
};
OnFormToc.args = {
  variant: 'On Form',
  withToc: true
};
OnFormStepper.args = {
  variant: 'On Form',
  isStepper: true
};

