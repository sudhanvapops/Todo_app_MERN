import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    date: {
        type: Number
    },
    todo: {
        type: String
    },
    isCompleted: Boolean
})


export const TodoModel = mongoose.model("Todo",TodoSchema,"Todo_App_Improved")