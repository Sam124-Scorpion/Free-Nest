import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTab } from '../redux2/features2/searchSlice'


const Tabs = () => {

    const tabs = ['photos', 'videos', 'giffs']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div style={{ display: 'flex', padding: '24px', gap: '16px', justifyContent: 'center', alignItems: 'center', width: '100%', boxSizing: 'border-box' }}>

            {tabs.map((e, id) => {
                return <button
                    style={{
                        backgroundColor: activeTab === e ? '#1d4ed8' : '#4b5563',
                        color: '#ffffff',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        textTransform: 'uppercase',
                        border: 'none'
                    }}
                    key={id}
                    onClick={() => {
                        dispatch(setActiveTab(e))
                    }}
                >{e}</button>
            })}

        </div>
    )
}

export default Tabs