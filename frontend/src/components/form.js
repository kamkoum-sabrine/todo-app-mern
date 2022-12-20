import { Component } from 'react'

import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCheckCircle, faTrash, faXmark, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'



export class FormAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            priority: '',
            todos: [],
            isChecked: false,
            showUnfinished: false
        }
        this.changeHandler = this.changeHandler.bind(this)

    }
    submitHandler = e => {

        e.preventDefault();


        var todo = {}
        todo = {
            title: this.state.title,
            description: this.state.description,
            priority: this.state.priority,
        }

        console.log(this.state)
        axios.post("http://localhost:8080/todos", todo)
            .then(response => {

                alert('Todo created ! ')
                this.fetchTodos()
            })
            .catch(err => {
                alert("Something happened ! ")
            })
    }
    handleCheckBox = event => {
        console.log(event.target.id);

        axios.put("http://localhost:8080/todos/changeStatus/" + event.target.id)
            .then((response) => {
                console.log(response.data);
                this.fetchTodos()
                this.state.isChecked = true;
                event.target = true
                console.log(event)
            })
    };
    fetchTodos = () => {
        axios.get("http://localhost:8080/todos")
            .then((response) => {
                console.log(response.data);
                console.log(this.state.todos)
                this.setState({ todos: response.data, showUnfinished: false })
                console.log(this.state.todos)
            })
    }
    componentDidMount() {
        this.fetchTodos()
    }

    changeHandler = (e) => {

        this.setState({ [e.target.name]: e.target.value })

    }
    getUnfinishedTodos = () => {
        axios.get("http://localhost:8080/todos/unfinished")
            .then((response) => {
                console.log(response.data);
                console.log(this.state.todos)
                this.setState({ todos: response.data, showUnfinished: true })
                console.log(this.state.todos)

            })
    }
    getFinishedTodos = () => {
        axios.get("http://localhost:8080/todos/finished")
            .then((response) => {
                console.log(response.data);
                console.log(this.state.todos)
                this.setState({ todos: response.data })
                console.log(this.state.todos)

            })
    }
    deleteTodo = (id) => {
        if (window.confirm("Are you sure you want to delete this todo ?")) {
            console.log(id)
            axios.delete("http://localhost:8080/todos/" + id)
                .then((response) => {
                    this.fetchTodos()
                    // console.log(response.data);
                    // console.log(this.state.todos)
                    // this.setState({ todos: response.data })
                    // console.log(this.state.todos)

                })
        }


    }
    render() {
        const { title, description, priority } = this.state

        return (
            <div className='form-add'>
                <section className=" get-in-touch">
                    <h1 className="title">Todo Application</h1>

                    <form className="contact-form row " onSubmit={this.submitHandler}>
                        <div className="form-field col-lg-4">
                            <input id="title" className="input-text js-input" type="text" required value={title} name="title" onChange={this.changeHandler} />
                            <label className="label" for="title">Title</label>
                        </div>
                        <br />
                        <div className="form-field col-lg-4 ">
                            <input id="description" className="input-text js-input" type="text" value={description} name="description" onChange={this.changeHandler} required />
                            <label className="label" for="description">Description</label>
                        </div>
                        <div className="form-field col-lg-4 ">
                            <select id="priority" className="input-text js-input" value={priority} name="priority"
                                onChange={this.changeHandler} required >
                                <option value="" selected disabled hidden></option>
                                <option value="HIGH">High</option>
                                <option value="MEDIUM">Medium</option>
                                <option value="LOW">Low</option>
                            </select>
                            {/* <input id="priority" className="input-text js-input" type="number" value={priority} name="priority" onChange={this.changeHandler} required /> */}
                            <label className="label" for="company">Priority</label>
                        </div>


                        <div className="">
                            <button className="submit-btn" type="submit">Add</button>
                        </div>
                    </form>
                </section>

                <div className='list-todos get-in-touch table-responsive-md'>

                    {/* <div className="form-field col-lg-12" hidden={
                        this.state.showUnfinished
                            ? true
                            : false
                    }>
                        <button className="submit-btn" type="submit" onClick={this.getUnfinishedTodos} >Get unfinished todos</button>
                    </div> */}
                    <div class="  pull-right float-right">
                        <button class="btn btn-small btn-success filter" data-toggle="portfilter" data-target="all">
                            All
                        </button>
                        <button class="btn btn-small btn-success filter" data-toggle="portfilter" data-target="art">
                            Art
                        </button>
                        <button class="btn btn-small btn-success filter" data-toggle="portfilter" data-target="media">
                            Media
                        </button>

                    </div>

                    {/* <div className="form-field col-lg-12" hidden={
                        this.state.showUnfinished
                            ? false
                            : true
                    }> */}
                    {/* <button className="submit-btn" type="submit" onClick={this.fetchTodos} >Get all todos</button>
                </div> */}
                    {/* <div className="form-field col-lg-12" >
                        <button className="submit-btn" type="submit" onClick={this.getFinishedTodos} >Get finished todos</button>
                    </div> */}


                    <table className="table" style={{ width: 800 }}>
                        <thead className="black white-text">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col" >Title</th>
                                <th scope="col" >Description</th>
                                <th scope="col" >Priority</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {this.state.todos.map((item, key) =>
                                <tr key={key}>

                                    <td className={item.status ? 'checked-todo' : "none"} ><input type="checkbox" id={item._id}
                                        onChange={this.handleCheckBox}
                                        checked={
                                            item.status
                                                ? true
                                                : false
                                        }
                                        disabled={

                                            item.status
                                                ? true
                                                : false
                                        } /></td>
                                    <td className={item.status ? 'checked-todo' : "none"} >{item.title}</td>
                                    <td className={item.status ? 'checked-todo' : "none"} >{item.description}</td>
                                    {item.priority == 'HIGH' &&
                                        <td className={item.status ? 'checked-todo' : "none"} style={{ color: 'red' }}
                                        >{item.priority}</td>}
                                    {item.priority == 'MEDIUM' &&
                                        <td className={item.status ? 'checked-todo' : "none"} style={{ color: 'orange' }}
                                        >{item.priority}</td>}
                                    {item.priority == 'LOW' &&
                                        <td className={item.status ? 'checked-todo' : "none"} style={{ color: 'yellow' }}
                                        >{item.priority}</td>}

                                    {item.status == 0 &&
                                        <td >
                                            <FontAwesomeIcon icon={faXmarkCircle} color="red" />

                                            {/* Unfinished */}
                                        </td>
                                    }
                                    {item.status == 1 &&
                                        <td className={item.status ? 'checked-todo' : "none"}>
                                            <FontAwesomeIcon icon={faCheckCircle} color="green" />
                                            {/* Finished */}
                                        </td>
                                    }
                                    <td>

                                        <button className='btn btn-danger' onClick={(e) => this.deleteTodo(item._id, e)} > <FontAwesomeIcon icon={faTrash} color="white" /> Delete</button>
                                    </td>

                                </tr>
                            )}
                        </tbody>
                    </table>

                </div >

            </div >
        )
    }


}
