export type TableDataType = {
  currentMonthTotalHours: string;
  currentMonthExpectedHours: string;
  expectedUntilNow: number;
  currentMonth: MonthType[];
};

export type MonthType = {
  id: number;
  isDayOff: string;
  date: string;
  day: string;
  total: string;
  entrys: MonthEntry[];
};

export type MonthEntry = {
  id: string;
  description: string;
  time: string;
};

export type SettingsJsonType = {
  debug: boolean;
  currentYear: string;
  currentMonth: string;
  activeDatabaseName: string;
  yearsSettings: YearSettings;
};

export type YearSettings = {
  [yearKey: string]: {
    [dayKey: string]: {
      workDays: number;
      workHours: number;
      daysOff: number;
    };
  };
};

export type TableResponseType = {
  message: string;
  data: {
    id: string;
    date: string;
    descripton: string;
    time: string;
    isDayOff: boolean;
  };
};

export type FormDataFromEntryType = {
  date: string;
  isDayOff: boolean;
  id: string;
  description: string;
  time: string;
};
