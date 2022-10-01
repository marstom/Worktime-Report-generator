import { writeEntryToDay, deleteEntry } from "./worktimeWriteModel";

import prodDb from "./prodDb";

export class SaveWorktimeEntryService {
  constructor(database) {
    if (database) {
      this.database = database;
    } else {
      this.database = prodDb;
    }
  }

  // constructor(){
  // this.database = prodDb;
  // }

  async saveWorktimeEntry(worktimeEntryRequestData) {
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

  async deleteWorktimeEntity(entryData) {
    console.log("----entity data-------------------------");
    console.log(entryData);
    console.log(entryData.id);
    // TODO bug bo jest 04 a nie 4
    await deleteEntry(this.database, entryData.date, entryData.id);
  }

  validateWorktimeEntry(entryData) {}
}
