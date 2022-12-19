import { Component } from 'react'

import React from 'react';


export class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }



    }

    render() {
        return (
            <div>
                <div >

                    <div className="centered">

                        <p className="firstLine"> T &nbsp; O &nbsp; D &nbsp; O &nbsp; . &nbsp; A &nbsp; P &nbsp; P </p>

                        <p className="secondLine">TODO Application</p>

                        <p>
                            <input className="InputStyle" placeholder="create a new todo        
                              &#xf0e0; " type="text" />
                        </p >
                        <button type="submit" className="btnStyle">Add</button>


                    </div >




                </div >
            </div >
        )
    }


}
