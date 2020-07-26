import React from 'react';
import markdown from './README.mdx';
import { action } from '@storybook/addon-actions';
import Toggle from '.';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    componentSubtitle: 'Component',
    mdx: markdown,
  },
};

export const Regular = (args) => <Toggle {...args} />;

const description = `
You can customize the content by using \`BannerNavigation\`.
`;

Regular.story = {
  parameters: {
    docs: {
      storyDescription: description,
    },
  },
};
