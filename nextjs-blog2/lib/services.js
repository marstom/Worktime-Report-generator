import writeEntryToDay from "./worktimeWriteModel";

import prodDb from "./prodDb";

export class SaveWorktimeEntryService {
  constructor(database) {
    this.database = database | prodDb;
  }

  // constructor(){
  // this.database = prodDb;
  // }

  saveWorktimeEntry(worktimeEntryRequestData) {
    validateWorktimeEntry(worktimeEntryRequestData);
    writeEntryToDay(
      this.database,
      worktimeEntryRequestData.id,
      worktimeEntryRequestData.date,
      worktimeEntryRequestData.description,
      worktimeEntryRequestData.time
    );
  }

  worktimeEntryRequestData(worktimeEntryRequestData) {
    // TODO
  }
}
