import st from "./CalcPrint.module.scss";
import classnames from "classnames";
import { useState, useEffect } from "react";
import { MonthType } from "./types";

type Props = {};

const PrintableTimesTable: React.FC<Props> = (props) => {
  const isWeekend = (entry: MonthType) => {
    return ["Saturday", "Sunday"].includes(entry.day);
  };

  const [footer, setFooter] = useState<Array<any>>([]);

  useEffect(() => {
    const loadData = async () => {
      const responseSettings = await fetch("/api/worktimesheet/settings");
      const settingsData = await responseSettings.json();
      const footer = settingsData["footer"];
      console.log(footer);
      setFooter(footer);
    };
    loadData();
  }, []);

  const renderFooter = () => {
    return footer.forEach((el) => <div>{el}</div>);
  };

  return (
    <>
      <div className={st.main_content}>
        <table className={st.table} cellSpacing="0" border={1}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Time</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {props.tableData &&
              props.tableData.currentMonth.map((day) => {
                return day.entrys.map((entry, index) => (
                  <tr
                    key={`${day.id} ${entry.id}`}
                    className={classnames({
                      [st.row]: true,
                      [st.row_gray]: isWeekend(day) | (day.isDayOff === true),
                    })}
                  >
                    <td>{index === 0 ? day.date : ""}</td>
                    <td>{entry.description}</td>
                    <td>{entry.time}</td>
                    <td>{index === 0 ? day.total : ""}</td>
                  </tr>
                ));
              })}
          </tbody>
        </table>
      </div>
      <div>
        <pre>
          Całkowity czas:{" "}
          {props.tableData && props.tableData.currentMonthTotalHours} <hr></hr>
          {footer && footer.map((foot) => <div>{foot}</div>)}
        </pre>
      </div>
    </>
  );
};

export default PrintableTimesTable;
