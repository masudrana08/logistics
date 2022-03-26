import React from 'react'
import './about.css'
import EmployeeImg from '../../assets/img/employee.jpg'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
export default function About() {
  const navigate = useNavigate()
  return (
    <div className='aboutContainer' id='about'>
      <Row className='justify-content-center align-items-center'>
        <Col xs={10} md={5} className='about__left'>
          <h3><span className='highlight'>Brief</span> About Us:</h3>
          <p className='mt-4 mb-4'>
            Navram Logistics prides itself in providing supply chain solutions for small and large businesses. We have an experienced dedicated team ready to move your load around the clock. Navram Logistics is committed to finding the most cost effective logistic solution no matter how complex the need. 
          </p>
          <button onClick={()=>navigate('/blog')}>See our Articles</button>
        </Col>
        <Col xs={10} md={5}>
          <img style={{width:'100%'}} src={EmployeeImg} alt="" />
        </Col>
      </Row>

    </div>
  )
}
