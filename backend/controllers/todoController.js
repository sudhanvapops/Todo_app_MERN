import {TodoModel} from "../models/TodoSchema.js"

const test = (req,res)=>{
    return res.json({"Message": "Ok","StatusCode": 200})
}



const addTodo = async (req,res)=>{


    try {
        
        // Validate 
        const {todo,isCompleted} = req.body
        
        if (typeof todo !== "string" || typeof isCompleted !== "boolean" ){
            return res.json({error: "Invalid Request Data Add"}).status(400)
        }

        // Creating new Todo
        const result = await TodoModel.create({todo: todo ,isCompleted : isCompleted})

        console.log(result);

        return res.json({"Message":"Success","data":result}).status(201)

    } catch (error) {
        console.error("Error adding todo:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}



const updateTodo = async (req,res) =>{

    const {todoMsg} = req.body
    const { id } = req.params

    if (typeof todoMsg !== "string" || typeof id !== "string"){
        return res.json({error: "Invalid Request Data Updation"}).status(400)
    }

    try {
        const result = await TodoModel.updateOne({_id: id},{
            $set : { todo: todoMsg }
        })
    
        console.log(result);
    
        res.json({
            "Message": "Updated",
            "Result": result
        }).status(201)  
    } catch (error) {
        console.error("Error Updating todo:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}



const deleteTodo = async (req,res)=>{

    try {
        const {id} = req.params

        if (typeof id !== "string"){
            return res.json({error: "Invalid Request ID Delete"}).status(400)
        }
    
        let result = await TodoModel.deleteOne({_id: id})
        console.log(result)
    
        return res.json({"Message": "Deleted Record","Result":result}).status(200)
    } catch (error) {
        console.log("Error Deleting Backend",error);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}



const allDocs = async (req,res)=>{

   try {
     let result = await TodoModel.find({})
     console.log(result)
     return res.json(result).status(200);
   } catch (error) {
        console.log("Error Fetching Records Backend",error);
        return res.status(500).json({ error: "Internal Server Error" });
   }

}



const toggleisCompleted = async (req,res)=>{

    const {id} = req.params
    const {isCompleted} = req.body


    try {

        if (typeof isCompleted !== "boolean" || typeof id !== "string"){
            return res.json({error: "Invalid Data Toggle"}).status(400)
        }

        let result = await TodoModel.updateOne({_id: id},{
            $set : {
                isCompleted: isCompleted
            }
        })
    
        console.log(result)
    
        return res.json({"Message": "Toggled Record","Result":result}).status(200)
    
    } catch (error) {
        console.log("Error Toggling",error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



export {test,addTodo,updateTodo,deleteTodo,allDocs,toggleisCompleted}