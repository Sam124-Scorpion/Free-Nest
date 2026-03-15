import React from 'react'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { setQuery } from '../redux2/features2/searchSlice'



const Searchbar = () => {


    const [text, settext] = useState('')

    const dispatch = useDispatch()
    // const counter2 = useSelector((state)=>state.counter2.value)


    const submithandler = (e) =>{

        e.preventDefault()

        dispatch(setQuery(text))

        console.log(text)
        settext('')
    }


    return (
        <div className='flex justify-center items-center gap-2 bg-gray-800 w-full h-30'>
            <input
                required={true}
                className='border-2 px-2 py-3 w-[50%] rounded outline-none'
                type="text"
                placeholder='enter something for search'
                value={text}
                onChange={((e)=>{
                    settext(e.target.value)
                })}
            />
            <button className='active:scale-95 border-2 px-2 py-3 rounded outline-none cursor-pointer mt-2'
            onClick={submithandler}
            >
                search
            </button>
        </div>
    )
}

export default Searchbar