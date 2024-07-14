import { Page } from "../interfaces/chapter";

const URL = import.meta.env.VITE_IMG_URL;
const URL_PART2 = import.meta.env.VITE_IMG_PART2_URL;

export const pageGenerator = (
  array: Page[],
  firstPAge: number,
  lastPage: number,
  doubleArray: number[],
  usePart2?: boolean
): any[] => {
  let j = 1;
  for (let i = firstPAge; i <= lastPage; i++) {
    const isDouble = doubleArray.includes(i);
    array.push({
      imageUrl: usePart2 ? `${URL_PART2}${i}.png` : `${URL}${i}.png`,
      pageNumber: j,
      isDoublePage: isDouble,
    });
    j++;
  }
  return array;
};
