/* eslint-disable no-unused-vars */
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Animation = ({ children }) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 1000,
            delay: 500,
        });
    }, [])
    return (
        <div data-aos="fade-down">
            {children}
        </div>
    );
};

export default Animation;