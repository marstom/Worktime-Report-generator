import st from "./CalcMain.module.scss";

import { useEffect, useState } from "react";
import axios from "axios";

const TimesheetForm = (props) => {
  const [id, setId] = useState();
  const [date, setDate] = useState();
  const [descripton, setDescription] = useState();
  const [timeHh, setTimeHh] = useState();
  const [timeMm, setTimeMm] = useState();

  useEffect(() => {}, [props.tableResponse]);

  const addModifyClick = async () => {
    const apiRequest = {
      id,
      date,
      descripton,
      time: `${timeHh}:${timeMm}`,
    };
    const response = await axios.post("api/save_worktime_entry", apiRequest);
    props.setTableResponse(response.data);
  };

  const deleteClick = async () => {
    const apiRequest = {
      id,
      date,
    };
    const response = await axios.delete("api/delete_worktime_entry", {
      data: { ...apiRequest },
    });
    props.setTableResponse(response.data);
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
            <input
              onClick={deleteClick}
              type="button"
              className={st.delete}
              value="Delete"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetForm;
