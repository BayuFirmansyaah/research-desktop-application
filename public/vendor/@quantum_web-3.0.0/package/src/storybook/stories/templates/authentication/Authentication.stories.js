import { createAuth } from './createAuthentication';

export default {
  title: 'Authentication Page',
  component: createAuth,
  parameters: {
    viewport: { defaultViewport: 'reset' },
  },
  render: (args) => {
    // Use a function to create DOM contents
    return createAuth(args);
  },
  argTypes: {
    // Contents
    template: {
        control: { type: 'select' },
        options: ['sign-in', 'sign-up'],
    },
    advance: { control: 'boolean' },
  },
};

const Template = (args) => createAuth(args);

export const SignIn = Template.bind({});
export const SignUp = Template.bind({});
export const AdvanceSignIn = Template.bind({});
export const AdvanceSignUp = Template.bind({});

SignIn.args = {
    template: 'sign-in',
    advance: false,
};
SignUp.args = {
    template: 'sign-up',
    advance: false,
};
AdvanceSignIn.args = {
    template: 'sign-in',
    advance: true,
};
AdvanceSignUp.args = {
    template: 'sign-up',
    advance: true,
};


