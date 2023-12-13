import { getStoryTitle } from '../../../../ibm-products/src/global/js/utils/story-helper';
import { Example } from '.';

export default {
  title: getStoryTitle(Example.displayName),
  component: Example,
  tags: ['autodocs'],
};

export const Default = {
  args: {},
};