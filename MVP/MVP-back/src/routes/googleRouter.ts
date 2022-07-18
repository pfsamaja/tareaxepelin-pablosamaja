import { Router } from "express"
import { sheetService, updateTasa } from "../services/googleService"
const googleRouter = Router()


googleRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    const response = await sheetService(id)
    res.json(response)
}
)
googleRouter.patch("/update", async (req, res) => {
    const { rowId, tasa, sheetId } = req.body
    const response = await updateTasa(rowId, tasa, sheetId)
    res.json(response)
})

    export default googleRouter