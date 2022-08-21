import { createConn, JSONDatabase } from "../database";

// TODO filepaths should be random, real temporary files


describe("db tests", () => {
    
    it("creates db and lookin for variables", async () => {
        console.log('....createoon')
        const db = createConn("/tmp/testdb")
        await db.push("/nazwa", "TOmek")
        await db.push("/emi", "1221")
        await db.push("/to/jest/dluga/sciezka", "Hej")
        await db.push("/emi", "---")
        
        await db.push("/liczba", 22)
        await db.push("/json", {to: {jest: ["Text", "cos", 2]}})
        await db.push("/root", "Nazwa")
        
        const data = await db.getData("/nazwa")
        
        expect(data).toEqual("TOmek")
        
        const data2 = await db.getData("/")
        console.log(data2)
        
        const data3 = await db.getData("/to/jest/dluga")
        console.log(data3)
        expect(data3).toEqual({ sciezka: 'Hej' })
    })
    
    it("creates db and lookin using abstraction", async () => {
        const database = new JSONDatabase('/tmp/testdb_class')
        await database.saveData("/day/monday", "1:20")
        let data = await database.getData("/day")
        expect(data).toEqual({monday: "1:20"})
        
        data = await database.getData("/")
        expect(data).toEqual({day: {monday: "1:20"}})
        
        
        await database.delete('/day/monday')
        data = await database.getData("/")
        
        expect(data).toEqual({day: {}})
        
        await database.delete('/day')
        data = await database.getData("/")
        
        expect(data).toEqual({})
        
        
    })

    it("does manipulation on the list", async () => {
        const database = new JSONDatabase('/tmp/workcalc/testdb_class')
        await database.saveData("/listKey", [1,2,3,4,5])
        await database.saveData("/listKey[]", "dodane")
        await database.saveData("/listKey[]", "nowe")
        await database.saveData("/listKey[]", "itemy")
        expect(await database.getData("/listKey[1]")).toEqual(2)

    })


    it("prepares timetable db", async () => { 
        const database = new JSONDatabase('/tmp/workcalc/worktime_sketch2')

        let currentMonth;
        let currentDay;
        currentMonth = "/years/2022/01"
        currentDay = currentMonth + "/01"
        await database.saveData(currentDay + "/day", "Sun")
        await database.saveData(currentDay + "/entrys/1", {description:"MY2 - doing calc", time:"0:20"})
        await database.saveData(currentDay + "/entrys/2", {description:"MY2 - doing calc", time:"0:30"})

        currentMonth = "/years/2022/08"
        currentDay = currentMonth + "/14"
        await database.saveData(currentDay + "/day", "Sun")
        await database.saveData(currentDay + "/entrys/1", {description:"MY1 - workon calcualtor", time:"1:30"})
        await database.saveData(currentDay + "/entrys/2", {description:"MY2 - doing calc", time:"1:15"})
        await database.saveData(currentDay + "/entrys/3", {description:"MY3 - music", time:"1:15"})
        currentDay = currentMonth + "/15"
        await database.saveData(currentDay + "/day", "Mon")
        await database.saveData(currentDay + "/entrys/1", {description:"dzień z Adasiem", time:"8:00"})

        const data = await database.getData("/")
        expect(data).toEqual(
            {
                "years": {
                    "2022": {
                        "01": {
                            "01": {
                                "day": "Sun",
                                "entrys": {
                                    "1": {
                                        "description": "MY2 - doing calc",
                                        "time": "0:20"
                                    },
                                    "2": {
                                        "description": "MY2 - doing calc",
                                        "time": "0:30"
                                    }
                                }
                            }
                        },
                        "08": {
                            "14": {
                                "day": "Sun",
                                "entrys": {
                                    "1": {
                                        "description": "MY1 - workon calcualtor",
                                        "time": "1:30"
                                    },
                                    "2": {
                                        "description": "MY2 - doing calc",
                                        "time": "1:15"
                                    },
                                    "3": {
                                        "description": "MY3 - music",
                                        "time": "1:15"
                                    }
                                }
                            },
                            "15": {
                                "day": "Mon",
                                "entrys": {
                                    "1": {
                                        "description": "dzień z Adasiem",
                                        "time": "8:00"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        )
    })
})

