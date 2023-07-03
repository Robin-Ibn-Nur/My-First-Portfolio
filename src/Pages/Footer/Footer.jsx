import { Avatar, Typography } from "@material-tailwind/react";
import Typewriter from "../../Component/TypeWriter/Typewriter";
import r from '/R.png'
const Footer = () => {

    return (
        <footer className="w-full bg-blue  p-8">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                <div className="flex items-center gap-2">
                    <Avatar src={r} size="lg"></Avatar>
                    <Typewriter text="r o b i n"></Typewriter>
                </div>
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        >
                            About Me
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        >
                            License
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        >
                            Contribute
                        </Typography>
                    </li>
                    <li>
                        <Typography
                            as="a"
                            href="#"
                            color="blue-gray"
                            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
                        >
                            Contact Me
                        </Typography>
                    </li>
                </ul>
            </div>
            <hr className="my-8 border-blue-gray-50" />
            <Typography color="blue-gray" className="text-center transition-colors hover:text-blue-500 focus:text-blue-500 text-white">
                &copy; {new Date().getFullYear()} Md.RoBiN

            </Typography>
        </footer>
    );
};

export default Footer;