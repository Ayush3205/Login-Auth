import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';

function Home() {
    const[logginedInUser, setLoggedInUser] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
      setLoggedInUser (localStorage.getItem('logginedInUser'))
    }, [])

    const handleLogout = (e) => {
      localStorage.removeItem('token');
      localStorage.removeItem('logginedInUser');
      handleSuccess('User Logged Out')
      setTimeout(() => {
        navigate('/login');
      }, 1000)
    }
  return (
    <div>
      <h1>{logginedInUser}</h1>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </div>
  )
}

export default Home
