interface ProjectCardProps {
    title:string;
    description:string;
    technologies:string[];
    link?:string;
}

export default function ProjectCard({title, description, technologies, link}:ProjectCardProps){
    return(
        <article className='p-4 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-blue-400'>
            <h3 className='text-xl font-semibold mb-2'>{title}</h3>
            <p className='text-gray-600 dark:text-gray-300'>{description}</p>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
                <strong>Technologies:</strong>{technologies.join(', ')}
            </p>
            {link &&(
                <p className='mt-2'>
                    <a href={link} target='_blank' rel='noopener noreferrer' className='text-blue-600 dark:text-blue-400 hover:underline'>View Project</a>
                </p>
            )}
            

        </article>
    )
}