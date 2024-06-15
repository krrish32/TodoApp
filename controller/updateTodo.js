const Todo = require("../models/todo")

exports.updateTodoById = async(req,res)=>{

    try{
        const {id} = req.params;
        const {title,description} = req.body;
        const response = await Todo.findByIdAndUpdate({_id:id},
            {title,description,updatedAt:Date.now()}
        );

        if(!response){
            res.status(404).json({
                success:false,
                message: "Data not found"
            })
        }

        else{
            res.status(200).json({
                success:true,
                data:response,
                message:"data updated successfully"
            })
        }
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