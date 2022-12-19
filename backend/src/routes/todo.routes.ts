import { findAll, create, remove } from '../controllers/todo.controller';
module.exports = (app: any) => {


    // Create a new todo
    app.post("/todos", create);

    // Get all todos
    app.get("/todos", findAll);

    //Delete a todo
    app.delete("/todos/:id", remove)


}