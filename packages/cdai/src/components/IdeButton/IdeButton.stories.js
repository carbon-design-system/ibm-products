//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { getComponentLabel } from '../../component_helpers/StorybookHelper';

import { IdeButton } from '.';
import AddIcon16 from '@carbon/icons-react/lib/add/16';
import BeeIcon16 from '@carbon/icons-react/lib/bee/16';
import RenewIcon16 from '@carbon/icons-react/lib/renew/16';

import styles from './_storybook.scss';

const button1Ref = React.createRef();

storiesOf(getComponentLabel('IdeButton'), module)
  .addParameters({ styles })
  .addDecorator(withKnobs)
  .add(
    'Label and icon',
    () => (
      <div>
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Primary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="primary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Secondary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="secondary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Tertiary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="tertiary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Danger. */}
        <IdeButton
          onClick={action('clicked')}
          kind="danger"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Ghost. */}
        <IdeButton
          onClick={action('clicked')}
          kind="ghost"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Disabled. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          disabled
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Small. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          small
        >
          Label
        </IdeButton>
      </div>
    ),
    {
      info: {
        text: 'Shows variations of buttons with labels and icons.',
      },
    }
  )

  .add(
    'Label only',
    () => (
      <div>
        <IdeButton onClick={action('clicked')}>Label</IdeButton>&nbsp;
        {/* Primary. */}
        <IdeButton onClick={action('clicked')} kind="primary">
          Label
        </IdeButton>
        &nbsp;
        {/* Secondary. */}
        <IdeButton onClick={action('clicked')} kind="secondary">
          Label
        </IdeButton>
        &nbsp;
        {/* Tertiary. */}
        <IdeButton onClick={action('clicked')} kind="tertiary">
          Label
        </IdeButton>
        &nbsp;
        {/* Danger. */}
        <IdeButton onClick={action('clicked')} kind="danger">
          Label
        </IdeButton>
        &nbsp;
        {/* Ghost. */}
        <IdeButton onClick={action('clicked')} kind="ghost">
          Label
        </IdeButton>
        &nbsp;
        {/* Disabled. */}
        <IdeButton onClick={action('clicked')} disabled>
          Label
        </IdeButton>
        &nbsp;
        {/* Small. */}
        <IdeButton onClick={action('clicked')} small>
          Label
        </IdeButton>
      </div>
    ),
    {
      info: {
        text: 'Shows variations of buttons with labels only.',
      },
    }
  )

  .add(
    'Icon only',
    () => (
      <div>
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Primary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="primary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Secondary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="secondary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Tertiary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="tertiary"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Danger. */}
        <IdeButton
          onClick={action('clicked')}
          kind="danger"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Ghost. */}
        <IdeButton
          onClick={action('clicked')}
          kind="ghost"
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          hasIconOnly
        />
        &nbsp;
        {/* Disabled. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          disabled
          hasIconOnly
        />
        &nbsp;
        {/* Small. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          small
          hasIconOnly
        />
      </div>
    ),
    {
      info: {
        text: 'Shows variations of buttons with icons only.',
      },
    }
  )

  .add(
    'Animated icons',
    () => (
      <div>
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Primary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="primary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Secondary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="secondary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Tertiary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="tertiary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Danger. */}
        <IdeButton
          onClick={action('clicked')}
          kind="danger"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Ghost. */}
        <IdeButton
          onClick={action('clicked')}
          kind="ghost"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Disabled. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          disabled
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        &nbsp;
        {/* Small. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          small
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
        <br />
        <br />
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Primary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="primary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Secondary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="secondary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Tertiary. */}
        <IdeButton
          onClick={action('clicked')}
          kind="tertiary"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Danger. */}
        <IdeButton
          onClick={action('clicked')}
          kind="danger"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Ghost. */}
        <IdeButton
          onClick={action('clicked')}
          kind="ghost"
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Disabled. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
          disabled
        >
          Label
        </IdeButton>
        &nbsp;
        {/* Small. */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={RenewIcon16}
          iconDescription="Icon description"
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
          small
        >
          Label
        </IdeButton>
        <br />
        <br />
        <IdeButton
          onClick={action('clicked')}
          renderIcon={BeeIcon16}
          iconDescription="Icon description"
          hasIconOnly
          iconAnimation={text('iconAnimation', 'rotate-180-anti')}
        />
      </div>
    ),
    {
      info: {
        text: 'Shows variations of buttons with animated icons.',
      },
    }
  )

  .add(
    'Class, tabindex, type, role and ref attributes',
    () => (
      <div>
        {/* eslint-disable jsx-a11y/tabindex-no-positive */}
        <IdeButton
          onClick={action('clicked')}
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          className="custom-class"
          tabIndex={2}
          type="reset"
          role="switch"
          ref={button1Ref}
        />
        {/* eslint-enable jsx-a11y/tabindex-no-positive */}
      </div>
    ),
    {
      info: {
        text: 'Tests the ability to add custom classes, and set the tabindex, type and role attribute of the button.',
      },
    }
  )

  .add(
    'Link and arbitrary tag based buttons',
    () => (
      <div>
        {/* Link. */}
        <IdeButton
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          href="http://www.ibm.com"
        />
        &nbsp;
        {/* As. */}
        <IdeButton
          renderIcon={AddIcon16}
          iconDescription="Icon description"
          as="span"
        />
      </div>
    ),
    {
      info: {
        text: 'Tests the ability to create buttons based on <a> tags and arbitrary tags.',
      },
    }
  );
