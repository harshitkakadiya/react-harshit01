import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'


const Axios_Post = () => {
    return (
        
        <>
        <div>
        <div className='title'> Heading </div>
            <form>

            <label> First Name: </label> 
                <input type="text" placeholder="" /> 
                    <label> Last Name: </label> 
                <input type="text" placeholder="" />
                    <label> Your Email: </label> 
                <input type="text" placeholder="" />
                
                    <button className='text-white p-1 px-3'> Submit </button>
                    <button className='text-white p-1 px-3 mx-4'> Update </button>
                    <button className='text-white p-1 px-3'> Delete </button>
            </form>


        </div>
        </>
                )
}

 export default Axios_Post