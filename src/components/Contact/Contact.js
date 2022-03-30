import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import './contact.css'

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const backendUrl = 'http://localhost:5555/contact'
  function handleContact(data) {
    console.log(data)
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log(res)
      })
  }

  return (
    <div className='contactContainer' id="contact">
      <Row className='justify-content-center'>
        <Col md={10}>
          <div>
            <h3 className='text-center text-white mb-5'>Contact Us</h3>
            <div className='formContainer'>
              <form onSubmit={handleSubmit((data) => handleContact(data))}>
                <Row className='form__row'>
                  <Col xs={12} md={6} >
                    <input {...register("fname")} type="text" placeholder='First Name' required />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("lname")} type="text" placeholder='Last Name' required />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("company")} type="text" placeholder='Company Name' required />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("address")} type="text" placeholder='Address' required />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("email")} type="text" placeholder='Email Address' required />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("phone")} type="text" placeholder='Phone Number' required />
                  </Col>
                  <Col xs={12} >
                    <textarea {...register("message")} type="text" placeholder='Message' required />
                  </Col>
                  <Col><input className='submit_btn' xs={12} type="submit" value="Submit" /></Col>
                </Row>
              </form>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}
