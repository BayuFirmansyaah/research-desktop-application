import { createSidebar } from './createSidebar';

export default {
  title: 'Sidebar',
  component: createSidebar,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createSidebar(args);
  },
  argTypes: {
  },
};

const Template = (args) => createSidebar(args);


export const Default = Template.bind({});

