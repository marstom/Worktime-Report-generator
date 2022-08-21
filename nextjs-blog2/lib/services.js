import writeEntryToDay from "./worktimeWriteModel";

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

  saveWorktimeEntry(worktimeEntryRequestData) {
    this.validateWorktimeEntry(worktimeEntryRequestData);
    writeEntryToDay(
      this.database,
      worktimeEntryRequestData.id,
      worktimeEntryRequestData.date,
      worktimeEntryRequestData.descripton,
      worktimeEntryRequestData.time,
    );
  }

  validateWorktimeEntry(worktimeEntryRequestData) {
    // TODO
  }
}
