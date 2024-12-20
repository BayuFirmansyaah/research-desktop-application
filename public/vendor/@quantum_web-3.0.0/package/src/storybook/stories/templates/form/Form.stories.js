import { createForm } from './createFrom';

export default {
  title: 'Form Page',
  component: createForm,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createForm(args);
  },
  argTypes: {
    variant: { 
        control: { type: 'select' },
        options: ['Default', 'Second', 'Second Alt'],
    },
    advance: { control: 'boolean' },
  },
};

const Template = (args) => createForm(args);

export const Form = Template.bind({});
export const FormSecond = Template.bind({});
export const AdvanceForm = Template.bind({});
export const AdvanceFormSecond = Template.bind({});
export const AdvanceFormSecondAlt = Template.bind({});
Form.args = {
    variant: 'Default',
    advance: false,
};
FormSecond.args = {
  variant: 'Second',
  advance: false,
};
AdvanceForm.args = {
  variant: 'Default',
  advance: true,
};
AdvanceFormSecond.args = {
  variant: 'Second',
  advance: true,
};
AdvanceFormSecondAlt.args = {
  variant: 'Second Alt',
  advance: true,
};


