import { JSONDatabase } from "./database";
import db from "./prodDb";

export const addWorktimeEntry = (date) => {};

export const splitDateToNumbers = (date) => {
  const [year, month, day] = date.split("-").map((v) => Number(v));
  return { year, month, day };
};

export const sumHoursAndMinutes = (timeArray) => {
  let hours = 0;
  let minutes = 0;
  const f = (n) => {
    return n > 9 ? "" + n : "0" + n;
  };

  for (let i in timeArray) {
    const [hh, mm] = timeArray[i].split(":");
    hours += parseInt(hh);
    minutes += parseInt(mm);
  }

  if (minutes > 59) {
    hours += parseInt(minutes / 60);
    minutes = parseInt(minutes % 60);
  }
  return hours + ":" + f(minutes);
};

export const getTimeEntryForDay = async () => {
  const data = await db.getData("/years/2022/08/14");
  return JSON.stringify(data);
};

export const getTimeEntrysForDate = async (stringDate) => {
  const data = await db.getData(`/years/${stringDate}`);
  return data;
};

const zeroPad = (num, places) => String(num).padStart(places, "0");

/*
Per day entrys on api are here:
http://localhost:3000/api/worktimesheet/monthly/2022/08
*/
export const convertToApiContract = (perDayEntrys, month, year) => {
  const totalHoursArray = [];
  const res = {
    currentMonthTotalHours: "0:00",
    currentMonthExpectedHours: "0:00",
    currentMonth: [],
  };

  Object.entries(perDayEntrys).forEach(([day, v], index) => {
    let totalAmountPerDay = "0:00";
    let timesArray = [];
    let data = {
      id: index + 1,
      isDayOff: v.isDayOff,
      date: `${zeroPad(day, 2)}.${month}.${year}`,
      day: new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
        new Date(`${year}-${month}-${day}`),
      ),
      total: totalAmountPerDay,
      entrys: Object.entries(v.entrys).map((e) => {
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
  });
  res.currentMonthTotalHours = sumHoursAndMinutes(totalHoursArray);
  return res;
};

export const calculateTimeUntilNow = () => {};
