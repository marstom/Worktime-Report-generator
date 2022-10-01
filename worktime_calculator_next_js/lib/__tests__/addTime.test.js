import { JSONDatabase } from "../database";
import { readEntryForDay } from "../worktimeReadModel";
import { writeEntryToDay, deleteEntry } from "../worktimeWriteModel";

describe("dataformat from date form on real database test", () => {
  it("api format", () => {
    const apiRequestDesign = {
      id: "1",
      date: "2022-08-21",
      descripton: "To jest opis",
      time: "1:30",
    };

    const databaseEntryFormat = {};
  });

  it("write an entry to database, new entry", async () => {
    const apiRequestDesign = {
      id: "1",
      date: "2022-08-21",
      descripton: "To jest opis",
      time: "1:30",
    };
    const database = new JSONDatabase("/tmp/workcalc/worktime_sketch3");
    const id = apiRequestDesign.id;
    const date = apiRequestDesign.date;
    const descripton = apiRequestDesign.descripton;
    const time = apiRequestDesign.time;
    await writeEntryToDay(database, id, date, descripton, time);
    const readedData = await readEntryForDay(database, "1", date);
    expect(readedData).toEqual({ description: "To jest opis", time: "01:30" });
  });

  it("write an entry to database, new entry, minute is 1 digit", async () => {
    const apiRequestDesign = {
      id: "1",
      date: "2022-08-21",
      descripton: "To jest opis",
      time: "1:3",
    };
    const database = new JSONDatabase("/tmp/workcalc/worktime_sketch3");
    const id = apiRequestDesign.id;
    const date = apiRequestDesign.date;
    const descripton = apiRequestDesign.descripton;
    const time = apiRequestDesign.time;
    await writeEntryToDay(database, id, date, descripton, time);
    const readedData = await readEntryForDay(database, "1", date);
    expect(readedData).toEqual({ description: "To jest opis", time: "01:03" });
  });

  it("Given write an entry to database, When delete entry from db, Then entry not exists", async () => {
    const apiRequestDesign = {
      id: "1",
      date: "2022-08-21",
      descripton: "To jest opis",
      time: "1:30",
      isDayOff: false,
    };
    const database = new JSONDatabase("/tmp/workcalc/worktime_sketch4");
    const id = apiRequestDesign.id;
    const date = apiRequestDesign.date;
    const descripton = apiRequestDesign.descripton;
    const time = apiRequestDesign.time;
    const isDayOff = apiRequestDesign.isDayOff;
    await writeEntryToDay(database, id, date, descripton, time, isDayOff);
    let readedData = await readEntryForDay(database, "1", date);
    expect(readedData).toEqual({ description: "To jest opis", time: "01:30" });
    await deleteEntry(database, date, id);
    readedData = await database.getData("/years/2022/08/21");
    expect(readedData).toEqual({ isDayOff: false, entrys: {} });
  });
});
