import st from "./CalcMain.module.scss";
import { useEffect, useState } from "react";
import TimesTable from "./TimesTable";
import TimesheetForm from "./TimesheetForm";
import {
  FormDataFromEntryType,
  SettingsJsonType,
  TableDataType,
  TableResponseType,
} from "./types";

type Props = {};

type SettingsData = {
  currentMonthExpectedHours: number;
};

const CalcMain: React.FC<Props> = (props) => {
  const [tableData, setTableData] = useState<TableDataType>();
  const [settingsData, setSettingsData] = useState<SettingsData>();
  const [tableResponse, setTableResponse] = useState<TableResponseType>();
  const [formDataFromEntry, setFormDataFromEntry] =
    useState<FormDataFromEntryType>();

  const [idForm, setIdForm] = useState<number>();
  const [idTable, setIdTable] = useState<number>();
  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      const responseSettings = await fetch("/api/worktimesheet/settings");
      const settingsJson: SettingsJsonType = await responseSettings.json();
      const response = await fetch(
        `/api/worktimesheet/monthly/${settingsJson.currentYear}/${settingsJson.currentMonth}`,
      );
      const monthlyDataJson = await response.json();
      setTableData(monthlyDataJson);
      const currentYear: string = settingsJson["currentYear"];
      const currentMonth: string = settingsJson["currentMonth"];
      setSettingsData({
        currentMonthExpectedHours:
          settingsJson["yearsSettings"][currentYear][currentMonth]["workHours"],
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
