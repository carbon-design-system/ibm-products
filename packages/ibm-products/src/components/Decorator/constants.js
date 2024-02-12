/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const getMagnitude = (score, thresholds) => {
  if (typeof score === 'number') {
    if (score <= thresholds[0]) {
      return 'Benign';
    }
    if (score < thresholds[1]) {
      return 'Low';
    }
    if (score < thresholds[2]) {
      return 'Medium';
    }
    if (score < thresholds[3]) {
      return 'High';
    }
    if (score >= thresholds[3]) {
      return 'Critical';
    }
  }

  return 'Unknown';
};

const truncate = (inputText, maxLength, front, back) => {
  let truncatedText = inputText;
  if (inputText.length > maxLength) {
    truncatedText = `${inputText.substring(0, front)}…${inputText.substr(
      inputText.length - back
    )}`;
  }
  return truncatedText;
};

export { getMagnitude, truncate };
