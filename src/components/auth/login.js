import React, { Component} from 'react';


export default function Login(props) {

       return (
           <div className='login'>
               <h2>LOGIN TO ACCESS YOUR DASHBOARD</h2>
               <form onSubmit={props.handleLoginSubmit}>
                   <input
                    type="username" 
                    name="usernameInput"
                    placeholder="Enter Username Here"
                    value={props.usernameInput}
                    onChange={props.handleChange}
                   />

                   <input 
                    type="password" 
                    name="passwordInput"
                    placeholder="Enter Password Here"
                    value={props.passwordInput}
                    onChange={props.handleChange}

                   />

                   <div>
                       <button type="submit">Login</button>
                       <p onClick={props.handleClick}>Don't have an account? Click here to sign up!</p>
                   </div>
               </form>
                
           </div>
       )
   }