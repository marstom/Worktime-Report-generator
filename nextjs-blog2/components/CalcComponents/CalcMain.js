import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";

const CalcMain = (props) => {
  const [tableData, setTableData] = useState();
  const [tableResponse, setTableResponse] = useState(); // TODO invistigate if any better communication between components solution exists - state management?

  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      //TODO pass year/month from settings, not hardcode
      const response = await fetch("/api/worktimesheet/monthly/2022/09");
      const data = await response.json();
      setTableData(data);
    };
    loadData();
  }, [tableResponse]);

  return (
    <div>
      <TimesheetForm
        setTableResponse={setTableResponse}
        tableResponse={tableResponse}
      ></TimesheetForm>
      <TimesTable tableData={tableData}></TimesTable>
    </div>
  );
};

export default CalcMain;
