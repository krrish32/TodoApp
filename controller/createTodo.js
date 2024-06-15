//import the model
const Todo = require("../models/todo");

//define route handler
exports.createTodo = async(req,res)=>{
    try{
        //extract title and desc from request
        const {title,description} = req.body;

        //create a new todo object and insert in the db
        const response = await Todo.create({title,description});

        //send a json response with success flag
        res.status(200).json({
            success:true,
            data:response,
            message: "Data Created Successfully"
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal Server Error",
            message:err.message
        })
    }
}