import { Book } from "./useBooks";

const useYears = (books: Book[]) => {
  const yearSet = new Set<number>();
  books.forEach((b) => {
    if (b.first_publish_year) yearSet.add(b.first_publish_year);
  });
  return Array.from(yearSet).sort((a, b) => b - a);
};

export default useYears;
