import { findAll, create, remove, findOne } from '../controllers/todo.controller';
module.exports = (app: any) => {


    // Create a new todo
    app.post("/todos", create);

    // Get all todos
    app.get("/todos", findAll);

    //Delete a todo
    app.delete("/todos/:id", remove)

    //Get todo by id
    app.get("/todos/:id", findOne)


}