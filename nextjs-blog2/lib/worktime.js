
export const getWorktimes = () => {


    return {
        currnetMonth:
            [

                {
                    id: 1,
                    date: '01.08.2022',
                    day: 'Mon',
                    description: "some",
                    time: "0:20"
                },
                {
                    id: 2,
                    date: '',
                    day: '',
                    description: "tom-100 wor on backend",
                    time: "1:40"
                },
                {
                    id: 3,
                    date: '',
                    day: '',
                    description: "tom-222 this is some longer descriptn - asdf asef aaa.",
                    time: "1:40"
                },
                {
                    id: 4,
                    date: '02.08.2022',
                    day: 'Tue',
                    description: "Coffe",
                    time: "0:20"
                },
            ],
        expected:168,
        expectedUntilNow: 40,
        current: 5
        
    }
    

}