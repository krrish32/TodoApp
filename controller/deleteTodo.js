const Todo = require("../models/todo");

exports.deleteTodoById = async(req,res)=>{
    try{
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);

        res.json({
            success:true,
            message:"deleted Successfully"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.response,

        })
    }
}