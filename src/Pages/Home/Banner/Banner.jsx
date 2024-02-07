import './Banner.css'
import resume from '/Robin_Resume_of_MERN_Stack_Developer.pdf'
import { AiOutlineDownload } from "react-icons/ai";
// import Animation from "../../../Component/Animation/Animation";
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
        <div>
            <div id="home" className="name-banner container mx-auto relative h-96 md:h-[500px] lg:h-screen ">
                <div className="name"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    {/* <main className="text-container flex justify-center items-center">
                        <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
                            <text className="uppercase" x="15" y="75">
                                md.robin
                            </text>
                        </svg>
                    </main> */}
                    <div className="keyboard">
                        <span className="key">M</span>
                        <span className="key">D</span>
                        <span className="key">.</span>
                        <span className="key">R</span>
                        <span className="key">O</span>
                        <span className="key">B</span>
                        <span className="key">I</span>
                        <span className="key">N</span>
                    </div>
                    <a className="reset w-max h-[50px] text-xl flex items-center gap-2" onClick={restartAnimation} href={resume} download>
                        <span>DOWNLOAD RESUME</span>
                        <AiOutlineDownload />
                    </a>


                </div>
            </div>
        </div>


    );
};

export default Banner;