import st from "./CalcMain.module.scss";
import classnames from "classnames";

const PrintableTimesTable = (props) => {
  const isWeekend = (entry) => {
    return ["Saturday", "Sunday"].includes(entry.day);
  };

  return (
    <>
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
      <div>
        <div>
          Całkowity czas:{" "}
          {props.tableData && props.tableData.currentMonthTotalHours}{" "}
        </div>
        <div>Kwota brutto: 0.00000</div>
        <div>Kwota netto: 0.00000</div>
        <div>Dodatek za media + VAT: 172.00</div>
      </div>
    </>
  );
};

export default PrintableTimesTable;
