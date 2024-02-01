/**
 * Copyright IBM Corp. 2024, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const svgPaths = {
  unknown: `M8 3.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 
            2-4.5 4.5-4.5M8 2C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7
            6-6-2.7-6-6-6z`,
  benign: `M 0,8 A 8,8 0 1,1 16,8 A 8,8 0 1,1 0,8 Z`,
  low: `M 14.00,2.00 C 14.00,2.00 14.00,14.00 14.00,14.00 14.00,14.00 
        2.00,14.00 2.00,14.00 2.00,14.00 2.00,2.00 2.00,2.00 2.00,2.00
        14.00,2.00 14.00,2.00 Z`,
  medium: `M 8.00,1.00 C 8.00,1.00 15.00,8.00 15.00,8.00 15.00,8.00 
           8.00,15.00 8.00,15.00 8.00,15.00 1.00,8.00 1.00,8.00
           1.00,8.00 8.00,1.00 8.00,1.00 Z`,
  high: `M8 2l7 11H1z`,
  critical: `M14 2v12H2z`,
};

const getIcon = (score, thresholds) => {
  let magnitude = 'Unknown';

  if (typeof score === 'number') {
    if (score <= thresholds[0]) {
      magnitude = 'Benign';
    } else if (score < thresholds[1]) {
      magnitude = 'Low';
    } else if (score < thresholds[2]) {
      magnitude = 'Medium';
    } else if (score < thresholds[3]) {
      magnitude = 'High';
    } else if (score >= thresholds[3]) {
      magnitude = 'Critical';
    }
  }

  const path = magnitude.toLowerCase();

  return { svgPath: svgPaths[path], magnitude };
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

export { getIcon, truncate };
