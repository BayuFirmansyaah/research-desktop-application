import { createModule } from './createModule';

export default {
  title: 'Module Page',
  component: createModule,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createModule(args);
  },
  argTypes: {
    // Contents
    template: {
        control: { type: 'select' },
        options: ['select-module', 'select-role'],
    },
  },
};

const Template = (args) => createModule(args);

export const SelectModule = Template.bind({});
export const selectRole = Template.bind({});

SelectModule.args = {
    template: 'select-module',
};
selectRole.args = {
    template: 'select-role',
};
