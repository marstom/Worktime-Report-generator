import CalcLayout from "../components/CalcComponents/calcLayout";
import CalcMain from "../components/CalcComponents/CalcMain";

// import {getSortedPostsData } from "../lib/posts"
import { getTimeEntryForDay } from '../lib/worktime';
const HoursCalc = (props) => {
  return (
    <CalcLayout>
      <CalcMain calcInitialData={props.fromApi} timeEntryExample={props.timeEntryExample} />
    </CalcLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getTimeEntryForDay();
  console.log("on load");
  const res = await fetch("http://localhost:3000/api/worktimes_list");
  const json = await res.json();
  console.log(res);
  return {
    props: { fromApi: json, timeEntryExample: data },
  };
}



export default HoursCalc;
