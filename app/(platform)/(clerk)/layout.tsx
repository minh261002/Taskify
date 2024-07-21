import React from 'react'

function ClerkLayout(
    { children }: { children: React.ReactNode }
) {
    return (
        <div className='h-full flex items-center justify-center'>
            {children}
        </div>
    )
}

export default ClerkLayout
