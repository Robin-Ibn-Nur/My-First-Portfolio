
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../ContactInformation/Contact";
import Projects from "../Projects/Projects";
import SkillSection from "../SkillSection/SkillSection";


const Home = () => {

    return (
        <>
            <Banner />
            <AboutMe />
            <SkillSection />
            <Projects />
            <Contact />
        </>
    );
};

export default Home;