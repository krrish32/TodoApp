const Todo = require("../models/todo");

exports.getTodo = async(req, res)=>{
    try{
        const response = await Todo.find({});
        res.status(200).json({
            success:true,
            data:response,
            message:"Entire Todo data is fetched"
        })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.response,
            message:"Server error"
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract todo by Id
        const id = req.params.id;
        const response = await Todo.findById({_id:id});
        
        //Id is not exist in given data
        if(!response){
            res.status(404).json({
                success:false,
                message:"Data Not Found"
            })
        }

        //Found the data
        else{
            res.status(200).json({
                success:true,
                data:response,
                message: "Data found Successfully"
            })
        }

    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.response,
            message:"Internal Server Error"
        })

    }
}