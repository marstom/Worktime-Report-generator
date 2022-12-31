import {
  convertToApiContract,
  splitDateToNumbers,
  sumHoursAndMinutes,
} from "../worktime";

import moment from "moment";

describe("Sum to hour and minutes", () => {
  it("sums hour and minutes, two items", () => {
    let myArray = ["01:40", "03:50"];
    expect(sumHoursAndMinutes(myArray)).toEqual("5:30");
  });

  it("sums hour and minutes, two items, two zeros at the end", () => {
    let myArray = ["01:00", "01:00", "2:00", "4:00"];
    expect(sumHoursAndMinutes(myArray)).toEqual("8:00");
  });
  it("empty array", () => {
    let myArray: string[] = [];
    expect(sumHoursAndMinutes(myArray)).toEqual("0:00");
  });
  it("zero item", () => {
    let myArray = ["0:00"];
    expect(sumHoursAndMinutes(myArray)).toEqual("0:00");
  });
  it("minutes", () => {
    let myArray = ["0:01", "0:01", "0:02", "0:05"];
    expect(sumHoursAndMinutes(myArray)).toEqual("0:09");
  });
  it("partial hours", () => {
    let myArray = ["1:30", "1:15", "1:15"];
    expect(sumHoursAndMinutes(myArray)).toEqual("4:00");
  });
});

describe("Utils functions", () => {
  it("date from picker should be converted to object with ints", () => {
    const result = splitDateToNumbers("2022-08-01");
    expect(result).toEqual({ year: 2022, month: 8, day: 1 });
  });

  it("convert from raw datatabase data to api contract", () => {
    const dat = {
      14: {
        day: "Sun",
        isDayOff: false,
        entrys: {
          1: {
            description: "MY1 - workon calcualtor",
            time: "1:30",
          },
          2: {
            description: "MY2 - doing calc",
            time: "1:15",
          },
          3: {
            description: "MY3 - music",
            time: "1:15",
          },
        },
      },
      15: {
        day: "Mon",
        isDayOff: false,
        entrys: {
          1: {
            description: "dzień z Adasiem",
            time: "8:00",
          },
        },
      },
    };

    const result = convertToApiContract(dat, "08", "2022");
    console.dir(result);

    expect(result).toEqual({
      currentMonthTotalHours: "12:00",
      currentMonthExpectedHours: "0:00",
      expectedUntilNow: 8,
      currentMonth: [
        {
          id: 1,
          date: "14.08.2022",
          isDayOff: false,
          day: "Sunday",
          total: "4:00",
          entrys: [
            {
              id: "1",
              description: "MY1 - workon calcualtor",
              time: "1:30",
            },
            {
              id: "2",
              description: "MY2 - doing calc",
              time: "1:15",
            },
            {
              id: "3",
              description: "MY3 - music",
              time: "1:15",
            },
          ],
        },
        {
          id: 2,
          date: "15.08.2022",
          isDayOff: false,
          day: "Monday",
          total: "8:00",
          entrys: [
            {
              id: "1",
              description: "dzień z Adasiem",
              time: "8:00",
            },
          ],
        },
      ],
    });
  });

  it("convert from raw datatabase data to api contract Unsorted, not reversed 0x day", () => {
    const dat = {
      4: {
        isDayOff: false,
        entrys: {
          1: {
            description: "MY1 - workon calcualtor",
            time: "1:30",
          },
          2: {
            description: "MY2 - doing calc",
            time: "1:15",
          },
          3: {
            description: "MY3 - music",
            time: "1:15",
          },
        },
      },
      26: {
        isDayOff: false,
        entrys: {
          1: {
            description: "dzień z Adasiem",
            time: "8:00",
          },
        },
      },
      25: {
        isDayOff: false,
        entrys: {
          1: {
            description: "dzień z Adasiem",
            time: "8:00",
          },
        },
      },
    };

    const result = convertToApiContract(dat, "08", "2022");
    console.dir(result);

    expect(result).toEqual({
      currentMonthTotalHours: "20:00",
      currentMonthExpectedHours: "0:00",
      expectedUntilNow: 24,
      currentMonth: [
        {
          id: 1,
          date: "04.08.2022",
          isDayOff: false,
          day: "Thursday",
          total: "4:00",
          entrys: [
            {
              id: "1",
              description: "MY1 - workon calcualtor",
              time: "1:30",
            },
            {
              id: "2",
              description: "MY2 - doing calc",
              time: "1:15",
            },
            {
              id: "3",
              description: "MY3 - music",
              time: "1:15",
            },
          ],
        },
        {
          id: 2,
          date: "25.08.2022",
          isDayOff: false,
          day: "Thursday",
          total: "8:00",
          entrys: [
            {
              id: "1",
              description: "dzień z Adasiem",
              time: "8:00",
            },
          ],
        },
        {
          id: 3,
          date: "26.08.2022",
          isDayOff: false,
          day: "Friday",
          total: "8:00",
          entrys: [
            {
              id: "1",
              description: "dzień z Adasiem",
              time: "8:00",
            },
          ],
        },
      ],
    });
  });
});

describe("I can calculate time until now", () => {
  it("is show month work hours", () => {
    console.log("hellllloooo");
    let r = moment().startOf("month").fromNow();
    console.log(r);
    console.log(moment().daysInMonth());
  });
});
