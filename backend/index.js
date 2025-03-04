import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import cors from "cors"
import { TodoModel } from './models/TodoSchema.js';
import todoRoutes from "./routes/todoRoutes.js"

dotenv.config();
connectDB()


const app = express()
const port = process.env.PORT || 3001

app.use(express.json());
app.use(cors({origin: "http://localhost:5173"}))

// Routes
app.use('/todos',todoRoutes );



app.listen(port, () => {
  console.log(`listening on port http://localhost:${ port }`)
})