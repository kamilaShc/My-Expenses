import { AUTHOR_LENGTH, TITLE_LENGTH } from "../constants";

const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  return arrayRange(1800, currentYear, 1).sort((a, b) => b - a);
};

export const validateTitle = (title: string) => {
  if (title.length > TITLE_LENGTH) {
    return `${title.substring(0, TITLE_LENGTH)}...`;
  }
  return title;
};

export const validateAuthor = (author: string) => {
  if (author.length > AUTHOR_LENGTH) {
    return `${author.substring(0, AUTHOR_LENGTH)}...`;
  }
  return author;
};
