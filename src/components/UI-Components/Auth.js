import React,{useState} from '../../../node_modules/react';
import RegForm from '../RegForm';
import LoginForm from './LoginForm'


export default function Auth(props) {
    const [isSignin, SetSignin]=useState(false)

    const handleSignUpButtonClick = ()=> {
        SetSignin(!isSignin) 
    }
    // const handleSignInButtonClick = ()=> {
    //     SetSignin(true) 
    // }

    return (
      <div>
      
        {isSignin ? <LoginForm props={props} /> : <RegForm props={props} />}  
        <button onClick={handleSignUpButtonClick}> {isSignin ? "Login" : "Register"}</button>
       
      </div>
    );
}
