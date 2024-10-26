import React, { useState } from 'react'
import Navbar from './Navbar'
import {data} from './Data/Data'
import Header from './Header'


const index = () => {
    const[product,setProduct]=useState(data)
  return (
    <div>
      <Navbar/>
      <Header data={product}/>
    </div>
  )
}

export default index
