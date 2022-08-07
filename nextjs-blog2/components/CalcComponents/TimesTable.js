import st from "./CalcMain.module.scss";
import { useEffect, useState } from "react";

const TimesTable = (props) => {
  const [resp, setResp] = useState();

  useEffect(() => {
    console.log("on load");
    const resolve = async () => {
      const res = await fetch("/api/worktimes_list");
      const json = await res.json();
      setResp(json);
    };
    resolve();
    console.log(resp);
    console.log(props.fromApi);
  }, []);

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
          {resp &&
            resp.currnetMonth.map((day) => {
              return day.entrys.map((entry) => (
                <tr key={`${day.id} ${entry.id}`} className={st.row}>
                  <td className={st.info}>{entry.id}</td>
                  <td>{entry.id === 1 ? day.date : ""}</td>
                  <td>{entry.description}</td>
                  <td>{entry.time}</td>
                  <td>{entry.id === 1 ? day.total : ""}</td>
                </tr>
              ));
            })}
        </tbody>
        <button className={st.primary}>Printable version</button>
      </table>

      <h3 className={st.item}>month</h3>
      <div>
        <div>Expected at the end: {resp && resp.expected}</div>
        <div>Expected until now: {resp && resp.expectedUntilNow} </div>
        <div>Current total: {resp && resp.total} </div>
      </div>
    </>
  );
};

export default TimesTable;
