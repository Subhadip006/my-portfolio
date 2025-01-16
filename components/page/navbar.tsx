import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Link from "next/link";

function navbar() {
  return (
    <nav className="mt-5 text-gray-200 p-5 border-white rounded-2xl shadow-[2px_3px_10px_3px_rgba(255,_255,_255,_0.2)]">
          <NavigationMenu className="font-semibold text-base font-mono">
            <NavigationMenuList className="gap-x-6">
             <NavigationMenuItem>
                 <Link href="/docs" legacyBehavior passHref>
                   <NavigationMenuLink>
                       Home
                   </NavigationMenuLink>
                 </Link>
             </NavigationMenuItem>
             <NavigationMenuItem>
                 <Link href="/docs" legacyBehavior passHref>
                   <NavigationMenuLink>
                       My projects
                   </NavigationMenuLink>
                 </Link>
             </NavigationMenuItem>
             <NavigationMenuItem>
                 <Link href="/docs" legacyBehavior passHref>
                   <NavigationMenuLink>
                       Contact
                   </NavigationMenuLink>
                 </Link>
             </NavigationMenuItem>             
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
  )
}

export default navbar