const express = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo, getTodoById} = require("../controller/getAllTodos");
const {deleteTodoById} = require("../controller/deleteTodo");
const {updateTodoById}= require("../controller/updateTodo");


//define api routes
router.post("/createTodo", createTodo);
router.get("/getAllTodo",getTodo);
router.get("/getTodoById/:id",getTodoById);
router.delete("/deleteTodoById/:id",deleteTodoById);
router.put("/updateTodoById/:id",updateTodoById);



module.exports = router;