export const changeArrayPosition = (arr, originalPosition, newPosition) => {
  let cutOut = arr.splice(originalPosition, 1)[0];
  arr.splice(newPosition, 0, cutOut);
  return arr;
};
