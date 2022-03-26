import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import MyNavbar from '../../components/MyNavbar/MyNavbar';
import './auth.css'
export default function Register() {
  const { register, handleSubmit } = useForm();
  const backendUrl = 'http://localhost:5555/login'
  function handleAuth(data) {
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res=>{
        if(res.email && res.name){
          localStorage.setItem('name', res.name)
          localStorage.setItem('email', res.email)
          window.location.href = '/'
        }
      })
  }
  return (
    <>
    <MyNavbar />
    <div className='authContainer'>
      <h2 className="text-center mb-4">Login</h2>
      <div>
        <form onSubmit={handleSubmit((data) => handleAuth(data))}>
          <div>
            <input {...register("email")} type="email" placeholder="Email" />
          </div>
          <div>
            <input {...register("password")} type="password" placeholder="Password" />
          </div>
          <div>
            <button type='submit'>Login</button>
          </div>
          <div className='mt-3 text-center'>
            Don't have an account? <Link to='/register' > Register </Link>
          </div>
        </form>
      </div>
    </div >
    </>
  )
}
