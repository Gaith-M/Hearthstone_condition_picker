import { conditionInterface } from "../interface";

const getRandomNum = (len: number) => {
  return Math.floor(Math.random() * len);
};

// The main function: choose a random object from the provided array. if type arg is supplied, choose from the elements which match the type arg
export const chooseCondition = (
  arr: conditionInterface[],
  condition: string | null,
  type: string | null
) => {
  let match: conditionInterface;

  if (type && condition) {
    const filtered = arr.filter(
      (item) => item.type === type && item.condition !== condition
    );
    const randomNumber = getRandomNum(filtered.length);
    match = filtered[randomNumber];
  } else if (type && condition === null) {
    const filtered = arr.filter((item) => item.type === type);
    const randomNumber = getRandomNum(filtered.length);
    match = filtered[randomNumber];
  } else {
    const randomNumber = getRandomNum(arr.length);
    match = arr[randomNumber];
  }

  if (match.variety && match.options) {
    const randomNumber = getRandomNum(match.options.length);
    return `${match.condition} ${match.options[randomNumber]}`;
  } else {
    return match.condition;
  }
};
