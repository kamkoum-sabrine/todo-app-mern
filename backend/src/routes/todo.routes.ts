import { findAll, create, remove, findOne, update, changeTodoStatus, getUnfinishedTodo } from '../controllers/todo.controller';
module.exports = (app: any) => {


    // Create a new todo
    app.post("/todos", create);

    // Get all todos
    app.get("/todos", findAll);

    //Delete a todo
    app.delete("/todos/:id", remove)

    //Get todo by id
    app.get("/todos/find/:id", findOne)

    //update todo
    app.put("/todos/:id", update)

    //change todo status
    app.put("/todos/changeStatus/:id", changeTodoStatus)


    //get unfinished todo 
    app.get("/todos/unfinished", getUnfinishedTodo)


}