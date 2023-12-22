import './Banner.css'
import resume from '/Md_Robin.pdf'
import { AiOutlineDownload } from "react-icons/ai";
import Animation from "../../../Component/Animation/Animation";
const Banner = () => {
    const restartAnimation = () => {
        const textAnimation = document.querySelector(".text-stroke");
        setAnimationName(textAnimation, "none");
        requestAnimationFrame(() => setTimeout(() => setAnimationName(textAnimation, ""), 0));
    };

    const setAnimationName = (element, animationName) => {
        if (element) {
            element.style.animationName = animationName;
        }
    };


    return (
        <div id="home" className="name-banner relative h-96 md:h-[500px] lg:h-screen ">
            <div className="name">
                <Animation>
                    <main className="text-container flex justify-center items-center">
                        <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
                            <text className="text uppercase" x="15" y="75">
                                md.robin
                            </text>
                        </svg>
                    </main>
                    <a className="reset w-max h-[50px] text-xl flex items-center gap-2" onClick={restartAnimation} href={resume} download>
                        <span>DOWNLOAD RESUME</span>
                        <AiOutlineDownload />
                    </a>
                </Animation>


            </div>
        </div>


    );
};

export default Banner;