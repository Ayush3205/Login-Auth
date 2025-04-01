import React from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { handleError } from '../utils';

function Signup() {


    const [SignupInfo, setSignupInfo] = React.useState({
        name:'',
        email:'',
        password:''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = {...SignupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const {name, email, password} = SignupInfo;
        if(!name || !email || !password){
            return handleError('Name, Email and Password are required.')    
        }
        try{
            const url = "http://localhost:5000/auth/signup"
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(SignupInfo)
            });
            const result = await response.json();
            console.log(result);
        } catch (err){
            handleError(err);
        }
    }


  return (
    <div className='container'>
        <h1>Login</h1>
        <form onSubmit={handleSignup}>
            <div>
                <label htmlFor='name'>Name</label>
                <input className='form-border'
                    onChange={handleChange}
                    type= 'text'
                    name= 'name'
                    autoFocus
                    placeholder='Enter your name...'
                    value= {SignupInfo.name}
                />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input 
                    onChange={handleChange}
                    type= 'email'
                    name= 'email'
                    autoFocus
                    placeholder='Enter your email...'
                    value= {SignupInfo.email}
                />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input 
                    onChange={handleChange}
                    type= 'password'
                    name= 'password'
                    placeholder='Enter your password...'
                    autoComplete='current-password'
                    value= {SignupInfo.password}
                />
            </div>
            <button type='submit'>Signup</button>
            <span>Already have an account? 
                <Link href='/login'>Login</Link>
            </span>
        </form>
        <ToastContainer />
    </div>
  )
}

export default Signup
