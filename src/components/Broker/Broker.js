import React from 'react'
import './broker.css'
import EmployeeImg from '../../assets/img/employee.jpg'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
export default function Broker() {
  const navigate = useNavigate()
  return (
    <div className='brokerContainer' id='about'>
      <Row className='justify-content-center align-items-center'>
      <Col xs={10} md={5}>
          <img style={{ width: '100%' }} src={EmployeeImg} alt="" />
        </Col>
        <Col xs={10} md={5} className='broker__right'>
          <h3 className='highlight'>Why do you need a freight broker?</h3>
          <p className='mt-4 mb-4'>
            Simply put, <b className='highlight'>Efficiency</b>. Freight brokers provide flexibility into your supply chain which helps you gain a competitive advantage. Focus your energy, time, and effort into what you do best to stay competitive and consider freight brokers to manage your shipping and logistic functions.
          </p>
          <p className='mt-4 mb-4'>
            Having a freight broker as your  <b className='highlight'> strategic partner </b>, you have the ability to access an entire carrier network without the expense of having an entire shipping network. You will not need to spend time on creating invoices, audits, or training. Freight brokers are experts at shipping and will provide you access to their shipping reporting and visibility into your logistics.

          </p>
          <p className='mt-4 mb-4'>
            As demand fluctuates through natural, seasonal, or abnormal spikes, freight brokers can provide the <b className='highlight'> necessary capacity </b> as your business moves through these cycles. No need to stress over capacity constraints in your business.
          </p>
          {/* <button onClick={() => navigate('/blog')}>See our Articles</button> */}
        </Col>
        
      </Row>

    </div>
  )
}
