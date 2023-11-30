import Title from '../../../Component/Title/Title';


import projects from '../../../ProjectData/ProjectData';
import ProjectCard from "./ProjectCard";

const Projects = () => {


    console.log(projects);


    return (

        <div>
            <Title text="My Projects" />
            <div className="container my-10 mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, i) => (
                    <ProjectCard project={project} key={i} />
                ))}
            </div>
        </div>

    );

};

export default Projects;

