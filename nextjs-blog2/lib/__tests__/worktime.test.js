import { splitDateToNumbers } from "../worktime";


describe("Utils functions", () => {
  it("date from picker should be converted to object with ints", () => {
    const result = splitDateToNumbers('2022-08-01')
    expect(result).toEqual({ year: 2022, month: 8, day: 1 });

  })
})

