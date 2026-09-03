import ProjectList from "./components/projectList";
 const projects= [
  {
    title: 'Cozy Corner Café',
    description:'A responsive café website designed to showcase the café, its menu, and information for customers.',
    technologies:['HTML', 'CSS', 'JavaScript'],
    link: 'https://mma200631.github.io/Cafe-Website/'
  },

  {
    title:'Savourly',
    description:'A recipe discovery web application that allows users to search for recipes, view recipe details, and explore meals using TheMealDB API.',
    technologies:['HTML', 'CSS', 'JavaScripts', 'TheMealDB API'],
    link: 'https://sarvourly.netlify.app/'
  },

  {
    title:' DriveNow-Motors',
    description:'A car rental website that allows users to browse available cars, view car details, and make reservations for their desired vehicles.',
    technologies:['HTML', 'CSS', 'JavaScript'],
    link: 'https://drivenow-motors.netlify.app/'
  },

  {
    title: 'financeTracker',
    description:'A web application that allows users to track their income and expenses, categorize transactions, and visualize their financial data through charts and graphs.',
    technologies:['HTML', 'CSS', 'JavaScripts'],
    link:'https://finance-track-web-app.onrender.com'
  }
 ]

 export default function Home(){
  return(
    <main className='flex flex-col items-center justify-center w-full px-16 py-4 bg-white dark:bg-black'>
      <section className='flex flex-col items-center justify-center w-full gap-4'>
        <h1 className='text-4xl font-bold text-center text-gray-800 dark:text-gray-200'>My Portfolio</h1>
        <p className='text-lg text center text-gray-600 dark:text-gray-400'>
          Welcome to my portfolio! Here, you'll find a collection of my projects that showcase my skills and expertise in web development. Each project represents a unique challenge I tackled, demonstrating my ability to create functional and visually appealing web applications. Feel free to explore the projects and learn more about my work. I'm a full-stack developer building web applications and
          developing my skills in modern web technologies.
          Here are some of my projects ..
        </p>
      </section>
      <ProjectList projects={projects}/>
    </main>
  )
 }