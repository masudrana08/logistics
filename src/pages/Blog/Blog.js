import React from 'react'
import MyNavbar from '../../components/MyNavbar/MyNavbar'
import TravelImg from '../../assets/img/travel.jpg'
import { Col, Row } from 'react-bootstrap'
import './blog.css'
import { useNavigate } from 'react-router-dom';
export default function Blog() {
  const navigate = useNavigate()
  const blogs = [
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: TravelImg
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: TravelImg
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: TravelImg
    },
    {
      title: 'Expansion in Progress',
      description: 'Jet Freight is happy to announce that we are opening up a second locate in the Kansas City, MO area by signification increasing our warehouse space. With over 80,000 square feet of useable space to better suit your needs. We appreciate everyone that stopped by to celebrate.',
      img: TravelImg
    },
  ]
  return (
    <div>
      <MyNavbar />
      <div className="blogContainer">
        {
          blogs.map((blog, i) => {
            return (
              <div onClick={() => navigate('/blog/' + i+1)} key={i} className='blog_postContainer'>
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
