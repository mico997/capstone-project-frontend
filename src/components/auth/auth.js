import React, { Component} from 'react';
import axios from 'axios';
import Cookies from "js-cookie";




import loginImg from "../../../static/assets/login.jpg";
import Login from './login';

export default class Auth extends Component {
    constructor(props) {
        super(props)

        if (Cookies.get("username")) {
            props.history.push("../pages/n95mask")
        }

        this.state = {
            authMethod: "login",
            firstName: "",
            lastName: "",
            usernameInput: "",
            passwordInput: "",
            passwordConfirmInput: "",
            email: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            zipCode: "",
            errorMessage: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSignup = this.handleSignup.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)


    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    handleSignup(event) {
        event.preventDefault()

        if (this.state.usernameInput === "" || this.state.passwordInput === "" || this.state.passwordConfirmInput === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else if (this.state.passwordInput !== this.state.passwordConfirmInput) {
            this.setState({ errorMessage: "mismatched passwords" })
        }
        else {
            axios.post("https://new-capstone-backend-mvkt.herokuapp.com", 
            {
                Profile: {
                    first_name: this.state.firstName,
                    last_name: this.state.lastName,
                    email: this.state.email,
                    username: this.state.usernameInput,
                    password: this.state.passwordInput,
                    password_confirm: this.state.passwordConfirmInput,
                    address1: this.state.address1,
                    address2: this.state.address2,
                    city: this.state.city,
                    state: this.state.state,
                    zipCode: this.state.zipCode,
                }
            },
            )
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (data === "Username Taken") {
                    this.setState({ errorMessage: "username taken" })
                }
                else {
                    this.setState({ errorMessage: "none" })
                }
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: "fetch error" })
            })
        }
   }



    handleLoginSubmit(event) {
        
        event.preventDefault();

        if (this.state.usernameInput === "" || this.state.passwordInput === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else {
            axios.post("https://new-capstone-backend-mvkt.herokuapp.com/user/verification", 
            {
                User: {
                    username: this.state.usernameInput,
                    password: this.state.passwordInput
                }
            },
            { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                  console.log("You can come in...");
                } else {
                  this.setState({
                    errorText: "Wrong email or password"
                  });
                }
              })
              .catch(error => {
                this.setState({
                  errorText: "An error occurred"
                });
              });
        }
        

    

    }


    handleClick() {
        this.setState({ 
            authMethod: this.state.authMethod === "login" ? "signup" : "login",
            errorMessage: "none",
            usernameInput: "",
            passwordInput: "",
            passwordConfirmInput: ""
         })
    }



   render() {
       return (
           <div className='login-page-wrapper'>
               <div className="left-column"
               style={{
                   backgroundImage: `url(${loginImg})`,
               }}
            />

               <div className="right-column">
                   <Login />
               </div>
           </div>
       )
   }
}