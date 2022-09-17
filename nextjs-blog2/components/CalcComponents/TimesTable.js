import st from "./CalcMain.module.scss";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const TimesTable = (props) => {
  const router = useRouter();

  useEffect(() => {
    console.log("Table has been loaded........");
  }, []);

  const isWeekend = (entry) => {
    return ["Saturday", "Sunday"].includes(entry.day);
  };

  const isDayOff = (entry) => {
    return entry;
  };

  const goToPrintable = () => {
    router.push("/workcalc/print");
  };

  const editEntry = (entry, day) => {
    // console.log(entry);
    // console.log(day);
    console.warn("ENTRYE EQUAL", props.idForm);
    const [dd, mm, yyyy] = day.date.split(".");
    const inputFormattedDate = `${yyyy}-${mm}-${dd}`;
    const entryAllData = {
      date: inputFormattedDate,
      isDayOff: day.isDayOff,
      ...entry,
    };
    // console.log(entryAllData);
    // TODO {id: '1', description: 'taksi', time: '01:01'} - easy, only fill form - howto? communicate between components?
    props.setFormDataFromEntry(entryAllData);
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
              return day.entrys.map((entry, index) => (
                <tr
                  onClick={() => editEntry(entry, day)}
                  key={`${day.id} ${entry.id}`}
                  className={classnames({
                    [st.row]: true,
                    [st.row_gray]: isWeekend(day) | (day.isDayOff === true),
                    [st.row_red]: props.idForm === entry.id,
                  })}
                >
                  <td className={st.info}>{entry.id}</td>
                  <td>{index === 0 ? day.date : ""}</td>
                  <td>{entry.description}</td>
                  <td>{entry.time}</td>
                  <td>{index === 0 ? day.total : ""}</td>
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
          {props.settingsData && props.settingsData.currentMonthExpectedHours}
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
