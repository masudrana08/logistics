import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import TravelImg from '../../assets/img/travel.jpg'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import './blogDetails.css'
import Img1 from '../../assets/img/blueTrucks.jpg'
import Img2 from '../../assets/img/blackwhiteTruck.jpg'
import Img3 from '../../assets/img/redTruck.jpg'
import Img4 from '../../assets/img/yellowTruck.jpg'
import Img5 from '../../assets/img/truckMountains.jpg'
export default function BlogDetails() {
  const { id } = useParams()
  const blogs = [
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: Img1
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: Img2
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: Img3
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: Img4
    },
  ]

  return (
    <div>
      <MyNavbar />
      <div className='detailsContainer'>
        <Row className='' >
          <Col xs={12} className='mb-5'>
            <img style={{ width: '100%' }} src={blogs[id].img} alt="" />
          </Col>
          <Col xs={12} className=''>
            <div>
              <h3 className='mb-3'>{blogs[id].title}</h3>
              <p>{blogs[id].description}</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
