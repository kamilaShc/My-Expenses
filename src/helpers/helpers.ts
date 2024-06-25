const arrayRange = (start: number, stop: number, step: number) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );

export const getYears = () => {
  const currentYear = new Date().getFullYear();
  return arrayRange(1800, currentYear, 1).sort((a, b) => b - a);
};
