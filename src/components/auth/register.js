import React from 'react';

import SignupForm from './sign-up';

export default function Signup (props) {
    const errorMessage = {
        "none": "",
        "blank field": "Please fill in all fields.",
        "mismatched passwords": "Passwords do not match. Please try again.",
        "fetch error": "An error occured. Please try again later.",
        "username taken": "Username already exists. Please try another one."
    }
   return (
       <div className="register-page-wrapper">
           <div className="right-side"></div>
           < div className="left-side">
               <SignupForm />
                
           </div>
       </div>
   )
}