/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import "tailwindcss/tailwind.css";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    Avatar,

} from "@material-tailwind/react";
import { DrawerForm } from '../../Component/Drawer/DrawerForm';

import Logo from '../../Component/Logo/Logo';
import r from '/R.png'
import { animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);


    // scroll function
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        scrollSpy.update();
    }, []);

    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };

    // menu Items
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a
                    className={`${isScrolled ? "flex items-center font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500" : "flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500"}`}
                    onClick={() => scrollToSection("home")}
                >
                    <Logo text="Home"></Logo>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a className={`${isScrolled ? "flex items-center font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500" : "flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500"}`}
                    onClick={() => scrollToSection("aboutMe")}
                >
                    <Logo text="About Me"></Logo>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a className={`${isScrolled ? "flex items-center font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500" : "flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500"}`}
                    onClick={() => scrollToSection("skills")}
                >
                    <Logo text="Skills"></Logo>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a className={`${isScrolled ? "flex items-center font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500" : "flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500"}`}
                    onClick={() => scrollToSection("myPortfolio")}
                >
                    <Logo text="My Portfolio"></Logo>
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a className={`${isScrolled ? "flex items-center font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500" : "flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500"}`}
                    onClick={() => scrollToSection("contactMe")}
                >
                    <Logo text="Contact Me"></Logo>
                </a>
            </Typography>
        </ul>
    );

    return (
        <>
            <Navbar className={`${isScrolled ? "sticky top-0 z-10 transition duration-600 backdrop-blur-sm bg-white/30 border-none" : ""} font-bold h-max max-w-full rounded-none py-2 px-4 lg:px-10 lg:py-6 transition duration-600`}>
                <div className="flex items-center justify-between">

                    <Typography
                        as="a"
                        href="#"
                        className={`mr-4 cursor-pointer py-1.5 font-bold text-xl ${isScrolled ? 'text-white' : 'text-black'}`}
                    >
                        <Avatar src={r} alt="avatar" size="lg" />
                    </Typography>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <DrawerForm></DrawerForm>
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
                    {navList}
                </Collapse>
            </Navbar>
        </>
    );
};

export default Header;
