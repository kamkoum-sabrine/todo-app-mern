import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import axios from 'axios'


export class List extends Component {

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
            <div className='list-todos get-in-touch'>

                <div class="holder d-flex align-items-center justify-content-center">

                    <div class="container">
                        <header class="text-center mb-5">
                            <h1 class="display-4">My todos</h1>
                        </header>


                        <div class="row">
                            <div class="col-lg-5 mx-auto">

                                <div class="card rounded border-0 shadow-sm position-relative">
                                    <div class="card-body p-5">

                                        {this.state.todos.map((item, key) =>

                                            <div class="form-check mb-3 list" key={key}>
                                                <input class="form-check-input" id="flexChec2" type="checkbox" />

                                                <label class="form-check-label" for="flexChec2"><span class="fst-italic pl-1">{item.title}</span>
                                                    <p class="form-check-label" for="flexChec2"><span class="fst-italic pl-1">{item.description}</span></p></label>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }


}
