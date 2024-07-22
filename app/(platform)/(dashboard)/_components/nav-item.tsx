"use client"

import { AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AccordionContent, AccordionItem } from "@radix-ui/react-accordion";
import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from 'next/image';
import { usePathname, useRouter } from "next/navigation";
import { Skeleton } from "@/components/ui/skeleton";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}

interface NavItemProps {
    isExplanded: boolean;
    isActive: boolean;
    organization: any;
    onExpland: (id: string) => void;
}

const NavItem = ({ isExplanded, isActive, organization, onExpland }: NavItemProps) => {

    const routes = [
        {
            label: "Boards",
            icon: <Layout className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label: "Activity",
            icon: <Activity className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: "Settings",
            icon: <Settings className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: "Billing",
            icon: <CreditCard className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/billing`
        }
    ];
    const router = useRouter();
    const patname = usePathname();

    const onClick = (href: string) => {
        router.push(href);
    }
    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpland(organization.id)}
                className={cn(
                    "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
                    isActive && !isExplanded && "bg-sky-500/10 text-sky-700"
                )}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative">
                        <Image fill src={organization.imageUrl} alt="organization" className="rounded-sm object-cover" />
                    </div>
                    <span className="font-medium text-sm">
                        {organization.name}
                    </span>
                </div>
            </AccordionTrigger>

            <AccordionContent className="pt-1 text-neutral-700">
                {routes.map((route) => (
                    <Button
                        key={route.href}
                        size='sm'
                        onClick={() => onClick(route.href)}
                        className={cn(
                            "w-full font-normal justify-start pl-10 mb-1",
                            patname === route.href && "bg-sky-500/10 text-sky-700"
                        )}
                        variant='ghost'
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    )
}

export default NavItem

NavItem.Skeleton = function SkeletonNavItem() {
    return (
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 relative shrink-0">
                <Skeleton className="h-full w-full absolute " />
            </div>
            <Skeleton className="h-10 w-full" />
        </div>
    );
}