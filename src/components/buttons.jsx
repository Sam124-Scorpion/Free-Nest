import React from 'react'
import { fetchgiffs, fetchphotos, fetchvideos } from '../apis/mediaApi'

const buttons = () => {
  return (
    <div className='flex items-center justify-evenly w-screen mt-6'>
      <button className='button bg-slate-100' onClick={async()=>{
        const data = await fetchphotos('Cat')
        console.log(data.results)
      }}>photo</button>
      <button className='button bg-slate-100' onClick={async()=>{
        const data = await fetchvideos('dog')
        console.log(data.videos)
      }}>videos</button>
      <button className='button bg-slate-100' onClick={ async()=>{
        const data = await fetchgiffs('mouse')
        console.log(data.data)
      }}>gifs</button>
    </div>
  )
}

export default buttons