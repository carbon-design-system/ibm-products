/**
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useContext } from 'react';
import { ConditionBuilderContext } from '../ConditionBuilderContext/ConditionBuilderProvider';
import { translationsObject } from '../ConditionBuilderContext/translationObject';

export const useTranslations = (translationKeys) => {
  const { translateWithId } = useContext(ConditionBuilderContext);

  return translationKeys.map((translationKey) =>
    translateWithId?.(translationKey)
      ? translateWithId(translationKey)
      : translationsObject[translationKey]
      ? translationsObject[translationKey]
      : translationKey
  );
};
