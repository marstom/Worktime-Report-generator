import st from './CalcMain.module.scss'


const CalcMain = (props) => {



    return(
        <div>
            <h1>
                Hours calc
            </h1>

            <div className={st.container}>
                <label>Date</label>
                <input type="date"></input>
                <label>Description</label>
                <textarea></textarea>

                <label>Time</label>
                <input type="text" id={st.time}></input>
                <input type="text" id={st.time}></input>

                <input type="button" value='Add'></input>
            </div>

            <h3>day</h3>
            <div className={st.flexTable}>
                <div className={st.dayContainer}>
                    <div className={st.item}>Time</div>
                    <div className={st.item}>Description</div>
                    <div className={st.item}>Sum</div>
                </div>
                <div className={st.dayContainer}>
                    <div className={st.item}>Entyrr</div>
                    <div className={st.item}>Entyrr</div>
                    <div className={st.item}>Entyrr</div>
                </div>
            </div>
        

            <h3 className={st.item}>month</h3>
            <div>

            </div>
        </div>

    )

}


export default CalcMain;