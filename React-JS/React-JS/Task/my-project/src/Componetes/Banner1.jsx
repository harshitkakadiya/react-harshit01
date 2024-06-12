import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faSpoon } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-brands-svg-icons'




const Banner1 = () => {
  return (
    <>
      <div>
        <div>
          <img className='w-full h-[200px] relative' src="https://media.licdn.com/dms/image/C4E16AQGHZoP7dNLYuQ/profile-displaybackgroundimage-shrink_200_800/0/1640187510702?e=2147483647&v=beta&t=DyAJXNkJfUEnCk8YgLKEcib8RYsPfDwk1KzhjYN9c8A" alt="" />
          <h1 className='text-5xl font-bold absolute top-8 left-8 text-neutral-50'>Bootstrap images</h1>
        </div>
        <div className='grid-rows-1'>
          <div class="container mx-auto grid grid-cols-3 gap-3">
            <div className=' border border-inherit rounded  m-4 text-center'>
              <div className='flex justify-center mx-[-15px] '>
                <img className='text-center w-[500px] h-[280px] rounded drop-shadow-xl mb-5' src="https://blogs.elenasmodels.com/wp-content/uploads/2022/05/10-shocking-facts-about-slavic-girls-for-marriage.jpg" alt="" />
              </div>
              <h3 className='text-[20px] font-extrabold mb-2'>Alice Mayer</h3>
              <span className='font-[600] text-blue-900'>Photographer</span>
              <p className='text-gray-500 mt-3'>Learn about the history, usage and variations <br /> of Lorem Ipsum, the industry's standard <br /> dummy text for printing and typesetting.</p>
              <FontAwesomeIcon icon={faLinkedinIn} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebookF} />
            </div>


            <div className=' border border-inherit rounded  m-4 text-left px-[15px]'>
              <div className='flex justify-center  '>
                <img className='text-left w-[500px] h-[280px] rounded drop-shadow-xl mb-5' src="https://manmatters.com/blog/content/images/size/w1000/2021/01/superfoods-for-hair-growth.jpeg" alt="" />
              </div>
              <FontAwesomeIcon icon={faSpoon} style={{color:"#800000"}} /><span className='font-[600] text-blue-900 text-rose-800'>Photographer</span>
              <h3 className='text-[20px] font-extrabold mb-2'> <span></span> Alice Mayer</h3>
              <p className='text-gray-500 mt-3'>Learn about the history, usage and variations <br /> of Lorem Ipsum, the industry's standard <br /> dummy text for printing and typesetting.</p>
              <button className='bg-rose-800 te text-neutral-50 text-[12px]  px-4 py-2 mt-5'>BUTTON</button>
            </div>

            <div className=' border border-inherit rounded  m-4 text-center'>
              <div className='flex justify-center  '>
                <img className='text-center w-[500px] h-[280px] rounded drop-shadow-xl mb-5' src="https://chrisvweatherly.files.wordpress.com/2017/06/joshua-peacock-240448.jpg?quality=80&w=676" alt="" />
              </div>
              <h3 className='text-[20px] font-extrabold mb-2'>Alice Mayer</h3>
              <span className='font-[600] text-blue-900'>Photographer</span>
              <p className='text-gray-500 mt-3'>Learn about the history, usage and variations <br /> of Lorem Ipsum, the industry's standard <br /> dummy text for printing and typesetting.</p>
              <FontAwesomeIcon icon={faFacebook} style={{color: "#0000a0"}} />
              <FontAwesomeIcon icon={faTwitter} style={{color: "#0080ff"}} />
              <FontAwesomeIcon icon={faGlobe} style={{color: "#800040"}} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Banner1
