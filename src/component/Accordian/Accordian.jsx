import React, { useState } from 'react'
import { questions } from './api';
import './Accordian.css'
import MyAcoordian from '../Accordian/MyAccordian'
export default function Acoordian() {
    const [data, setData] = useState(questions)
  return (
    <section className='main-div'>
   
 {     data.map((currEl,index)=>{
       const {id} = currEl
       return <MyAcoordian key={index} {...currEl}/>
      })}
    </section>
  )
}
