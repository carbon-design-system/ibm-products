import { IdeHTTPErrors } from '.';
import * as jth from '../../component_helpers/jest_test_helper_functions.js';

describe('IdeHTTPErrors', () => {
  let component, unmount;
  const mountTestComponent = (defaultProps = {}, props = {}) => {
    let test = jth.mountComponent(
      jth.getJSXForComponent(IdeHTTPErrors, defaultProps, props),
      false
    );
    component = test.component;
    unmount = test.unmount;
  };
  afterEach(() => unmount && unmount());

  // Prop based rendering tests
  it('renders when no props are defined', () => {
    mountTestComponent();
    expect(component.getElements()).toMatchSnapshot();
  });
  function rendersWhenPropIsDefined(
    propName,
    propValue = propName,
    testNameSuffix
  ) {
    let testName = `renders when the ${propName} prop is defined`;
    if (testNameSuffix) testName += ` as ${testNameSuffix}`;
    it(testName, () => {
      mountTestComponent(undefined, { [propName]: propValue });
      expect(component.instance().props[propName]).toBe(propValue);
      expect(component.getElements()).toMatchSnapshot();
    });
  }
  rendersWhenPropIsDefined('background', 403, '403');
  rendersWhenPropIsDefined('background', 404, '404');
  rendersWhenPropIsDefined('title');
  rendersWhenPropIsDefined('description');
  rendersWhenPropIsDefined('details');
  rendersWhenPropIsDefined('links', { text: 'text', url: 'url' }, 'an object');
  rendersWhenPropIsDefined(
    'links',
    [
      { text: 'text1', url: 'url1' },
      { text: 'text2', url: 'url2' },
    ],
    'an array'
  );

  // Validation tests
  beforeEach(() => jest.spyOn(console, 'error').mockImplementation(() => {}));
  afterEach(() => console.error.mockRestore());
  function throwsWithInvalidProp(
    propName,
    propValue = propName,
    testNameSuffix,
    errorMessageSuffix
  ) {
    let testName = `throws when ${propName} prop ${testNameSuffix}`;
    it(testName, () => {
      expect(() =>
        mountTestComponent(undefined, { [propName]: propValue })
      ).toThrowError(`IdeHTTPErrors: ${propName} prop ${errorMessageSuffix}`);
    });
  }
  throwsWithInvalidProp(
    'background',
    1,
    'is not equal to 403 or 404',
    'must be 403 or 404, got 1'
  );
  throwsWithInvalidProp(
    'title',
    1,
    'is not type string',
    'must be type string, got number'
  );
  throwsWithInvalidProp(
    'description',
    1,
    'is not type string',
    'must be type string, got number'
  );
  throwsWithInvalidProp(
    'details',
    1,
    'is not type string',
    'must be type string, got number'
  );
  describe('links prop', () => {
    throwsWithInvalidProp(
      'links',
      1,
      'is not an object or array',
      'must be an object or array of objects with text+url props, got 1'
    );
    function throwsWithInvalidNestedProp(
      propName,
      propValue,
      nestedPropName,
      testNameSuffix,
      errorMessageSuffix
    ) {
      let propNameSuffix = '.';
      if (Array.isArray(propValue)) propNameSuffix = '[n].';
      let testName = `throws when ${propName}${propNameSuffix}${nestedPropName} prop is ${testNameSuffix}`;
      it(testName, () => {
        expect(() =>
          mountTestComponent(undefined, { [propName]: propValue })
        ).toThrowError(
          `IdeHTTPErrors: ${propName}.${nestedPropName} prop ${errorMessageSuffix}`
        );
      });
    }
    describe('defined as an object', () => {
      throwsWithInvalidNestedProp(
        'links',
        { text: 1, url: '' },
        'text',
        'is not type string',
        'must be type string, got number'
      );
      throwsWithInvalidNestedProp(
        'links',
        { text: '', url: 1 },
        'url',
        'is not type string',
        'must be type string, got number'
      );
    });
    describe('defined as an array', () => {
      throwsWithInvalidProp(
        'links',
        [],
        'defined as an array does not contain any items',
        'defined as an array must contain at least 1 item'
      );
      throwsWithInvalidNestedProp(
        'links',
        [{ text: 1, url: '' }],
        'text',
        'is not type string',
        'must be type string, got number'
      );
      throwsWithInvalidNestedProp(
        'links',
        [{ text: '', url: 1 }],
        'url',
        'is not type string',
        'must be type string, got number'
      );
    });
  });

  // Coverage completion tests
  describe('renderBackground method', () => {
    it('returns null when inline and viewport width is greater than or equal to medium', () => {
      mountTestComponent();
      component.setState({ width: 672 });
      expect(component.instance().renderBackground(true)).toEqual(null);
    });
  });
  describe('renderSection method', () => {
    it('returns null when sectionClassName is undefined', () => {
      mountTestComponent();
      expect(component.instance().renderSection()).toEqual(null);
    });
  });
});
