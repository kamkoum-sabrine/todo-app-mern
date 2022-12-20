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
            <div className='list-todos get-in-touch table-responsive-md'>
                <table class="table" style={{ width: 800 }}>
                    <thead class="black white-text">
                        <tr>
                            <th scope="col">Status</th>
                            <th scope="col" >Title</th>
                            <th scope="col" >Description</th>
                            <th scope="col" >Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.todos.map((item, key) =>
                            <tr key={key}>
                                <td><input type="checkbox" checked={item.status} /></td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.priority}</td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div >

        )
    }


}
