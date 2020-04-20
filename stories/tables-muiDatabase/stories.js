import React from 'react';

import Tables from "./index"

export default {
  title: 'Welcome',
};

export const toStorybook = () => <Tables />;

toStorybook.story = {
  name: 'to',
};
