import { useState, useEffect } from "react";
import PrintableTimesTable from "../../components/CalcComponents/PrintableTimesTable";

type Props = {
  fromApi: object;
  timeEntryExample: object;
};

const HoursCalc: React.FC<Props> = (props) => {
  const [tableData, setTableData] = useState();
  const [tableResponse, setTableResponse] = useState(); // TODO invistigate if any better communication between components solution exists - state management?

  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      const responseSettings = await fetch("/api/worktimesheet/settings");
      const settingsJson = await responseSettings.json();
      const response = await fetch(
        `/api/worktimesheet/monthly/${settingsJson.currentYear}/${settingsJson.currentMonth}`,
      );
      const data = await response.json();
      setTableData(data);
    };
    loadData();
  }, [tableResponse]);

  return (
    <>
      <PrintableTimesTable tableData={tableData}></PrintableTimesTable>
    </>
  );
};

export default HoursCalc;
