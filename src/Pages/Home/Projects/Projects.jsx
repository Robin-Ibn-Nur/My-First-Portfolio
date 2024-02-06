import Animation from '../../../Component/Animation/Animation';
import Title from '../../../Component/Title/Title';


import projects from '../../../ProjectData/ProjectData';
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (

        <div id='myPortfolio' className="p-10">
            <Animation>
                <Title text="My Projects" />
            </Animation>
            <Animation>
                <div className="container my-10 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <ProjectCard project={project} key={i} />
                    ))}
                </div>
            </Animation>
        </div>

    );

};

export default Projects;

