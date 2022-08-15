import { convertToApiContract, splitDateToNumbers } from "../worktime";


describe("Utils functions", () => {
  it("date from picker should be converted to object with ints", () => {
    const result = splitDateToNumbers('2022-08-01')
    expect(result).toEqual({ year: 2022, month: 8, day: 1 });
    
  })
  
  
  it("convert from raw datatabase data to api contract", () => {
    const dat = {
      "14": {
        "day": "Sun",
        "entrys": {
          "1": {
            "description": "MY1 - workon calcualtor",
            "time": "1:30"
          },
          "2": {
            "description": "MY2 - doing calc",
            "time": "1:15"
          },
          "3": {
            "description": "MY3 - music",
            "time": "1:15"
          }
        }
      },
      "15": {
        "day": "Mon",
        "entrys": {
          "1": {
            "description": "dzień z Adasiem",
            "time": "8:00"
          }
        }
      }
    }
    
    const result = convertToApiContract(dat, "08", "2022")
    console.dir(result)
    
    /*
    expect(result).toEqual({
      currentMonth: [
        {
          id: 1,
          date: "14.08.2022",
          day: "Saturday",
          total: "4:00",
          entrys: [
            {
              id: "1",
              description: "MY1 - workon calcualtor",
              time: "1:30"
            },
            {
              id: "2",
              description: "MY2 - doing calc",
              time: "1:15"
            },
            {
              id: "3",
              description: "MY3 - music",
              time: "1:15"
            },
          ]
        },
        {
          id: 2,
          date: "15.08.2022",
          day: "Sunday",
          total: "8:00",
          entrys: [
            {
              id: "1",
              description: "dzień z Adasiem",
              time: "8:00"
            },
          ]
        }
      ]
    })
    */
    
  })
})

