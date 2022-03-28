import React from 'react'
import About from '../../components/About/About'
import Broker from '../../components/Broker/Broker'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import MyNavbar from '../../components/MyNavbar/MyNavbar'

export default function Home() {
  return (
    <div>
      <MyNavbar />
      <Header />
      <Broker />
      <About />
      <Contact />
      {/* <Footer /> */}
    </div>
  )
}
