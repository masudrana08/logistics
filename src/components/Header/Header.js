import React, {useEffect, useState} from 'react'
import './header.css'
import MyVideo from '../../assets/video.mp4'
export default function Header() {
  let selected = 0
  const arr = ["Terrain", "Environment", "Economy"]
  const [text, setText] = useState(arr[selected])
 useEffect(()=>{
  setInterval(()=>{
    if(selected<=2){
      setText(arr[selected])
      if(selected==2){
        console.log(selected)
        selected = 0
      }else{
        selected += 1
      }
    }
  },3000)
 },[])
  return (
    <div className='headerContainer'>
      <video className='headerVideo' src={MyVideo} controls={false} muted autoPlay={true} preload="auto" loop>
         video  is not supported here
      </video>
      <div className="header_content">
        <div>
          <h2>
            Dedicated to accomplishing your logistical needs no matter the  <span className='highlighted_text'>{text}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}
