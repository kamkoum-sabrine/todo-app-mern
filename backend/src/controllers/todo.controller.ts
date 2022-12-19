import console from 'console';
import { Request, Response } from 'express';
import Todo from "../models/todo.model";


export const findAll = (req: Request, res: Response) => {
    const search = req.query.search || '';
    const page: number = parseInt(req.query.page?.toString() || '1');
    const size: number = parseInt(req.query.size?.toString() || '5');

    Todo.paginate({
        message: { $regex: ".*(?i)" + search + ".*" },
        subject: { $regex: ".*(?i)" + search + ".*" }
    }, { page: page, limit: size }, (err: any, role: any) => {
        if (err) res.status(500).send(err);
        else res.send(role);
    });

};
// create
export const create = (req: Request, res: Response) => {
    console.log(req.body);
    const todo = new Todo(req.body);
    todo.save((err, todo) => {
        if (err) res.status(500).send(err)

        else res.send(todo)
    })


};

//delete
export const remove = (req: Request, res: Response) => {
    Todo.findById(req.params.id, (err: any, todo: any) => {
        if (err) return res.status(500).send(err);
        else if (!todo) return res.status(404).send("Todo not found");
        else {
            todo.remove((err: any) => {
                if (err) return res.status(500).send(err);
                else return res.status(200).send(todo);
            });
        }
    }
    )
};

// find todo by id
export const findOne = (req: Request, res: Response) => {
    Todo.findById(req.params.id, (err: Error, todo: any) => {
        if (err) return res.status(500).send(err);
        else if (!todo) return res.status(404).send("Todo not found");
        else return res.status(200).send(todo);
    })
};

