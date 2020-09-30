import { getComponentLabel } from './StorybookHelper';

describe('getComponentLabel', () => {
  it('returns the expected output for a component', () => {
    expect(getComponentLabel('IdeButton')).toEqual(
      'Under Construction/IDE Button'
    );
  });
});
