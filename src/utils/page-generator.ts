import { Page } from "../interfaces/chapter";

const URL = import.meta.env.VITE_IMG_URL;
export const pageGenerator = (
  array: Page[],
  firstPAge: number,
  lastPage: number,
  doubleArray: number[]
): any[] => {
  let j = 1;
  for (let i = firstPAge; i <= lastPage; i++) {
    const isDouble = doubleArray.includes(i);
    array.push({
      imageUrl: `${URL}${i}.png`,
      pageNumber: j,
      isDoublePage: isDouble,
    });
    j++;
  }
  return array;
};
