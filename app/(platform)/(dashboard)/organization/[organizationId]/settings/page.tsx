import { OrganizationProfile } from "@clerk/nextjs"

const SettingsPage = () => {
    return (
        <div className="w-full mx-auto">
            <OrganizationProfile
                routing="hash"
                appearance={{
                    elements: {
                        rootBox: {
                            boxShadow: 'none',
                            width: "full",
                        },
                        cardBox: {
                            border: '1px solid #e5e5e5',
                            boxShadow: 'none',
                            width: "full",
                        }
                    }
                }}
            />
        </div>
    )
}

export default SettingsPage