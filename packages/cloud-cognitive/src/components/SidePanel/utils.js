export const changeArrayPosition = (arr, originalPosition, newPosition) => {
  const newArr = [...arr];
  const cutOut = newArr.splice(originalPosition, 1)[0];
  newArr.splice(newPosition, 0, cutOut);
  return newArr;
};
