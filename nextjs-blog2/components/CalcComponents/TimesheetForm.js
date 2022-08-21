import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";

const TimesheetForm = (props) => {
  const [id, setId] = useState();
  const [date, setDate] = useState();
  const [descripton, setDescription] = useState();
  const [timeHh, setTimeHh] = useState();
  const [timeMm, setTimeMm] = useState();

  useEffect(() => {});

  const addModifyClick = () => {
    const apiRequest = {
      id,
      date,
      descripton,
      time: `${timeHh}:${timeMm}`,
    };
    console.log(apiRequest);
  };

  return (
    <div>
      <h1 className={st.header}>Hours calc</h1>

      <div className={st.form_container}>
        <div className={st.row}>
          <div className={st.col_25}>
            <label>ID: </label>
          </div>
          <div className={st.col_75}>
            <input onChange={(e) => setId(e.target.value)} type="text"></input>
          </div>
        </div>

        <div className={st.row}>
          <div className={st.col_25}>
            <label>Date</label>
          </div>
          <div className={st.col_75}>
            <input
              onChange={(e) => setDate(e.target.value)}
              type="date"
            ></input>
          </div>
        </div>

        <div className={st.row}>
          <div className={st.col_25}>
            <label>Description: </label>
          </div>
          <div className={st.col_75}>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={st.row}>
          <div className={st.col_25}>
            <label>Time: </label>
          </div>
          <div className={st.col_75}>
            <input
              onChange={(e) => setTimeHh(e.target.value)}
              type="text"
              id={st.time}
            ></input>
            <input
              onChange={(e) => setTimeMm(e.target.value)}
              type="text"
              id={st.time}
            ></input>
          </div>
        </div>

        <div className={st.row}>
          <div className={st.col_25}>
            <input
              onClick={addModifyClick}
              type="button"
              value="Add / Modify"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetForm;
