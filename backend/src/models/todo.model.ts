import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate"

let todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    priority: { type: String, required: true }, //HIGH, MEDIUM,  LOW
    status: { type: Number, required: true, default: 0 },//0 => INPROGRESS, 1 => DONE
});

todoSchema.plugin(mongoosePaginate)
const Todo = mongoose.model("Todo", todoSchema)
export default Todo;