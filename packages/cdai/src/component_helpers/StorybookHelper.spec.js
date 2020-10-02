import { getComponentLabel } from './StorybookHelper';

describe('getComponentLabel', () => {
  it('returns the expected output for a component', () => {
    expect(getComponentLabel('IdeButton')).toEqual('CD&AI/IdeButton');
  });
});
