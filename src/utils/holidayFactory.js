import * as datefns from 'date-fns';

const createNewYears = (year) => new Date(year, 0, 1);

const createMLK = (year) => {
  const date = new Date(year, 0, 1);
  if (datefns.getDay(date) === 1) return datefns.addWeeks(date, 2);
  else {
    let nextMonday = datefns.nextMonday(date);
    for (let i = 1; i < 3; i++) {
      nextMonday = datefns.nextMonday(nextMonday);
    }
    return nextMonday;
  }
};

const createValentines = (year) => new Date(year, 1, 14);

const createPresidents = (year) => {
  const date = new Date(year, 1, 1);
  if (datefns.getDay(date) === 1) return datefns.addWeeks(date, 2);
  else {
    let nextMonday = datefns.nextMonday(date);
    for (let i = 1; i < 3; i++) {
      nextMonday = datefns.nextMonday(nextMonday);
    }
    return nextMonday;
  }
};

const createEaster = (year) => {
  const goldenNumbers = {
    0: { month: 2, date: 27 },
    1: { month: 3, date: 14 },
    2: { month: 3, date: 3 },
    3: { month: 2, date: 23 },
    4: { month: 3, date: 11 },
    5: { month: 2, date: 31 },
    6: { month: 3, date: 18 },
    7: { month: 3, date: 8 },
    8: { month: 2, date: 28 },
    9: { month: 3, date: 16 },
    10: { month: 3, date: 5 },
    11: { month: 2, date: 25 },
    12: { month: 3, date: 13 },
    13: { month: 3, date: 2 },
    14: { month: 2, date: 22 },
    15: { month: 3, date: 10 },
    16: { month: 2, date: 30 },
    17: { month: 3, date: 17 },
    18: { month: 3, date: 7 },
    19: { month: 2, date: 27 },
  };
  const dividedByYearResult = Math.floor(year / 19);
  const multipliedByresult = dividedByYearResult * 19;
  const goldenNumber = year - multipliedByresult + 1;
  return datefns.nextSunday(
    new Date(
      year,
      goldenNumbers[goldenNumber].month,
      goldenNumbers[goldenNumber].date
    )
  );
};

const createMothers = (year) => {
  const date = new Date(year, 4, 1);
  if (datefns.getDay(date) === 0) return datefns.addWeeks(date, 1);
  else {
    let nextSunday = datefns.nextSunday(date);
    for (let i = 1; i < 2; i++) {
      nextSunday = datefns.nextSunday(nextSunday);
    }
    return nextSunday;
  }
};
const createFathers = (year) => {
  const date = new Date(year, 5, 1);
  if (datefns.getDay(date) === 0) return datefns.addWeeks(date, 2);
  else {
    let nextSunday = datefns.nextSunday(date);
    for (let i = 1; i < 3; i++) {
      nextSunday = datefns.nextSunday(nextSunday);
    }
    return nextSunday;
  }
};

const createMemorial = (year) => {
  const date = datefns.lastDayOfMonth(new Date(year, 4, 1));
  if (datefns.getDay === 1) return date;
  else return datefns.previousMonday(date);
};

const createIndependance = (year) => new Date(year, 6, 4);

const createLabor = (year) => {
  const date = new Date(year, 8, 1);
  if (datefns.getDay(date) === 1) return date;
  else return datefns.nextMonday(date);
};

const createColumbus = (year) => {
  const date = new Date(year, 9, 1);
  if (datefns.getDay(date) === 1) return datefns.addWeeks(date, 1);
  else {
    let nextMonday = datefns.nextMonday(date);
    for (let i = 1; i < 2; i++) {
      nextMonday = datefns.nextMonday(nextMonday);
    }
    return nextMonday;
  }
};

const createHalloween = (year) => new Date(year, 9, 31);

const createThanksgiving = (year) => {
  const date = new Date(year, 10, 1);
  if (datefns.getDay(date) === 4) return datefns.addWeeks(date, 3);
  else {
    let nextThursday = datefns.nextThursday(date);
    for (let i = 1; i < 4; i++) {
      nextThursday = datefns.nextThursday(nextThursday);
    }
    return nextThursday;
  }
};

const createChristmas = (year) => new Date(year, 11, 25);

const createNewYearsEve = (year) => new Date(year, 11, 31);

const holidayFactory = (year, month) => {
  const holidays = [
    {
      title: 'New Years Day',
      singleDate: createNewYears(year),
    },
    {
      title: 'MLK Day',
      singleDate: createMLK(year),
    },
    {
      title: 'Valentines Day',
      singleDate: createValentines(year),
    },
    {
      title: "Presidents' Day",
      singleDate: createPresidents(year),
    },
    {
      title: 'Easter',
      singleDate: createEaster(year),
    },
    {
      title: "Mother's Day",
      singleDate: createMothers(year),
    },
    {
      title: "Fathers's Day",
      singleDate: createFathers(year),
    },
    {
      title: 'Memorial Day',
      singleDate: createMemorial(year),
    },
    {
      title: 'Independance Day',
      singleDate: createIndependance(year),
    },
    {
      title: 'Labor Day',
      singleDate: createLabor(year),
    },
    {
      title: 'Columbus Day',
      singleDate: createColumbus(year),
    },
    {
      title: 'Halloween',
      singleDate: createHalloween(year),
    },
    {
      title: 'Thanksgiving',
      singleDate: createThanksgiving(year),
    },
    {
      title: 'Christmas',
      singleDate: createChristmas(year),
    },
    {
      title: "New Year's Eve",
      singleDate: createNewYearsEve(year),
    },
  ];

  return holidays.filter(
    (holiday) => (month === 'all') | (month === holiday.month)
  );
};

export default holidayFactory;
