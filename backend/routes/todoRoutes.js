import express from "express"
import { test,addTodo, updateTodo, deleteTodo, toggleisCompleted,allDocs } from "../controllers/index.js"


const router = express.Router()


router.get("/test",test)

router.get("/fetch",allDocs)
router.post("/add",addTodo)
router.patch("/update/:date",updateTodo)
router.patch("/toggle/:date",toggleisCompleted)
router.delete("/delete/:date",deleteTodo)

export default router