/* eslint-disable no-unused-vars */
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Animation = ({ children }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center">
            {children}
        </div>
    );
};

export default Animation;