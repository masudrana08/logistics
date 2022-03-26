import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TravelImg from '../../assets/img/travel.jpg'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import './blogDetails.css'
export default function BlogDetails() {
  const { id } = useParams()
  const blog = {
    title: 'Expansion in Progress',
    description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
    img: TravelImg
  }
  return (
    <div>
      <MyNavbar />
      <div className='detailsContainer'>
        <Row className='' >
          <Col xs={12} className='mb-5'>
            <img style={{ width: '100%' }} src={blog.img} alt="" />
          </Col>
          <Col xs={12} className=''>
            <div>
              <h3 className='mb-3'>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
