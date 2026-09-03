interface EducationCardProps{
    School: string;
    Degree:string;
    Status:string;
}

export default function EducationCard({School, Degree, Status}:EducationCardProps){
    return(
        <article className='p-4 border-l-4 border-green-600 bg-gray-50 rounded-lg shadow-md dark:bg-gray-800 dark:border-green-400'>
            <h3 className='text-xl font-bold text-gray-800 dark:text-gray-200'>{School}</h3>
            <p className='text-lg text-gray-600 dark:text-gray-400'>{Degree}</p>
            <p className='text-md text-gray-500 dark:text-gray-300'>{Status}</p>
        </article>
    )
}