import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='fixed z-50 top-0 px-4 w-full h-14 border-b shadow-sm bg-white flex items-center'>
            {/* mobile navbar */}
            <div className='flex items-center gap-x-4'>
                <div className='hidden md:flex'>
                    <Logo />
                </div>

                <Button size="sm" variant="primary" className="rounded-sm hidden md:block h-auto py-1.5 px-2">
                    Create
                </Button>
                <Button size="sm" variant="primary" className='rounded-sm block md:hidden'>
                    <Plus className='w-4 h-4' />
                </Button>
            </div>

            <div className='ml-auto flex items-center gap-x-2'>
                <OrganizationSwitcher hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl='/select-org'
                    afterSelectOrganizationUrl='/organization/:id'
                    appearance={{
                        elements: {
                            rootBox: {
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }
                        }
                    }}
                />

                <UserButton
                    appearance={{
                        elements: {
                            avatarBox: {
                                height: 30,
                                width: 30,
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Navbar