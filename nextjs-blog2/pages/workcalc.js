import CalcLayout from "../components/calcLayout";
import CalcMain from "../components/CalcMain";



const HoursCalc = (props) => {
    return (
        <CalcLayout>
            <CalcMain calcInitialData={props.fromApi}/>
        </CalcLayout>
    )
}

export async function getStaticProps({ params }) {
    console.log("on load")
    const res= await fetch('http://localhost:3000/api/worktimes_list')
    const json = await res.json()
    console.log(res)
    return {
        props: {fromApi: json}
    }

}

export default HoursCalc;