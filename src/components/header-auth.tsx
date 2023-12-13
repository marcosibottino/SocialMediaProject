'use client'

import { auth } from "@/auth";
import { Avatar, Button, Navbar, NavbarBrand, NavbarContent, NavbarItem, Input, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Link from "next/link";
// import { Input } from "postcss";
import * as actions from '@/actions';
import { useSession } from "next-auth/react";


export default function HeaderAuth(){
    const session = useSession();

    let authContent: React.ReactNode;
    if (session.status === 'loading') {
        authContent = null;
    } else if(session.data?.user){
        authContent =   <Popover placement="left">
                            <PopoverTrigger>
                                <Avatar src={session.data.user.image || ''} />
                            </PopoverTrigger>
                            <PopoverContent>
                                <div className="p-4">
                                    <form action={actions.signOut}>
                                        <button type="submit">Sign Out</button>
                                    </form>
                                </div>
                            </PopoverContent>
                        </Popover>
    } else {
        authContent = <>
        <NavbarItem>
            <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
            </form>
        </NavbarItem>
        <NavbarItem>
            <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">Sign up</Button>
            </form>
        </NavbarItem>
        </>
    }

    return authContent;
}