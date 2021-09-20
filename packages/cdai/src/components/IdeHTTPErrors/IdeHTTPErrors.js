//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React, { Component } from 'react';
import bg403 from './assets/bg403.svg';
import bg404 from './assets/bg404.svg';
import bgCustom from './assets/bgCustom.svg';
import { Link } from 'carbon-components-react';
import { arrayOf, number, oneOfType, shape, string } from 'prop-types';
import { settings } from 'carbon-components';
import { idePrefix } from '../../globals/js/settings';
export default class IdeHTTPErrors extends Component {
  static propTypes = {
    /**
     * Alternative background image to render for 403 and 404 pages. Must equal
     * 403 or 404 if defined. A generic image is rendered if not defined.
     */
    background: number,
    /**
     * Second row of the text section used to display a pre-translated
     * description for the HTTP status code message
     */
    description: string,
    /**
     * Third row of the text section used to display a pre-translated details
     * related to the HTTP status code message and description
     */
    details: string,
    /**
     * Fourth row of the text section used to display a list of links to
     * relevant sections or documentation
     */
    links: oneOfType([
      /**
       * A single link object
       */
      shape({
        /**
         * The pre-translated text to display for the link
         */
        text: string.isRequired,
        /**
         * The link's destination
         */
        url: string.isRequired,
      }),
      /**
       * An array of links objects
       */
      arrayOf(
        shape({
          /**
           * The pre-translated text to display for the link
           */
          text: string.isRequired,
          /**
           * The link's destination
           */
          url: string.isRequired,
        })
      ),
    ]),
    /**
     * First row of the text section used to display a pre-translated HTTP
     * status code message
     */
    title: string,
  };

  static defaultProps = {
    title: 'CHANGE ME',
    description: 'CHANGE ME',
  };

  constructor(props) {
    super(props);
    this.pageWidth = React.createRef();
  }

