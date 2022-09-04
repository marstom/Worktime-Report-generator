import st from "./CalcMain.module.scss";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";

const TimesTable = (props) => {
  const router = useRouter();

  const isWeekend = (entry) => {
    return ["Saturday", "Sunday"].includes(entry.day);
  };

  const isDayOff = (entry) => {
    return entry;
  };

  const goToPrintable = () => {
    router.push("/workcalc/print");
  };

  const editEntry = (entry) => {
    console.log(entry);
    // TODO {id: '1', description: 'taksi', time: '01:01'} - easy, only fill form - howto? communicate between components?
  };

  return (
    <>
      <h3>day</h3>

      <table className={st.table} cellSpacing="0" border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
            <th>Time</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData &&
            props.tableData.currentMonth.map((day) => {
              return day.entrys.map((entry) => (
                <tr
                  onClick={() => editEntry(entry)}
                  key={`${day.id} ${entry.id}`}
                  className={classnames({
                    [st.row]: true,
                    [st.row_gray]: isWeekend(day) | (day.isDayOff === true),
                  })}
                >
                  <td className={st.info}>{entry.id}</td>
                  <td>{entry.id === "1" ? day.date : ""}</td>
                  <td>{entry.description}</td>
                  <td>{entry.time}</td>
                  <td>{entry.id === "1" ? day.total : ""}</td>
                </tr>
              ));
            })}
        </tbody>
      </table>
      <button onClick={goToPrintable} className={st.primary}>
        Printable version
      </button>

      <h3 className={st.item}>month</h3>
      <div>
        <div>
          Expected at the end:{" "}
          {props.tableData && props.tableData.currentMonthExpectedHours}
        </div>
        <div>
          Expected until now:{" "}
          {props.tableData && props.tableData.expectedUntilNow}{" "}
        </div>
        <div>
          Current total:{" "}
          {props.tableData && props.tableData.currentMonthTotalHours}{" "}
        </div>
      </div>
    </>
  );
};

export default TimesTable;
