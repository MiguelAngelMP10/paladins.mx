"use client";
import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarBrand,
    NavbarItem, NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
} from "@nextui-org/navbar";
import {Link} from "@nextui-org/link";
import {link as linkStyles} from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import {Image} from "@nextui-org/image";
import React from "react";

import {siteConfig} from "@/config/site";
import {ThemeSwitch} from "@/components/theme-switch";
import {TwitterIcon, GithubIcon} from "@/components/icons";

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (

        <NextUINavbar maxWidth="xl" className="mt-12" position="sticky" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                />
                <NavbarBrand>
                    <NextLink className="flex justify-start items-center " href="/">
                        <Image alt="Logo" className="h-26 w-32 shadow-lg shadow-violet-600" src="/logo2.png"/>
                    </NextLink>
                </NavbarBrand>
            </NavbarContent>


            <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
                <ul className="hidden lg:flex gap-4 justify-start ml-2">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
            </NavbarContent>

            <NavbarMenu>
                {siteConfig.navItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <NextLink
                            className={clsx(
                                linkStyles({color: "foreground"}),
                                "data-[active=true]:text-primary data-[active=true]:font-medium",
                            )}
                            href={item.href}>
                            {item.label}
                        </NextLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            <NavbarContent
                className="sm:flex basis-1/5 sm:basis-full"
                justify="end"
            >
                <NavbarItem className="sm:flex gap-2">
                    <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
                        <TwitterIcon className="text-default-500"/>
                    </Link>
                    <Link isExternal aria-label="Github" href={siteConfig.links.github}>
                        <GithubIcon className="text-default-500"/>
                    </Link>
                    <ThemeSwitch/>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    );
};
