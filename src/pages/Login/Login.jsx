import React from 'react'
import './login.css'


const Login = () => {
  return (
    <div className='login'>
     <img src="" className="logo" alt="Logo" />
     <form action="" className="login-form">
      <h2>Sign Up</h2>
      <input type="text" placeholder='Username' className='form-input' required />
      <input type="email" placeholder='Email' className='form-input' required />
      <input type="password" placeholder='Password' className='form-input' required />
     
     <button type='submit'>
      Sign Up
     </button>
     <div className='login-term'>
      <input type="checkbox" className="text" />
      <p> Agree to the terms of use & privacy policy.
      </p>
     </div>
     <div className="login-forgot">
      <p className="login-toggle">
        Already have an account <span>click here</span> 
      </p>
     </div>

     </form>

    </div>
  )
}

export default Login;