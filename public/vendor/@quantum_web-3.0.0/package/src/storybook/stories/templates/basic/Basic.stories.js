import { createBasic } from './createBasic';

export default {
  title: 'Basic Page',
  component: createBasic,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createBasic(args);
  },
  argTypes: {
    // Contents
    template: {
        control: { type: 'select' },
        options: ['List', 'List Alt', 'Detail'],
     },
    withSidebar: { control: 'boolean' },
    withBottomNav: { control: 'boolean' },
    footerAlternative: { 
      control: { type: 'select' },
      options: [1, 2], },
  },
};

const Template = (args) => createBasic(args);

export const List = Template.bind({});
export const ListAlt = Template.bind({});
export const ListAltFooter1 = Template.bind({});
export const ListAltFooter2 = Template.bind({});
export const ListWithSidebar = Template.bind({});
export const ListWithBottomNav = Template.bind({});
List.args = {
    template: 'List',
    withSidebar: false,
    withBottomNav: false,
};
ListAlt.args = {
  template: 'List Alt',
  withSidebar: false,
  withBottomNav: false,
};
ListAltFooter1.args = {
  template: 'List Alt',
  withSidebar: false,
  withBottomNav: false,
  footerAlternative: 1
};
ListAltFooter2.args = {
  template: 'List Alt',
  withSidebar: false,
  withBottomNav: false,
  footerAlternative: 2
};
ListWithSidebar.args = {
    template: 'List',
    withSidebar: true,
    withBottomNav: false,
};
ListWithBottomNav.args = {
    template: 'List',
    withSidebar: false,
    withBottomNav: true,
};

export const Detail = Template.bind({});
export const DetailWithSidebar = Template.bind({});
export const DetailAltEdit = Template.bind({});
Detail.args = {
    template: 'Detail',
    withSidebar: false,
    withBottomNav: false,
};
DetailWithSidebar.args = {
    template: 'Detail',
    withSidebar: true,
    withBottomNav: false,
};
DetailAltEdit.args = {
  template: 'Detail Alt Edit',
  withSidebar: false,
  withBottomNav: false,
};
