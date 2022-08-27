import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";

const CalcMain = (props) => {
  const [tableData, setTableData] = useState();

  const [tableResponse, setTableResponse] = useState();

  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      const response = await fetch("/api/worktimesheet/monthly/2022/08");
      const data = await response.json();
      setTableData(data);
    };
    loadData();
  }, [tableResponse]);

  const addModifyClick = () => {};

  // TODO
  // when I post data using TimesheetForm, I refresh TimesTable!
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
