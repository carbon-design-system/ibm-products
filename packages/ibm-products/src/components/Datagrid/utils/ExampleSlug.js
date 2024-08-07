/* eslint-disable react/prop-types */
/**
 * Copyright IBM Corp. 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

//cspell: disable
import React from 'react';
import { FolderOpen, View, Folders } from '@carbon/react/icons';
import {
  unstable__Slug as Slug,
  unstable__SlugContent as SlugContent,
  unstable__SlugActions as SlugActions,
  IconButton,
  Button,
} from '@carbon/react';

export const ExampleSlug = ({ align = 'bottom-right', ...rest }) => (
  <Slug className="slug-container" autoAlign={false} align={align} {...rest}>
    <SlugContent>
      <div>
        <p className="secondary">AI Explained</p>
        <h1>84%</h1>
        <p className="secondary bold">Confidence score</p>
        <p className="secondary">
          Lorem ipsum dolor sit amet, di os consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut fsil labore et dolore magna aliqua.
        </p>
        <hr />
        <p className="secondary">Model type</p>
        <p className="bold">Foundation model</p>
      </div>
      <SlugActions>
        <IconButton kind="ghost" label="View">
          <View />
        </IconButton>
        <IconButton kind="ghost" label="Open Folder">
          <FolderOpen />
        </IconButton>
        <IconButton kind="ghost" label="Folders">
          <Folders />
        </IconButton>
        <Button>View details</Button>
      </SlugActions>
    </SlugContent>
  </Slug>
);
