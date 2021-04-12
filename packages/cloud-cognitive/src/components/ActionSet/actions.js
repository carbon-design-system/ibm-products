/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const actionsOptions = [0, 1, 2, 3, 4, 5, 6, 7];

export const actionsLabels = {
  0: 'None',
  1: 'One button',
  2: 'One ghost button',
  3: 'Two buttons',
  4: 'Two buttons including one ghost',
  5: 'Three buttons',
  6: 'Three buttons including one ghost',
  7: 'Four buttons including one ghost',
};

export const actionsMapping = (labels, action) => {
  const act = (label, kind) => {
    const actionCall = action && action(`Click on '${label}'`);
    return {
      label,
      kind,
      onClick:
        actionCall &&
        ((evt) => {
          evt.persist();
          actionCall(evt);
        }),
    };
  };
  const primary = act(labels?.primary ?? 'Primary button', 'primary');
  const secondary = act(labels?.secondary ?? 'Secondary button', 'secondary');
  const secondary2 = act(labels?.secondary2 ?? 'Secondary button', 'secondary');
  const ghost = act(labels?.ghost ?? 'Ghost button', 'ghost');

  return {
    0: [],
    1: [primary],
    2: [ghost],
    3: [primary, secondary],
    4: [primary, ghost],
    5: [primary, secondary, secondary2],
    6: [primary, secondary, ghost],
    7: [primary, secondary, secondary2, ghost],
  };
};
