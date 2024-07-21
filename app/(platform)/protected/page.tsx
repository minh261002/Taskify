"use client"

import { UserButton } from "@clerk/nextjs"

const ProtectedPage = async () => {

    return (
        <div>
            <UserButton />
        </div>
    )
}

export default ProtectedPage