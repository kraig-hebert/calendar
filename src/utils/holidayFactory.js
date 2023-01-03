const createNewYears = (year) => new Date(year, 0, 1);
const createMLK = (year) => new Date();

const holidayFactory = (year, month) => {
  const holidays = [
    {
      title: 'New Years Day',
      month: 'January',
      singleDate: createNewYears(year).toJSON(),
    },
  ];

  return holidays.filter(
    (holiday) => (month === 'all') | (month === holiday.month)
  );
};

export default holidayFactory;
