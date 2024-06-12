import React from 'react'
import { useState } from 'react'

const initialState = 10

const Use_State = () => {

    const [state, setState] = useState(initialState)
    const [name, setName] = useState()

    const handleIncrement = () => {
        setState(state + 1)
    }
    const handleDecrement = () => {
       if(state > 0)
        { 
            setState(state - 1)
        }
    
    }
    const handleReset = () => {
        setState(initialState)
    }
    
    function handleChange(){
        setName(e.target.value)
    }

    return (
        <div  className='text-center'>
            <h1 className='text-center text-4xl text-white bg-gray-700 p-4 mb-10'>React Hooks useState</h1>
            <span className='text-3xl'>
                StateOfHooks :- {state}
            </span> <br />
            <button className=' border-2 px-2 py-1 bg-slate-400' onClick={handleIncrement}>Increment</button> 
            <button className=' border-2 px-2 py-1 mx-4 my-3 bg-slate-400' onClick={handleDecrement}>Decrement</button> 
            <button className=' border-2 px-2 py-1 bg-slate-400' onClick={handleReset}>Reset</button> <br />
            <span className='block mb-3'><hr /></span>
            <hr />
            {/* <input className='border-2 my-5' type="text" name="" id="" value={name} onChange={handleChange} /> <br />
            <button className=' border-2 px-2 py-1 my-3 bg-slate-400 me-2' onClick={() => setName('SkillQode')}>Increment</button>
            <button className=' border-2 px-2 py-1 bg-slate-400  ms-2' onClick={() => setName('')}>Reset</button> <br /> */}
        </div>
    )
}

export default Use_State