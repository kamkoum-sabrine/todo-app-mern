import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: Number, required: true },
    status: { type: String, required: true },
});

todoSchema.plugin(mongoosePaginate)
const Todo = mongoose.model("Todo", todoSchema)
export default Todo;