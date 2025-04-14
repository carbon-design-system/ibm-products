//cspell: disable
import styles from './_storybook-styles.scss?inline';
import React, { useEffect, useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import ResizeBar from './ResizeBar';

// const defaultStoryProps = {
//   orientation: 'horizontal',
//   onResize: action('onResize'),
//   onResizeEnd: action('onResizeEnd'),
// };

export default {
  title: 'IBM Products/Components/ResizeBar/ResizeBar',
  component: ResizeBar,
  // tags: ['autodocs'],
  parameters: {
    // layout: 'fullscreen',
    styles,
    // docs: {
    //   page: DocsPage,
    // },
  },
  argTypes: {
    orientation: {
      control: {
        type: 'select',
      },
    },
    onResize: {
      control: {
        type: 'function',
      },
    },
    onResizeEnd: {
      control: {
        type: 'function',
      },
    },
  },
};

const OneDivHorizontalTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        width: '600px',
        // justifyContent: 'end',
      }}
    >
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          minBlockSize: '60px',
          overflow: 'auto',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
      <ResizeBar defaultSiblingSize="108" orientation="horizontal" />
    </div>
  );
};
const OneDivVerticalTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        height: '400px',
        width: '600px',
        // justifyContent: 'end',
      }}
    >
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          minInlineSize: '60px',
          overflow: 'auto',
          width: 'fit-content',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
      <ResizeBar defaultSiblingSize={600} orientation="vertical" />
    </div>
  );
};
const OneDivHorizontalReverseTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        width: '600px',
        justifyContent: 'end',
      }}
    >
      <ResizeBar defaultSiblingSize={108} orientation="horizontal" />
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          minBlockSize: '60px',
          overflow: 'auto',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
    </div>
  );
};
const OneDivVerticalReverseTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        height: '400px',
        width: '600px',
        justifyContent: 'end',
      }}
    >
      <ResizeBar defaultSiblingSize={600} orientation="vertical" />
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          minInlineSize: '60px',
          overflow: 'auto',
          width: 'fit-content',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
    </div>
  );
};

const TwoDivsHorizontalTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '400px',
        width: '600px',
      }}
    >
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          overflow: 'auto',
          minBlockSize: '60px',
          height: '50%',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
      <ResizeBar defaultSiblingSize={[200, 200]} orientation="horizontal" />
      <div
        className="div-2"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          overflow: 'auto',
          minBlockSize: '60px',
          height: '50%',
        }}
      >
        <h4>div 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
    </div>
  );
};
const TwoDivsVerticalTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        height: '400px',
        width: '600px',
      }}
    >
      <div
        className="div-1"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          overflow: 'auto',
          minInlineSize: '60px',
          width: '50%',
        }}
      >
        <h4>div 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
      <ResizeBar defaultSiblingSize={[300, 300]} orientation="vertical" />
      <div
        className="div-2"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          overflow: 'auto',
          minInlineSize: '60px',
          width: '50%',
        }}
      >
        <h4>div 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
    </div>
  );
};

const MixedTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        // flexDirection: 'column',
        height: '400px',
        width: '600px',
      }}
    >
      <div
        className="div-1"
        style={{
          // padding: '1rem',
          overflow: 'auto',
          minInlineSize: '60px',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="div-1.1"
          style={{
            padding: '1rem',
            backgroundColor: 'var(--cds-layer-01)',
            overflow: 'auto',
            minBlockSize: '60px',
            height: '50%',
          }}
        >
          <h4>div 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
            officiis sed aliquam deleniti quae eius obcaecati quidem molestias
            beatae!
          </p>
        </div>
        <ResizeBar defaultSiblingSize={[200, 200]} orientation="horizontal" />
        <div
          className="div-1.2"
          style={{
            padding: '1rem',
            backgroundColor: 'var(--cds-layer-01)',
            overflow: 'auto',
            minBlockSize: '60px',
            height: '50%',
          }}
        >
          <h4>div 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
            officiis sed aliquam deleniti quae eius obcaecati quidem molestias
            beatae!
          </p>
        </div>
      </div>
      <ResizeBar defaultSiblingSize={[300, 300]} orientation="vertical" />
      <div
        className="div-2"
        style={{
          padding: '1rem',
          backgroundColor: 'var(--cds-layer-01)',
          overflow: 'auto',
          minInlineSize: '60px',
          width: '50%',
        }}
      >
        <h4>div 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut natus
          officiis sed aliquam deleniti quae eius obcaecati quidem molestias
          beatae!
        </p>
      </div>
    </div>
  );
};

export const OneDivHorizontal = OneDivHorizontalTemplate.bind({});
export const OneDivVertical = OneDivVerticalTemplate.bind({});
export const OneDivHorizontalReverse = OneDivHorizontalReverseTemplate.bind({});
export const OneDivVerticalReverse = OneDivVerticalReverseTemplate.bind({});

export const TwoDivsHorizontal = TwoDivsHorizontalTemplate.bind({});
export const TwoDivsVertical = TwoDivsVerticalTemplate.bind({});

export const Mixed = MixedTemplate.bind({});
