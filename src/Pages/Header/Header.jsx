/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import {
    Navbar,
    Collapse,
    Typography,
    IconButton,

} from "@material-tailwind/react";

import NavMenu from './NavMenu';
import TimeCounter from '../Home/Time/TimeCounter';


const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    return (
        <div className="container mx-auto sticky top-3 z-10 px-2 flex justify-center">
            <Navbar className="absolute nav_style border border-gray-900 border-none font-bold ">
                <div className="grid grid-flow-col justify-stretch">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 text-3xl font-bold tracking-tighter bg-clip-text text-transparent sm:text-4xl md:text-2xl bg-gradient-to-r from-red-500 via-green-500 to-red-500"


                    >
                        RoBiN
                    </Typography>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block"><NavMenu /></div>
                        <TimeCounter />
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <NavMenu />
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
