import React from 'react'

export default function SignUpForm(props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "mismatched passwords": "Passwords do not match. Please try again.",
        "fetch error": "An error occured. Please try again later.",
        "username taken": "Username already exists. Please try another one."
    }
   return (
        <form onSubmit={props.handleSignup}>
            <label id="fname">First name : </label>
            <input 
                type="text"
                id="fname"
                name="firstName"
                placeholder="First Name"
                value={props.firstName}
                onChange={props.handleChange}
            />  <br /> 
        
        
            <label id="lname">Last name : </label>
            <input 
                type="text"
                id="lname"
                name="lastName"
                placeholder="Last Name"
                value={props.lastName}
                onChange={props.handleChange}
            /> <br /> 


            <label id="email">Email : </label>
            <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Email"
                value={props.email}
                onChange={props.handleChange} 
            />  <br /> 

            <label id="username">Username : </label>
            <input 
                type="text" 
                id="username" 
                name="usernameInput"
                placeholder="Username"
                value={props.usernameInput}
                onChange={props.handleChange} 
            />   <br /> 

            <label id="pssd">Password : </label>
            <input 
                type="password" 
                id="pssd" 
                name="passwordInput"
                placeholder="Password"
                value={props.passwordInput}
                onChange={props.handleChange} 
            />   <br /> 

            <label id="pssdc">Confirm Password : </label>
            <input 
                type="password" 
                id="pssdc" 
                name="passwordConfirmInput"
                placeholder="Password"
                value={props.passwordConfirmInput}
                onChange={props.handleChange} 
            />  <br /> 


            <label id="addy1">Address 1 : </label>
            <input 
                type="text"
                id="addy1"
                name="address1"
                placeholder="Address 1"
                value={props.address1}
                onChange={props.handleChange}  
            /><br /> 

            <label id="addy2">Address 2 : </label>
            <input 
                type="text"  
                id="addy2"
                name="address2"
                placeholder="Address 2"
                value={props.address2}
                onChange={props.handleChange} 
            />   <br /> 



        
            <label id="city">City : </label>
            <input 
                type="text" 
                id="city" 
                name="city"
                placeholder="city"
                value={props.city}
                onChange={props.handleChange} 
            />   <br /> 



            <label id="state">State : </label>
            <input 
                type="text"  
                id="state"
                name="state"
                placeholder="State e.g NY"
                value={props.state}
                onChange={props.handleChange} 
            />   <br /> 


            <label id="zip">Zip Code : </label>
            <input 
                type="number" 
                id="zip" 
                name="zipCode"
                placeholder="Zip Code"
                value={props.zipCode}
                onChange={props.handleChange} 
            />   <br /> 


            <input type="submit" value="Submit" />
        </form>
           
   )
}