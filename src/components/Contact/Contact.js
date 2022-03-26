import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import './contact.css'

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const backendUrl = 'http://localhost:5555/contact'
  function handleContact(data) {
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
    <div className='contactContainer'>
      <Row className='justify-content-center'>
        <Col md={10}>
          <div>
            <h3 className='text-center text-white'>Contact Us</h3>
            <div className='formContainer'>
              <form onSubmit={handleSubmit((data) => handleContact(data))}>
                <Row className='form__row'>
                  <Col xs={12} md={6} >
                    <input {...register("fname")} type="text" placeholder='First Name' />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("lname")} type="text" placeholder='Last Name' />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("company")} type="text" placeholder='Company Name' />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("address")} type="text" placeholder='Address' />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("email")} type="text" placeholder='Email Address' />
                  </Col>
                  <Col xs={12} md={6} >
                    <input {...register("phone")} type="text" placeholder='Phone Number' />
                  </Col>
                  <Col xs={12} >
                    <textarea {...register("message")} type="text" placeholder='Message' />
                  </Col>
                  <Col><input xss={12} type="submit" value="Submit" /></Col>
                </Row>
              </form>
            </div>

          </div>
        </Col>
      </Row>
    </div>
  )
}
