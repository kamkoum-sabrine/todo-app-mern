import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, required: true }, //1 => HIGH, 2 => MEDIUM, 3 => LOW
    status: { type: Number, required: true },//0 => INPROGRESS, 1 => DONE
});

todoSchema.plugin(mongoosePaginate)
const Todo = mongoose.model("Todo", todoSchema)
export default Todo;