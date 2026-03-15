import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement , incrementByAmmount , defaultval } from './redux/features/countersSlice'

const App2 = () => {

const dispatch  = useDispatch()
const count = useSelector((val)=>val.counter.value)


  return (
    <div className='flex items-center justify-center h-screen w-screen '>
        {/* for conditional cheaking purpose */}

      <div className='flex gap-4 mt-8 justify-center w-full mt-8'>
        <button className='border-2 border-white' onClick={() => {
          dispatch(increment())
        }}>increase</button>

        <button className='border-2 border-white' onClick={() => {
          dispatch(decrement())
        }}>decrease</button>

        <button className='border-2 border-white' onClick={() => {
          dispatch(incrementByAmmount(34))
        }}>increment by 34</button>

        <button className='border-2 border-white' onClick={()=>{
          dispatch(defaultval())
        }}>default</button>

        <h1 className='text-white'>{count}</h1>

      </div>
    </div>
  )
}

export default App2