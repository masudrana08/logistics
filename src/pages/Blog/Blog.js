import React from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import { Col, Row } from 'react-bootstrap'
import './blog.css'
import { useNavigate } from 'react-router-dom';
import Img1 from '../../assets/img/blueTrucks.jpg'
import Img2 from '../../assets/img/blackwhiteTruck.jpg'
import Img3 from '../../assets/img/redTruck.jpg'
import Img4 from '../../assets/img/yellowTruck.jpg'
import Img5 from '../../assets/img/truckMountains.jpg'
export default function Blog() {
  const navigate = useNavigate()
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
      <div className="blogContainer">
       
        {
          blogs.map((blog, i) => {
            return (
              <div onClick={() => navigate('/blog/' + Number(i))} key={i} className='blog_postContainer'>
                <Row className='blog_post' >
                  <Col xs={12} md={5}>
                    <img style={{ width: '100%' }} src={blog.img} alt="" />
                  </Col>
                  <Col xs={12} md={7} className='right'>
                    <div>
                      <h3 className='mb-3'>{blog.title}</h3>
                      <p>{blog.description}</p>
                    </div>
                  </Col>
                </Row>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
