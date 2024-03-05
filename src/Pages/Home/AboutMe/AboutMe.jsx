/* eslint-disable react/no-unescaped-entities */
import Typewriter from '../../../Component/TypeWriter/Typewriter';
import Title from '../../../Component/Title/Title';
import { Typography } from '@material-tailwind/react';
import Animation from '../../../Component/Animation/Animation';


const AboutMe = () => {

    return (
        <div id="aboutMe" className="p-10 grid place-content-center"

        >
            <Animation>
                <Title text="about me"></Title>
                <Typography className="text-sm lg:text-4xl h-screen my-4 container mx-auto text-center">
                    <Typewriter text="I am a MERN stack developer with a passion for creating responsive and
                    user-friendly web applications. I have a strong background in frontend
                    development using React, and I am proficient in building
                    RESTful APIs with Node.js and Express. I enjoy solving complex problems
                    and working collaboratively in a team environment. With my skills and experience, I strive to deliver high-quality code and
                    exceptional user experiences. I am continuously learning and exploring
                    new technologies to stay up-to-date with the latest industry trends. Let's collaborate and bring your ideas to life! Feel free to reach out to
                    me for any web development projects or opportunities." delay={50}></Typewriter>

                </Typography>
            </Animation>
        </div>

    );
};

export default AboutMe;
