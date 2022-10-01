import { useState, useEffect } from "react";
import PrintableTimesTable from "../../components/CalcComponents/PrintableTimesTable";

const HoursCalc = (props) => {
  const [tableData, setTableData] = useState();
  const [tableResponse, setTableResponse] = useState(); // TODO invistigate if any better communication between components solution exists - state management?

  useEffect(() => {
    const loadData = async () => {
      console.log("fethcing months ....");
      //TODO pass year/month from settings, not hardcode, settings exisis, settings endpoint should give us this!
      const response = await fetch("/api/worktimesheet/monthly/2022/09");
      const data = await response.json();
      setTableData(data);
    };
    loadData();
  }, [tableResponse]);

  return (
    <>
      {/* <CalcMain */}
      {/* calcInitialData={props.fromApi} */}
      {/* timeEntryExample={props.timeEntryExample} */}
      {/* /> */}
      <PrintableTimesTable tableData={tableData}></PrintableTimesTable>
    </>
  );
};

export default HoursCalc;
