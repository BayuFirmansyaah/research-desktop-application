import { createHeader } from './createHeader';

export default {
  title: 'Header',
  component: createHeader,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createHeader(args);
  },
  argTypes: {
    // Contents
    subheaderVariant: { 
      control: { type: 'select' },
      options: ['On Form', 'On Form Alt', 'On Form Alt Stepper'] },
    withBottomNav: { control: 'boolean' },
  },
};

const Template = (args) => createHeader(args);


export const Default = Template.bind({});
export const OnForm = Template.bind({});
export const OnFormAlt = Template.bind({});
export const OnFormAltStepper = Template.bind({});
export const withBottomNav = Template.bind({});
Default.args = {
};
OnForm.args = {
    subheaderVariant: 'On Form',
};
OnFormAlt.args = {
    subheaderVariant: 'On Form Alt',
};
OnFormAltStepper.args = {
    subheaderVariant: 'On Form Alt Stepper',
};
withBottomNav.args = {
    withBottomNav: true,
};

