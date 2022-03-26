import React from 'react'
import './about.css'
import EmployeeImg from '../../assets/img/employee.jpg'
import { Col, Row } from 'react-bootstrap'

export default function About() {
  return (
    <div>
      <Row className='justify-content-center'>
        <Col md={5}>
          <h3>Brief About Us:</h3>
          <p>
            Navram Logistics prides itself in providing supply chain solutions for small and large businesses. We have an experienced dedicated team ready to move your load around the clock. Navram Logistics is committed to finding the most cost effective logistic solution no matter how complex the need. 
          </p>
        </Col>
        <Col md={5}>
          <img style={{width:'100%'}} src={EmployeeImg} alt="" />
        </Col>
      </Row>

    </div>
  )
}
