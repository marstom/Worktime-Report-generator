import CalcLayout from "../components/CalcComponents/calcLayout";
import CalcMain from "../components/CalcComponents/CalcMain";

// import {getSortedPostsData } from "../lib/posts"
import { getTimeEntryForDay } from "../lib/worktime";
const HoursCalc = (props) => {
  return (
    <CalcLayout>
      <CalcMain
        calcInitialData={props.fromApi}
        timeEntryExample={props.timeEntryExample}
      />
    </CalcLayout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getTimeEntryForDay();
  return {
    props: { fromApi: { testData: "test" }, timeEntryExample: data },
  };
}

export default HoursCalc;
