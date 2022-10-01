import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";

const CalcMain = (props) => {
  const [tableData, setTableData] = useState();
  const [settingsData, setSettingsData] = useState();
  const [tableResponse, setTableResponse] = useState(); // TODO invistigate if any better communication between components solution exists - state management?
  const [formDataFromEntry, setFormDataFromEntry] = useState();

  const [idForm, setIdForm] = useState();
  const [idTable, setIdTable] = useState();
  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      //TODO pass year/month from settings, not hardcode
      const responseSettings = await fetch("/api/worktimesheet/settings");
      const settingsData = await responseSettings.json();
      const response = await fetch(
        `/api/worktimesheet/monthly/${settingsData.currentYear}/${settingsData.currentMonth}`,
      );
      const data = await response.json();
      setTableData(data);
      const currentYear = settingsData["currentYear"];
      const currentMonth = settingsData["currentMonth"];
      setSettingsData({
        currentMonthExpectedHours:
          settingsData["yearsSettings"][currentYear][currentMonth]["workHours"],
      });
    };
    loadData();
  }, [tableResponse]);

  return (
    <div>
      <TimesheetForm
        setTableResponse={setTableResponse}
        tableResponse={tableResponse}
        formDataFromEntry={formDataFromEntry}
        setIdForm={setIdForm}
        idForm={idForm}
      ></TimesheetForm>
      <TimesTable
        tableData={tableData}
        setFormDataFromEntry={setFormDataFromEntry}
        settingsData={settingsData}
        setIdTable={setIdTable}
        idForm={idForm}
      ></TimesTable>
    </div>
  );
};

export default CalcMain;
