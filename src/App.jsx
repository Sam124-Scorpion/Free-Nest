import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Collections from '../pages/Collections'
import Navbar from './components2/Navbar'
import Custom_type from './components/custom_type'
import { ToastContainer} from 'react-toastify';


const App = () => {




  return (
    <div className='min-h-screen bg-zinc-800'>
      <Navbar />
      <div className='flex justify-center font-bold px-4 pt-4'>
        <h1 className='heading text-center'>
            FreeNest
            <p className='text-lg text-slate-300 mt-2 font-medium'>
              a tool for searching and collecting free media resources from various platforms.
            </p>
            <Custom_type />
        </h1>
      </div>

      <main className='pt-4'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/collection' element={<Collections/>} />
        </Routes>

        <ToastContainer />
        <footer className='bg-zinc-900 text-slate-400 py-6 mt-10'>
          <div className='container mx-auto text-center'>
            <p>&copy; 2026 FreeNest. All rights reserved.</p>
            <p>made with &#10084; by Sam</p>
          </div>
        </footer>
      </main>
    </div>


  )
}

export default App