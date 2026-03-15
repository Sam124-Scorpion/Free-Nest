import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='sticky top-0 z-20 w-full border-b border-zinc-700 bg-zinc-900/90 px-4 py-3 backdrop-blur transition-colors duration-300 ease-out transparent-black opacity-60'>
            <nav className='mx-auto flex w-full max-w-7xl items-center justify-end gap-3'>
                <Link className='rounded bg-gray-700 px-4 py-2 text-base text-slate-100' to='/'>Search</Link>
                <Link className='rounded bg-gray-700 px-4 py-2 text-base text-slate-100' to='/collection'>View Collections</Link>
            </nav>
        </header>
    )
}

export default Navbar