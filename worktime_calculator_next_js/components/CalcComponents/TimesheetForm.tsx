import React, { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import st from "./CalcMain.module.scss";
import { FormDataFromEntryType, TableResponseType } from "./types";

type Props = {
  setIdForm(id: string | undefined): void;
  setTableResponse(tableResponse: TableResponseType | undefined): void;
  formDataFromEntry: FormDataFromEntryType | undefined;
  tableResponse: TableResponseType | undefined;
  idForm: string | undefined;
};

const TimesheetForm: React.FC<Props> = (props) => {
  const [id, setId] = useState<string>();
  const [date, setDate] = useState<string>();
  const [descripton, setDescription] = useState<string>();
  const [timeHh, setTimeHh] = useState<string>();
  const [timeMm, setTimeMm] = useState<string>();
  const [isDayOff, setIsDayOff] = useState<boolean>();

  const idRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const mmRef = useRef<HTMLInputElement>(null);
  const hhRef = useRef<HTMLInputElement>(null);
  const isDayOffRef = useRef<HTMLInputElement>(null);

  const changeDateAction = (date: string): void => {
    setDate(date);
    console.log("date:", date);
    const uid = uuidv4();
    idRef!.current!.value = uid;
    setId(uid);
  };

  useEffect(() => {
    console.log("Id form changed...");
    props.setIdForm(id);
  }, [idRef.current ? idRef.current.value : null]);
  useEffect(() => {
    console.log("Component table clicked an data:");
    // console.log(props.formDataFromEntry['id'])
    setId(props.formDataFromEntry ? props.formDataFromEntry.id : "");
    setDate(
      (dateRef!.current!.value = props.formDataFromEntry
        ? props.formDataFromEntry.date
        : ""),
    );
    setDescription(
      (descriptionRef!.current!.value = props.formDataFromEntry
        ? props.formDataFromEntry.description
        : ""),
    );
    const [hh, mm] = props.formDataFromEntry
      ? props.formDataFromEntry.time.split(":")
      : ["", ""];
    setTimeMm(mm);
    setTimeHh(hh);
    setIsDayOff(
      // @ts-ignore
      props.formDataFromEntry ? props.formDataFromEntry.isDayOff : "",
    );

    idRef!.current!.value = props.formDataFromEntry
      ? props.formDataFromEntry.id
      : "";
    dateRef!.current!.value = props.formDataFromEntry
      ? props.formDataFromEntry.date
      : "";
    descriptionRef!.current!.value = props.formDataFromEntry
      ? props.formDataFromEntry.description
      : "";
    mmRef!.current!.value = mm;
    hhRef!.current!.value = hh;
    // @ts-ignore
    isDayOffRef.current.checked = props.formDataFromEntry
      ? props.formDataFromEntry.isDayOff
      : "";
  }, [props.formDataFromEntry]);

  const addModifyClick = async () => {
    const apiRequest = {
      id,
      date,
      descripton,
      time: `${timeHh}:${timeMm}`,
      isDayOff: isDayOff,
    };
    const response = await axios.post("api/save_worktime_entry", apiRequest);
    props.setTableResponse(response.data);
  };

  const newEntryClick = async () => {
    const uid = uuidv4();
    idRef!.current!.value = uid;
    setId(uid);
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
            <input
              ref={idRef}
              onChange={(e) => setId(e.target.value)}
              type="text"
            ></input>
          </div>
        </div>

        <div className={st.row}>
          <div className={st.col_25}>
            <label>Date</label>
          </div>
          <div className={st.col_75}>
            <input
              ref={dateRef}
              onChange={(e) => changeDateAction(e.target.value)}
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
              ref={descriptionRef}
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
              ref={hhRef}
              onChange={(e) => setTimeHh(e.target.value)}
              type="text"
              id={st.time}
            ></input>
            <input
              ref={mmRef}
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
              onClick={newEntryClick}
              type="button"
              value="New hash"
            ></input>
            <input
              onClick={deleteClick}
              type="button"
              className={st.delete}
              value="Delete"
            ></input>
            <input
              ref={isDayOffRef}
              type="checkbox" // @ts-ignore
              onClick={(e) => setIsDayOff(e.target.checked)}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimesheetForm;
