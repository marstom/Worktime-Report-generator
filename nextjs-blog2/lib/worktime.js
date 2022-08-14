import { JSONDatabase } from "./database"

const db = new JSONDatabase('./lib/db/timeEntrysDb.json')

export const addWorktimeEntry = (date) => {
  console.log(date)

}

export const splitDateToNumbers = (date) => {
  const [year, month, day] = date.split('-').map(v => Number(v))
  return {year, month, day}
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

export const getTimeEntrysForDate = async (stringDate) => {
  // 2022/08/14 ie
  const data = await db.getData(`/years/${stringDate}`)
  return data
}

export const hello = () => {
  return 'hello';
}