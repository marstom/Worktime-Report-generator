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
            <table className={st.table}>
                <thead>

                    <tr>
                        <th>Description</th>
                        <th>Time</th>
                        <th>Total</th>
                    </tr>
                </thead>
            <tbody>
                <tr className={st.row}>
                    <td>Alfreds Futterkiste</td>
                    <td>2:00</td>
                    <td>8:00</td>
                </tr>
                <tr className={st.row}>
                    <td>bot-11 add button asdf dsa fadsf af fd a</td>
                    <td>2:00</td>
                    <td></td>
                </tr>
            </tbody>
            </table>
        

            <h3 className={st.item}>month</h3>
            <div>
                <div>Expected at the end: </div>
                <div>Expected until now: </div>
                <div>Current: </div>

            </div>
        </div>

    )

}


export default CalcMain;