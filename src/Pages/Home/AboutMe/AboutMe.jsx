/* eslint-disable react/no-unescaped-entities */
import { useSpring, animated } from '@react-spring/web'
import Typewriter from '../../../Component/TypeWriter/Typewriter';
import Title from '../../../Component/Title/Title';


const AboutMe = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 }
    });

    const slide = useSpring({
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0%)" },
        config: { duration: 1000 }
    });

    return (
        <div id="aboutMe">
            <animated.div className="about-me w-full text-center" style={fade}>
                <animated.div className="about-me-content  container mx-auto" style={slide}>
                    <Title text="about me"></Title>
                    <p className="text-lg my-4">
                        <Typewriter text="I am a MERN stack developer with a passion for creating responsive and
                        user-friendly web applications. I have a strong background in frontend
                        development using React, and I am proficient in building
                        RESTful APIs with Node.js and Express. I enjoy solving complex problems
                        and working collaboratively in a team environment. With my skills and experience, I strive to deliver high-quality code and
                        exceptional user experiences. I am continuously learning and exploring
                        new technologies to stay up-to-date with the latest industry trends. Let's collaborate and bring your ideas to life! Feel free to reach out to
                        me for any web development projects or opportunities." delay={50}></Typewriter>
                    </p>
                </animated.div>
            </animated.div>
        </div>

    );
};

export default AboutMe;
