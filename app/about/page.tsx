import ContactCard from "../components/contactCard"
import EducationCard from "../components/educationCard"
export default function About(){
    return(
        <main className='max-w-4xl mx-auto px-4 py-12 bg-white dark:bg-black'>
            <h2 className='text-3xl font-bold text-center text-gray-800 dark:text-gray-200'>About Me</h2>
            <p className='text-lg text-center text-gray-600 dark:text-gray-400'>
                I'm a passionate web developer with a strong foundation in both frontend and backend technologies. I enjoy creating innovative solutions and bringing ideas to life through code.
            </p>
            <EducationCard
                School='Brigham Young University-Idaho(BYU-I)'
                Degree='Bachelor of Science in Software Development'
                Status='In Progress'
            />

            <ContactCard
                email='assumptachidinma06@gmail.com'
                phone='+234 9012154259'
                address='No 4 Odetaya stress ikola, Lagos State, Nigeria'
                availability='Open to learning, collaboration, and new opportunities.'
            />

        </main>

    )
}