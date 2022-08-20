import { JSONDatabase } from "./database"

const db = new JSONDatabase('./lib/db/timeEntrysDb.json')

export const addWorktimeEntry = (date) => {
  console.log(date)
  
}

export const splitDateToNumbers = (date) => {
  const [year, month, day] = date.split('-').map(v => Number(v))
  return {year, month, day}
}



export const sumHoursAndMinutes = (timeArray) => {
  let hours = 0;
  let minutes = 0;
  const f = (n) => {
    return n > 9 ? "" + n: "0" + n;
  }
  
  for(let i in timeArray){
    const [hh, mm] = timeArray[i].split(":")
    hours += parseInt(hh)
    minutes += parseInt(mm)
  }
  
  if(minutes > 59){
    hours += parseInt(minutes / 60);
    minutes = parseInt(minutes % 60);
  }
  return hours + ":" + f(minutes);
  
  
}

export const getWorktimes = () => {
  return {
    currnetMonth: [
      {
        id: 1,
        date: "01.08.2022",
        day: "Mon",
        total: "8:00",
        entrys: [
          {
            id: 1,
            date: "01.08.2022",
            day: "Mon",
            description: "some",
            time: "0:20",
          },
          {
            id: 2,
            date: "",
            day: "",
            description: "tom-100 wor on backend",
            time: "1:40",
          },
          {
            id: 3,
            date: "",
            day: "",
            description:
            "tom-222 this is some longer descriptn - asdf asef aaa.",
            time: "1:40",
          },
        ],
      },
      {
        id: 2,
        date: "02.08.2022",
        day: "Tue",
        total: "8:00",
        entrys: [
          {
            id: 1,
            description: "Coffe",
            time: "2:20",
          },
          {
            id: 2,
            description: "Cocoa",
            time: "1:30",
          },
        ],
      },
    ],
    expected: 168,
    expectedUntilNow: 40,
    total: 5,
  };
};


export const getTimeEntryForDay = async () => {
  const data = await db.getData('/years/2022/08/14')
  return JSON.stringify(data)
}

// TODO adjust to contract when it's day
export const getTimeEntrysForDate = async (stringDate) => {
  // 2022/08/14 ie
  const data = await db.getData(`/years/${stringDate}`)
  return data
}

/*

Per day entrys on api are here:

http://localhost:3000/api/worktimesheet/monthly/2022/08
*/
export const convertToApiContract = (perDayEntrys, month, year) => {
  const totalHoursArray = []
  const res = {
    currentMonthTotalHours: "0:00",
    currentMonthExpectedHours: "0:00",
    currentMonth: []
  }
  
  Object.entries(perDayEntrys).forEach(([day, v], index) => {
    let totalAmountPerDay = "0:00"
    let timesArray = []
    let data= {
        id: index+1,
        date: `${day}.${month}.${year}`,
        day: new Intl.DateTimeFormat("en-US", {weekday: 'long'}).format(new Date(`${year}-${month}-${day}`)),
        total: totalAmountPerDay,
        entrys: Object.entries(v.entrys).map(e => {
          timesArray.push(e[1].time)
          return {
            id:e[0],
            description: e[1].description,
            time: e[1].time,
          }
        })
      }
      data.total = sumHoursAndMinutes(timesArray)
      totalHoursArray.push(data.total)
      res.currentMonth.push(data)
    });
    res.currentMonthTotalHours = sumHoursAndMinutes(totalHoursArray)
    return res
  }

  export const hello = () => {
    return 'hello';
  }