  componentDidMount() {
    const { handleResize } = this;
    handleResize();
    window.addEventListener('resize', handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    const {
      className,
      gridPrefix,
      pageWidth,
      renderBackground,
      renderDescription,
      renderDetails,
      renderLinks,
      renderTitle,
      validateProps,
    } = this;
    validateProps();
    return (
      <div className={className}>
        <div
          className={`${gridPrefix}--grid ${gridPrefix}--grid--full-width`}
          ref={pageWidth}
        >
          {renderBackground()}
          {renderTitle()}
          {renderDescription()}
          {renderDetails()}
          {renderLinks()}
          {renderBackground(true)}
        </div>
      </div>
    );
  }

  // Section rendering
  renderTitle = () => this.renderSection('title');
  renderDescription = () => this.renderSection('description');
  renderDetails = () => this.renderSection('details');
  renderLinks = () => {
    const {
      linksPropIsObject,
      props: { links: linksProp },
      renderSection,
    } = this;
    if (!linksProp) {
      return;
    }
    const links = linksPropIsObject ? [linksProp] : linksProp;
    return renderSection(
      'links',
      <ul>
        {links.map(({ text, url }) => (
          <li
            className={`${this.className}-links--link`}
            key={`${text}:${url}`}
          >
            <Link href={url}>{text}</Link>
          </li>
        ))}
      </ul>
    );
  };

  // Background rendering
  renderBackground = (isInline) => {
    const { getImage, isLargeViewport, renderSection, state } = this;
    if (
      !state ||
      (isInline && isLargeViewport) ||
      (!isInline && !isLargeViewport)
    ) {
      return null;
    }
    const className = 'image-container';
    const sectionClassName = isInline ? `inline-${className}` : className;
    const background = getImage(isInline);
    return renderSection(sectionClassName, background);
  };
  getImage = (isInline) => {
    const { background: src, className: componentClassName } = this;
    const className = isInline
      ? `${componentClassName}-inline-image`
      : `${componentClassName}-image`;
    return <img alt="" {...{ className, src }} />;
  };
  handleResize = () => {
    this.setState({ width: this.pageWidth.current.offsetWidth });
  };
  get background() {
    switch (this.props.background) {
      case 403:
        return bg403;
      case 404:
        return bg404;
      default:
        return bgCustom;
    }
  }
  get isLargeViewport() {
    const state = this.state;
    if (!state) {
      return false;
    }
    const width = state.width;
    // NOTE @simon Hardcoded value 672 is per Carbon guidelines, see
    // https://www.carbondesignsystem.com/guidelines/2x-grid/basics#breakpoints
    const mediumViewportWidth = 672;
    return width >= mediumViewportWidth;
  }

  // Layout
  renderSection = (sectionClassName, children) => {
    if (!sectionClassName) {
      return null;
    }
    const { className, gridClasses, props, renderRow } = this;
    return renderRow(
      <div className={`${className}-${sectionClassName} ${gridClasses}`}>
        {children ? children : props[sectionClassName]}
      </div>
    );
  };
  renderRow = (children) => (
    <div className={`${this.gridPrefix}--row`}>{children}</div>
  );
  get gridClasses() {
    const { gridPrefix } = this;
    const column = (viewportSize, columnsToSpan) =>
      `${gridPrefix}--col-${viewportSize}-${columnsToSpan}`;
    const offset = (viewportSize, columnsToSpan) =>
      `${gridPrefix}--offset-${viewportSize}-${columnsToSpan}`;
    return [
      offset('md', 3),
      column('md', 4),
      offset('md', 1),
      offset('max', 6),
      column('max', 6),
      offset('max', 4),
    ].join(' ');
  }
  get gridPrefix() {
    return settings.prefix;
  }

  // Validation
  validateProps = () => {
    const {
      assertBackgroundIsValid,
      assertIsType,
      assertLinksIsValid,
      props: { background, description, details, links, title },
    } = this;
    background && assertBackgroundIsValid();
    description && assertIsType('string', 'description', description);
    details && assertIsType('string', 'details', details);
    links && assertLinksIsValid();
    title && assertIsType('string', 'title', title);
  };
  assertBackgroundIsValid = () => {
    const {
      props: { background },
      throwError,
    } = this;
    if (background !== 403 && background !== 404) {
      throwError(`background prop must be 403 or 404, got ${background}`);
    }
  };
  assertLinksIsValid = () => {
    const {
      assertIsValidLinkObject,
      linksPropIsArray,
      linksPropIsObject,
      props: { links },
      throwError,
    } = this;
    if (linksPropIsObject) {
      assertIsValidLinkObject(links);
    } else if (linksPropIsArray) {
      if (!links.length) {
        return throwError(
          'links prop defined as an array must contain at least 1 item'
        );
      }
      links.map((link) => assertIsValidLinkObject(link));
    } else {
      throwError(
        `links prop must be an object or array of objects with text+url props, got ${JSON.stringify(
          links
        )}`
      );
    }
  };
  assertIsType = (type, propName, prop) => {
    const propType = typeof prop;
    if (propType !== type) {
      this.throwError(`${propName} prop must be type ${type}, got ${propType}`);
    }
  };
  assertIsValidLinkObject = (link) => {
    const { assertIsType } = this;
    const { text, url } = link;
    assertIsType('string', 'links.text', text);
    assertIsType('string', 'links.url', url);
  };
  throwError = (msg) => {
    throw new Error(`${this.constructor.name}: ${msg}`);
  };
  get linksPropIsArray() {
    return Array.isArray(this.props.links);
  }
  get linksPropIsObject() {
    const { links } = this.props;
    return (
      links &&
      Object.prototype.hasOwnProperty.call(links, 'text') &&
      Object.prototype.hasOwnProperty.call(links, 'url')
    );
  }

  // Class scope helpers
  get className() {
    return `${idePrefix}-http-errors`;
  }
}
