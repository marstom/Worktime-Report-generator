import db from "./prodDb";

export const splitDateToNumbers = (date: string) => {
  const [year, month, day] = date.split("-").map((v) => Number(v));
  return { year, month, day };
};

export const sumHoursAndMinutes = (timeArray: Array<string>) => {
  let hours: number = 0;
  let minutes: number = 0;
  const f = (n: number): string => {
    return n > 9 ? "" + n : "0" + n;
  };

  for (let i in timeArray) {
    const [hh, mm] = timeArray[i].split(":");
    hours += parseInt(hh);
    minutes += parseInt(mm);
  }

  if (minutes > 59) {
    /* @ts-ignore */
    hours += parseInt(minutes / 60); /* @ts-ignore */
    minutes = parseInt(minutes % 60);
  }
  return hours + ":" + f(minutes);
};

export const getTimeEntryForDay = async () => {
  const data = await db.getData("/years/2022/08/14");
  return JSON.stringify(data);
};

export const getTimeEntrysForDate = async (stringDate: string) => {
  const data = await db.getData(`/years/${stringDate}`);
  return data;
};

const zeroPad = (num: number | string, places: number): string =>
  String(num).padStart(places, "0");

type EntryDay = {
  time: string;
  description: string;
};
// TODO move to commont types module
type ValueData = {
  id: string;
  date: string;
  descripton: string;
  time: string;
  isDayOff: boolean;
  entrys: EntryDay[];
};

/*
Per day entrys on api are here:
http://localhost:3000/api/worktimesheet/monthly/2022/08
*/
export const convertToApiContract = (
  perDayEntrys: any,
  month: string,
  year: string,
) => {
  const totalHoursArray: Array<string> = [];
  const res: any = {
    currentMonthTotalHours: "0:00",
    currentMonthExpectedHours: "0:00",
    expectedUntilNow: 0,
    currentMonth: [],
  };

  Object.entries<ValueData>(perDayEntrys).forEach(([day, v], index: number) => {
    let totalAmountPerDay = "0:00";
    let timesArray: Array<string> = [];
    let data = {
      id: index + 1,
      isDayOff: v.isDayOff,
      date: `${zeroPad(day, 2)}.${month}.${year}`,
      day: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date(`${year}-${month}-${day}`),
      ),
      total: totalAmountPerDay,
      entrys: Object.entries(v.entrys).map((e: any): any => {
        timesArray.push(e[1].time);
        return {
          id: e[0],
          description: e[1].description,
          time: e[1].time,
        };
      }),
    };
    data.total = sumHoursAndMinutes(timesArray);
    totalHoursArray.push(data.total);
    res.currentMonth.push(data);
    console.log(data);
    if (
      data.day !== "Sunday" &&
      data.day !== "Saturday" &&
      !data.isDayOff &&
      data.entrys.length > 0
    ) {
      res.expectedUntilNow += 8;
    }
  });
  res.currentMonthTotalHours = sumHoursAndMinutes(totalHoursArray);
  return res;
};

export const calculateTimeUntilNow = () => {};
