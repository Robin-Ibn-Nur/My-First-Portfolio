import { Button } from '@material-tailwind/react';
import './Banner.css'
import resume from '/Robin_Resume_of_MERN_Stack_Developer.pdf'
import { AiOutlineDownload } from "react-icons/ai";
const Banner = () => {
    const name = ["M", "D", ".", "R", "O", "B", "I", "N"]

    return (
        <div>
            <div id="home" className="container mx-auto h-96 md:h-[500px] lg:h-screen grid place-content-center font-mono"
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <div className="keyboard">
                    {name.map((data, index) => (<span key={index} className="key">{data}</span>))}
                </div>
                <Button size='lg' color='lime' variant='gradient'>
                    <a href={resume} download className='text-xl flex items-center justify-center gap-2 text-black'>
                        <span>DOWNLOAD RESUME</span>
                        <AiOutlineDownload /></a>
                </Button>
            </div>
        </div>


    );
};

export default Banner;