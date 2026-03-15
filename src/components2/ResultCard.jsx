import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux2/features2/collectionSlice'

const ResultCard = ({ item }) => {

    const dispatch = useDispatch()

    const addtoCollection = (selectedItem) => {
        dispatch(addCollection(selectedItem))

        dispatch(addedToast())

    }

    return (
        <div className='relative w-80 h-80 overflow-hidden bg-white rounded-lg'>

            <a target='_blank' rel='noreferrer' className='block h-full w-full'>
                {item.type === 'photo' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''} {/*for fixing alltime referencing we can use one time destructuring*/}
                {item.type === 'video' ? <video className='h-full w-full object-cover object-center' src={item.src} autoPlay loop muted></video> : ''}
                {item.type === 'gif' ? <img className='h-full w-full object-cover object-center' src={item.src} alt="" /> : ''}
            </a>
            <div id='bottom' className='absolute bottom-0 z-10 flex h-[30%] w-full items-end justify-between rounded-b-lg p-4 font-bold text-slate-100'>
                <span className='max-w-[70%] text-left'>{item.title}</span>
                <button onClick={() => {
                    addtoCollection(item)
                }} type='button' className='rounded bg-red-500 px-3 py-2 font-small text-white'>save</button>
            </div>
        </div>
    )
}

export default ResultCard