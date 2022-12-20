import { Component } from 'react'

import React from 'react';
import axios from 'axios'


export class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {

        axios.get("http://localhost:8080/todos")
            .then((response) => {
                console.log(response.data);
                this.setState({ todos: response.data.docs })
                console.log(this.state.todos)
            })
    }

    render() {
        return (
            <div>
                <section className="get-in-touch">
                    <h1 className="title">Todo Application</h1>
                    <form className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input id="title" className="input-text js-input" type="text" required />
                            <label className="label" for="title">Title</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="description" className="input-text js-input" type="text" required />
                            <label className="label" for="description">Description</label>
                        </div>
                        <div className="form-field col-lg-6 ">
                            <input id="priority" className="input-text js-input" type="number" required />
                            <label className="label" for="company">Priority</label>
                        </div>


                        <div className="form-field col-lg-12">
                            <input className="submit-btn" type="submit" value="Submit" />
                        </div>
                    </form>
                </section>
            </div >
        )
    }


}
