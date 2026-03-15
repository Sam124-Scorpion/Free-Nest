import React, { useEffect } from 'react'
import { fetchphotos, fetchvideos, fetchgiffs } from '../apis/mediaApi'
import { setResults, setError, setLoading } from '../redux2/features2/searchSlice'
import { useDispatch, useSelector } from 'react-redux'
import ResultCard from './ResultCard'




const REsultGrid = () => {

    const dispatch = useDispatch()

    const { query, loading, error, activeTab, results } = useSelector((store2) => store2.search)


    useEffect(() => {

        const getdata = async () => {
            

            if(!query) return

            try {

                dispatch(setLoading())
                let data = [], res

                if (activeTab === 'photos') {
                    res = await fetchphotos(query)
                    data = res.results.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.alt_description,
                        thumbnail: item.urls.small,
                        src: item.urls.full,
                        url : item.links.html
                    }))
                }
                else if (activeTab === 'videos') {
                    res = await fetchvideos(query)
                    data = res.videos.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.user?.name || item.url || 'video',
                        thumbnail: item.image,
                        src: item.video_files?.[0]?.link || '',
                        url : item.url
                    }))
                }
                else if (activeTab === 'giffs') {
                    res = await fetchgiffs(query)
                    data = res.data.map((item) => ({
                        id: item.id,
                        type: 'gif',
                        src: item.images?.original?.url || '',
                        title: item.title,
                        thumbnail: item.images?.fixed_width?.url || '',
                        url : item.url
                    }))
                }

                dispatch(setResults(data))
                           console.log(data)

            } catch (error) {
                dispatch(setError(error.message))
            }

 
        }

        getdata()
    }, [query, activeTab, dispatch])


    if (error) {
        return <h1>Error: {error}</h1>
    }
    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (

        <div className='flex flex-wrap gap-10 overflow-auto justify-center mb-15'>
            {results.map((item , id) => {
                // return <h5 key={item.id}>
                //     {typeof item.title === 'string' ? item.title : 'Untitled'}
                //     </h5>
                return <div key={id}>
                    <ResultCard item={item}/>
                </div>
            })}
        </div>
    )
}

export default REsultGrid