import { writeEntryToDay, deleteEntry } from "./worktimeWriteModel";
import { JSONDatabase } from "./database";

type RequestData = {
  id: string;
  date: string;
  descripton: string;
  time: string;
  isDayOff: boolean;
};

type EntryData = {
  id: string;
  date: string;
};

export class SaveWorktimeEntryService {
  database: JSONDatabase;

  constructor(database: JSONDatabase) {
    this.database = database;
  }

  async saveWorktimeEntry(worktimeEntryRequestData: RequestData) {
    this.validateWorktimeEntry(worktimeEntryRequestData);
    await writeEntryToDay(
      this.database,
      worktimeEntryRequestData.id,
      worktimeEntryRequestData.date,
      worktimeEntryRequestData.descripton,
      worktimeEntryRequestData.time,
      worktimeEntryRequestData.isDayOff,
    );
  }

  async deleteWorktimeEntity(entryData: EntryData) {
    console.log("----entity data-------------------------");
    console.log(entryData);
    console.log(entryData.id);
    // TODO bug bo jest 04 a nie 4
    await deleteEntry(this.database, entryData.date, entryData.id);
  }

  validateWorktimeEntry(entryData: EntryData) {}
}
