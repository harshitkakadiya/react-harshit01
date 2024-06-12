// import React from 'react'
// import axios from 'axios'
// import { useState, useEffect } from 'react'

// const ProductData = () => {
//     const [data, setdata] = useState([])
//     const [show, setShow] = useState(false);

//     const handledata = () => {
//         const responce = axios.get('https://fakestoreapi.com/products')
//             .then(responce => setdata(responce.data))
//             .then(responce => setShow(true))

//             .catch(error => console.log(error))
//     }

//     useEffect(() => {
//         handledata()
//     }, [data])

//     return (
//         <div>
//             <button onClick={handledata}>Click</button>
//             {
//                 show == true ? data.map(item => {
//                     return (
//                         <div key={item.id}>
//                             <h1>{item.title}</h1>
//                             <h1>{item.price}</h1>
//                             <h1>{item.category}</h1>
//                         </div>
//                     )
//                 }) : null
//             }
//         </div>
//     )
// }
// export default ProductData


import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ProductData = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);

    const handleData = () => {
        setShow(true);
    }

    useEffect(() => {
        if (show) {
            axios.get('https://fakestoreapi.com/products')
                .then(response => {
                    setData(response.data);
                })
                .catch(error => console.log(error));
        }
    }, [show]);

    return (
        <div>
            {/* <button onClick={handleData}>Click</button> */}
            {
                show && data.map(item => (
                    <div className='grid grid-cols-4 border border-black' key={item.id}>
                        <h1>{item.title}</h1>
                        <h1>{item.price}</h1>
                        <h1>{item.category}</h1>
                        <img className='h-[200px] py-10 ' src={item.image} alt="" />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductData;
