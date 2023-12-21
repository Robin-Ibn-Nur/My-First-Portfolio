import { Typography } from '@material-tailwind/react';
import Logo from '../../Component/Logo/Logo';
import { useEffect } from 'react';
import { scrollSpy, scroller } from 'react-scroll';
const NavMenu = () => {
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
    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal cursor-pointer"
            >
                <a
                    className="flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
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
                <a className="flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
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
                <a className="flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
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
                <a className="flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
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
                <a className="flex items-center font-bold transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                    onClick={() => scrollToSection("contactMe")}
                >
                    <Logo text="Contact Me"></Logo>
                </a>
            </Typography>
        </ul>
    );
};

export default NavMenu;