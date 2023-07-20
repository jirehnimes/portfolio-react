export const subtractMonths = (startDate: Date, endDate: Date): number => {
  return (
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear())
  );
};

export const getYearsFromMonths = (months: number): number =>
  Number((months / 12).toFixed(2));

export const getMonthName = (date: Date): string =>
  date.toLocaleString('en-US', { month: 'long' });
