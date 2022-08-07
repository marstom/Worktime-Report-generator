import { splitDateToNumbers } from "../worktime";


describe("mySuite", () => {
  it("should do it ", () => {
    const result = splitDateToNumbers('2022-08-01')
    expect(result).toEqual({ year: 2022, month: 8, day: 1 });

  })
})

