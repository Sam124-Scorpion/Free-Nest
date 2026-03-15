import React from 'react'
import Searchbar from '../src/components2/Searchbar'
import Tabs from '../src/components2/Tabs'
import REsultGrid from '../src/components2/REsultGrid'
import { useSelector } from 'react-redux'

const Home = () => {

  const { query } = useSelector((store2) => store2.search)

  return (
    <div className='flex min-h-screen w-full flex-col items-center bg-zinc-800 px-4 py-6'>
      <div className='w-full searchbar-enter'>
        <Searchbar />
      </div>

      <div
        className={`mt-4 flex w-full max-w-7xl flex-col items-center transition-all duration-500 ease-out ${
          query !== ''
            ? 'translate-y-0 opacity-100'
            : '-translate-y-3 opacity-0 pointer-events-none'
        }`}
      >
        <Tabs />
        <REsultGrid />
      </div>
    </div>
  )
}

export default Home