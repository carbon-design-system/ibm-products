//
// Copyright IBM Corp. 2020, 2020
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//

export const copyToClipboard = (event, content) => {
  const field = document.createElement('textarea');
  event.currentTarget.parentNode.appendChild(field);

  field.textContent = content;
  field.select();
  document.execCommand('copy');

  event.currentTarget.parentNode.removeChild(field);
};

export const copyContentToClipboard = (content) => {
  return (event) => copyToClipboard(event, content);
};
