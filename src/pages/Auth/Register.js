import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'
import MyNavbar from '../../components/MyNavbar/MyNavbar';
export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  const backendUrl = 'http://localhost:5555/register'
  function handleAuth(data) {
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        if(res.status == 200){
          navigate('/login')
        }
      })
  }
  return (
    <>
    <MyNavbar />
    <div className='authContainer'>
      <h2 className="text-center mb-4">Register</h2>
      <div>
        <form onSubmit={handleSubmit((data) => handleAuth(data))}>
          <div>
            <input {...register("name")} type="text" placeholder="Name" />
          </div>
          <div>
            <input {...register("email")} type="email" placeholder="Email" />
          </div>
          <div>
            <input {...register("password")} type="password" placeholder="Password" />
          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
          <div className='mt-3 text-center'>
            Already Have an account? <Link to='/login' > Login </Link>
          </div>
        </form>
      </div>
    </div >
    </>
  )
}
