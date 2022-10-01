import CalcLayout from "../components/CalcComponents/calcLayout";
import CalcMain from "../components/CalcComponents/CalcMain";
import useUser from "lib/useUser";

// import {getSortedPostsData } from "../lib/posts"
import { getTimeEntryForDay } from "../lib/worktime";
import { GetStaticProps } from "next";

type Props = {
  fromApi: object;
  timeEntryExample: object;
};

const HoursCalc: React.FC<Props> = (props) => {
  const { user } = useUser({
    redirectTo: "/login",
    redirectIfFound: false,
  });

  if (user ? !user.isLoggedIn : false) return <div>Please login</div>;

  return (
    <CalcLayout>
      <CalcMain
        calcInitialData={props.fromApi}
        timeEntryExample={props.timeEntryExample}
      />
    </CalcLayout>
  );
};

export async function getStaticProps() {
  const data = await getTimeEntryForDay();
  return {
    props: { fromApi: { testData: "test" }, timeEntryExample: data },
  };
}

export default HoursCalc;
