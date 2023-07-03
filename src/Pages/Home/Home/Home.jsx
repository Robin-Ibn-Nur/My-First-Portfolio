import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import Contact from "../ContactInformation/Contact";
import Projects from "../Projects/Projects";
import SkillSection from "../SkillSection/SkillSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <SkillSection></SkillSection>
            <Projects></Projects>
            <Contact></Contact>
        </div>

        // for animation use only
        // <div className='grid-bg ba-grid anim'>
        //     <div className="inner"></div>
        //     <Banner></Banner>
        //     <AboutMe></AboutMe>
        //     <SkillSection></SkillSection>
        //     <Projects></Projects>
        //     <Contact></Contact>
        // </div>
    );
};

export default Home;