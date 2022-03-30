import React, {useEffect, useState} from 'react'
import './header.css'
import MyVideo from '../../assets/video.mp4'
export default function Header() {
  let selected = 1
  const arr = ["Terrain", "Environment", "Economy"]
  const [text, setText] = useState('')
  const [mytext, setMytext] = useState('')
 useEffect(()=>{
    setTimeout(()=>{
    setMytext(`Dedicated to accomplishing your logistical needs no matter the`)
    setText('Terrain')
     
   },1000)
  setInterval(()=>{
    if(selected<=2){
      setText(arr[selected])
      if(selected==2){
        selected = 0
      }else{
        selected += 1
      }
    }
  },3000)
 },[])
  return (
    <div className='headerContainer' id='home'>
      <video className='headerVideo' src={MyVideo} controls={false} muted autoPlay={true} preload="auto" loop>
         video  is not supported here
      </video>
      <div className="header_content">
        <div>
          <h2 className='text-center'>
             {mytext} <span className='highlight'>{text}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
