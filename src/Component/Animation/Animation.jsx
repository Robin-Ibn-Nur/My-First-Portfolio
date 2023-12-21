/* eslint-disable no-unused-vars */
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Animation = ({ children, type }) => {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            delay: 100,
        });
    }, [])
    return (
        <div data-aos={type}>
            {children}
        </div>
    );
};

export default Animation;