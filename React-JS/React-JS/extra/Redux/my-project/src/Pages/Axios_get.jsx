import  { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
// import './App.css'

const Axios_get = () => {

    const [data , setData] = useState([])
    
    useEffect (() => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => setData(response.data))
    }, [])

  return (
    <div>
      {
        data.map(item =>{
            return(
                <div key={item.id} className=''>
                    <div>{item.title}</div>
                    <span>{item.image}</span>
                </div>
            )
        })
      }
    </div>
  )
}

export default Axios_get
