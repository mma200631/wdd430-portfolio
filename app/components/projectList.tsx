import ProjectCard from "./projectCard";

interface project{
    title:string;
    description:string;
    technologies:string[];
    link?:string;
}

interface ProjectListProps{
    projects:project[];
}

export default function ProjectList(projects:ProjectListProps){
    return(
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.projects.map((project)=>(
                <ProjectCard key={project.title} title={project.title} description={project.description} technologies={project.technologies} link={project.link} />
            ))
            }

        </section>
    )
}