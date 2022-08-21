import st from "./CalcMain.module.scss";
import classnames from 'classnames'


const TimesTable = (props) => {

  const isWeekend = (entry) => {
    console.log(entry.day)
    return ["Saturday", "Sunday"].includes(entry.day)
  }

  return (
    <>
      <h3>day</h3>
      <table className={st.table}>
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
                <tr key={`${day.id} ${entry.id}`} 
                  className={classnames({
                    [st.row]: true,
                    [st.row_gray]: isWeekend(day)
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
        <button className={st.primary}>Printable version</button>
      </table>

      <h3 className={st.item}>month</h3>
      <div>
        <div>Expected at the end: {props.tableData && props.tableData.currentMonthExpectedHours}</div>
        <div>Expected until now: {props.tableData && props.tableData.expectedUntilNow} </div>
        <div>Current total: {props.tableData && props.tableData.currentMonthTotalHours} </div>
      </div>
    </>
  );
};

export default TimesTable;
