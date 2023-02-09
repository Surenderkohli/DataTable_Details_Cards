import React,{useRef} from "react";
import './Sign.css'
import {useNavigate} from 'react-router-dom'
import Table from "./Table";
function SignIn() {
    const navigate=useNavigate()
    const email=useRef();
    const password=useRef();
    // const getEmail=localStorage.getItem('emailData')
    // const getPassword=localStorage.getItem('passwordData')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(email.current.value=="demo@coralmango.com"&&password.current.value=='demo123'){
            // localStorage.setItem('emailData','demo@coralmango.com')
            // localStorage.setItem('passwordData','demo123')
            navigate('/table')
          
        }
        else{
            alert('Invalid username or Password ')
        }

    }
    return (<>
        <h2 className=" mt-5">Login Form</h2>
        <div className="formContainer mt-4">
            <form onSubmit={handleSubmit} >
                <div className="container-fluid" style={{width:'70%',margin:"0 auto"}}>
                    <div>
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required ref={email}/>

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required ref={password}/>
                    </div>
                    <div className="text-center">
                        <button type="submit" style={{width:'50%'}}>Login</button>
                        {/* <input type="checkbox" checked="checked" /> Remember me */}
                    </div>
                </div>
                {/* <div className="container" style={{ backgroundColor: '#f1f1f1' }}> */}
                    {/* <button type="button" className="cancelbtn">Cancel</button>
                    <span className="psw">Forgot <a href="#">password?</a></span> */}
                {/* </div> */}
            </form>

        </div>
    </>

    );
}

export default SignIn;
