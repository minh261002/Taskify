import React from 'react'
import Sidebar from '../_components/sidebar'

const OrganizationLayout = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <div className='pt-20 md:pt-24 max-w-6xl md:max-w-screen-xl mx-auto'>
            <div className='flex gap-x-7'>
                <div className='w-64 shrink-0 hidden md:block'>
                    <Sidebar />
                </div>

                {children}
            </div>
        </div>
    )
}

export default OrganizationLayout