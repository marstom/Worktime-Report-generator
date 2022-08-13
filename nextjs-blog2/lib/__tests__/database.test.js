import { createConn } from "../database";



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
})

