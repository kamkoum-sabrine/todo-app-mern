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
    const role = new Todo(req.body);
    role.save((err, role) => {
        if (err) res.status(500).send(err)

        else res.send(role)
    })


};
