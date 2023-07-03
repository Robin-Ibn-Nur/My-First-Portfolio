import TimeCounter from "../Time/TimeCounter";
import './Banner.css'
import resume from '../../../../public/Md_Robin.pdf'

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
        <div id="home" className="name-banner">
            <TimeCounter></TimeCounter>
            <div className="name">
                <main className="text-container flex justify-center items-center">
                    <svg className="text-stroke" viewBox="0 0 500 100" width="80%" height="100%">
                        <text className="text uppercase" x="15" y="75">
                            md.robin
                        </text>
                    </svg>
                </main>
                {/* <a className="reset" download={"https://drive.google.com/drive/u/0/my-drive"}>
                    <button className="" onClick={restartAnimation}>DOWNLOAD RESUME</button>
                </a> */}
                <a className="reset" onClick={restartAnimation} href={resume} download>DOWNLOAD RESUME</a>

            </div>
        </div>


    );
};

export default Banner;