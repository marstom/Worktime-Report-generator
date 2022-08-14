import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";

const CalcMain = (props) => {
  const addModifyClick = () => {};

  return (
    <div>
      <TimesheetForm></TimesheetForm>
      <TimesTable></TimesTable>

    <div>{props.timeEntryExample}</div>
    </div>
  );
};

export default CalcMain;
