import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCollection, removeToast } from '../src/redux2/features2/collectionSlice'

const Collections = () => {

  const collection = useSelector((state) => state.collection.items)

  const dispatch = useDispatch()

  const removeFromCollection = (item) => {

    dispatch(removeCollection(item.id))

    dispatch(removeToast())

  }

  const handleDownload = (item) => {

    const link = document.createElement('a')
    link.href = item.src
    link.download = `${item.title || 'download'}.${item.type === 'photo' ? 'jpg' : item.type === 'video' ? 'mp4' : 'gif'}`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }


  return (
    <div className='flex items-center justify-center mt-10 flex-col'>
      <div className='flex flex-wrap gap-10 justify-center mb-15'>
        {collection.length === 0 ? <h1 className='text-2xl mt-[40%] font-bold text-white'>No items in collection</h1> : collection.map((item, id) => {
          return <div key={id} className='relative w-80 h-80 overflow-hidden bg-white rounded-lg'>
            <a target='_blank' rel='noreferrer' className='block h-full w-full' href={item.url}>
              {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
              {item.type === 'video' ? <video className='h-full w-full object-cover object-center' src={item.src} autoPlay loop muted></video> : ''}
              {item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='absolute bottom-0 z-10 flex h-[30%] w-full items-end justify-between rounded-b-lg p-4 font-bold text-slate-100'>
              <span className='max-w-[70%] text-left'>{item.title}</span>
              <div className='flex flex-col items-end justify-center gap-3'>
              <button onClick={() => {
                removeFromCollection(item)
              }} className='rounded bg-red-600 transparent px-10 py-3 font-small text-white'> Remove </button>
              <button onClick={() => {
                handleDownload(item)
              }} className='rounded bg-blue-600 transparent px-3 py-2 font-small text-white'>Download</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Collections