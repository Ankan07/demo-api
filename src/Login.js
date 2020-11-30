import React, { Component } from 'react';

// Import Materialize
import M from "materialize-css";

import axios from 'axios';
export class Login extends Component {

    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
        M.Carousel.init({
            fullWidth: true,
            indicators: true
        })



    }

    state = {
        response: ""
    }

    submit() {

        var id = document.getElementById("name").value;
        var password = document.getElementById("password").value;

        console.log(id, password);
        if (id !== null && password !== null) {



            if (id == "abc@gmail.com" && password == "password") {
                window.location.replace("http://localhost:3000/userinfo")
            } else {
                alert("Incorrect Credentials!");
            }

        }
        else {
            alert("Please Enter all details");

        }

    }
    render() {
        return (
            <div style={{ background: "blue", height: "100vh" }}>
                <div class="row">
                    <div class="col l4"></div>
                    <div class="col l4">
                        <div class="card" style={{ "margin-top": "45%" }}>
                            <div class="card-content">
                                <h5 style={{ "text-align": "center" }}>Login </h5>
                                <input id="name" type="text" class="validate"></input>
                                <label for="last_name">Email</label>
                                <input id="password" type="password"></input>
                                <label for="last_name">Password</label>


                            </div>
                            <div >
                                <button onClick={this.submit} style={{ "margin-left": "37%", "margin-bottom": '10%' }} class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                                </button>

                            </div>


                        </div></div>
                    <div class="col l4"></div>
                </div>

            </div >

        )
    }
}

