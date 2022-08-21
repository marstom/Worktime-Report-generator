import { JSONDatabase } from "../database"
import { readEntryForDay } from "../worktimeReadModel"
import { writeEntryToDay } from "../worktimeWriteModel"

describe("dataformat from date form on real database test", () => {
    it("api format", () => {
        const apiRequestDesign = {
            "id": "1",
            "date": "2022-08-21",
            "descripton": "To jest opis",
            "time": "1:30"
        }

        const databaseEntryFormat = {}
    })

    it("write an entry to database, new entry", async () => {
        const apiRequestDesign = {
            "id": "1",
            "date": "2022-08-21",
            "descripton": "To jest opis",
            "time": "1:30"
        }
        const database = new JSONDatabase('/tmp/workcalc/worktime_sketch')
        const id = apiRequestDesign.id
        const date = apiRequestDesign.date
        const descripton = apiRequestDesign.descripton
        const time = apiRequestDesign.time
        await writeEntryToDay(database, id, date, descripton, time)
        const readedData = await readEntryForDay(database, "1", date)
        expect(readedData).toEqual({"descripton": "To jest opis", "time": "1:30" })

    })
})