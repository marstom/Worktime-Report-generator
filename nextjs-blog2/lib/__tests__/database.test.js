import { createConn, JSONDatabase } from "../database";



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


    it("prepares timetable db", async () => { 
        const database = new JSONDatabase('/tmp/worktime_sketch')

        const currentMonth = "/years/2022/08"
        await database.saveData(currentMonth + "/id", 1)
        await database.saveData(currentMonth + "/day", "Sat")
        await database.saveData(currentMonth + "/entrys", [])

    })
})

