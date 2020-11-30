import React, { Component } from 'react';

// Import Materialize
import M from "materialize-css";

import axios from 'axios';
export class Prescription extends Component {

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
        document.getElementById("preloader").style.visibility = "visible";
        document.getElementById("card_1").style.visibility = "hidden";
        setTimeout(function () {

            document.getElementById("preloader").style.visibility = "hidden";
            document.getElementById("card_1").style.visibility = "visible";

        }, 3000);

        axios.post('', (response) => {
            this.setState({ response: response });
        })

    }
    render() {
        return (
            <div>
                <nav>
                    <div class="nav-wrapper orange darken-4">
                        <a href="#" class="brand-logo">Ingenio</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">

                            <li><a href="#uf">Userinfo</a></li>

                        </ul>
                    </div>
                </nav>
                <div class="carousel carousel-slider center">

                    <div class="carousel-item white-text" href="#one!" style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
                        " background-size": "cover",
                        "background-repeat": "no-repeat",

                        "background-position": "center",
                        "width": "100%",


                    }}>
                        <h2>Find User Information</h2>

                    </div>
                    <div class="carousel-item  white-text" href="#two!" style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80`,
                        " background-size": "cover",
                        "background-repeat": "no-repeat",

                        "background-position": "center",
                        "width": "100%",


                    }}>
                        <h2>Find User Prescriptions</h2>

                    </div>
                    <div class="carousel-item green white-text" href="#three!" style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1557825834-45cfd416dd62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
                        " background-size": "cover",
                        "background-repeat": "no-repeat",

                        "background-position": "center",
                        "width": "100%",


                    }}>
                        <h2>Get Claims</h2>

                    </div>

                </div>


                <h5 id="uf"><b>User Info</b></h5>
                <hr></hr>
                <p>
                    A health information system (HIS) refers to a system designed to manage healthcare data. This includes systems that collect, store, manage and transmit a patient’s electronic medical record (EMR), a hospital’s operational management or a system supporting healthcare policy decisions.

Health information systems also include those systems that handle data related to the activities of providers and health organizations. As an integrated effort, these may be leveraged to improve patient outcomes, inform research, and influence policy-making and decision-making. Because health information systems commonly access, process, or maintain large volumes of sensitive data, security is a primary concern.</p>

                <hr></hr>


                <div class="row  grey lighten-5" >
                    <div class="col l3"></div>

                    <div class="col l6">
                        <div class="row">
                            <div class="col l2"></div>
                            <div class="col l8">
                                <div class="card">
                                    <div class="card-content">
                                        <h5 style={{ "text-align": "center" }}>Enter your details </h5>
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Identfier</label>
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">First Name</label>
                                        <input id="last_name" type="text" class="validate"></input>
                                        <label for="last_name">Last Name</label>

                                        <input type="text" class="datepicker"></input>
                                        <label for="last_name">DOB</label>

                                    </div>
                                    <div >
                                        <button onClick={this.submit} style={{ "margin-left": "37%", "margin-bottom": '10%' }} class="btn waves-effect waves-light" type="submit" name="action">Submit
    <i class="material-icons right">send</i>
                                        </button>

                                    </div>


                                </div>




                            </div>
                            <div class="col l2"></div>
                        </div>
                        <div id="preloader" style={{ visibility: "hidden" }} class="progress">
                            <div class="indeterminate"></div>
                        </div>

                        <div class="card" id="card_1" style={{ visibility: "hidden" }}>
                            <div class="card-image waves-effect waves-block waves-light">
                                <img class="activator" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" ></img>
                            </div>
                            <div class="card-content">
                                <span class="card-title activator grey-text text-darken-4">SHANE INGRXP WATSON<i class="material-icons right">more_vert</i></span>

                            </div>
                            <div class="card-reveal">

                                <span class="card-title grey-text text-darken-4">More Details<i class="material-icons right">close</i></span>
                                <br></br>
                                <li><b>hcId: </b> 752T94980</li>
                                <li><b>First Name: </b> SHANE</li>
                                <li><b>Last Name: </b> INGRXP WATSON</li>
                                <li><b>DOB: </b> 1965-02-20</li>
                                <li><b>MemberId: </b> 160157390473247790</li>
                                <li><b>Email: </b> V*******************@legatohealth.com</li>
                                <table class="striped centered">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Type</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>isRegistered</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>authenticated</td>
                                            <td>true</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>forceChangedPassword</td>
                                            <td>false</td>

                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>forceSetSecurityQnA</td>
                                            <td>false</td>

                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>forceSetPreferences</td>
                                            <td>false</td>

                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>

                    </div>

                    <div class="col l3"></div>

                </div>
                <footer class="page-footer orange darken-4">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Footer Content</h5>
                                <p class="grey-text text-lighten-4">Integrate data facility</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Links</h5>
                                <ul>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            © 2020 copyright
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>

            </div >

        )
    }
}

