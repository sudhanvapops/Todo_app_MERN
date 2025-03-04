import express from "express"
import { test,addTodo, updateTodo, deleteTodo, toggleisCompleted,allDocs } from "../controllers/index.js"


const router = express.Router()


router.get("/test",test)

router.get("/fetch",allDocs)
router.post("/add",addTodo)
router.patch("/update/:id",updateTodo)
router.patch("/toggle/:id",toggleisCompleted)
router.delete("/delete/:id",deleteTodo)

export default router