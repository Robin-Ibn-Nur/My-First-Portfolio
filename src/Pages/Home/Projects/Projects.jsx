import Title from '../../../Component/Title/Title';


import projects from '../../../ProjectData/ProjectData';
import ProjectCard from "./ProjectCard";

const Projects = () => {

    return (

        <div id='myPortfolio'>
            <Title text="My Projects" />
            <div className="container my-10 mx-auto grid gap-5 sm:grid-cols-1 lg:grid-cols-2">
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
            </div>
        </div>

    );

};

export default Projects;

