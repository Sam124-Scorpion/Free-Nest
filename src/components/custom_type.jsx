import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const custom_type = () => {

    const el = useRef(null)

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Free to pick images' , 'Videos' , 'Giffs' , 'According to your search query' , 'Save them in your collection' , 'Download them for free' , 'All in one place' , 'FreeNest is here to help you!'],
            typeSpeed : 50,
        });

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div className='typeText flex items-center justify-center w-screen font-bold '>
            <span ref={el} style={{textTransform : 'none', color:'blueviolet' , fontSize:'2rem' , textAlign:'center'}} />

        </div>
    )
}

export default custom_type