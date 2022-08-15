import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";

const CalcMain = (props) => {

  const [tableData, setTableData] = useState();

  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....")
      const response = await fetch("/api/worktimesheet/monthly/2022/08")
      const data = await response.json()
      setTableData(data)
    }
    loadData()
  }, [])

  const addModifyClick = () => {};

  return (
    <div>
      <TimesheetForm></TimesheetForm>
      <TimesTable></TimesTable>

    <div>{props.timeEntryExample}</div>
    <hr/>
    <div>{JSON.stringify(tableData)}</div>
    </div>
  );
};

export default CalcMain;
