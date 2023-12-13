import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Input } from "@nextui-org/react";
import Link from "next/link";
import HeaderAuth from "./header-auth";


export default function Header(){

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Discuss</Link>
            </NavbarBrand>
            <NavbarContent justify="center">
                {/* Search inputs */}
                <NavbarItem>
                    <Input />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                    <HeaderAuth />
            </NavbarContent>
        </Navbar>
    )
}