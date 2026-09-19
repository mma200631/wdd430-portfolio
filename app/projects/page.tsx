import { getProjects } from "../api/lib/projects-db";

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-white px-6 py-10 dark:bg-black md:px-16">
      <section className="flex w-full max-w-6xl flex-col items-center gap-4">
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
          My Projects
        </h1>

        <p className="max-w-4xl text-center text-lg leading-8 text-gray-600 dark:text-gray-400">
          Here are some of the projects I have worked on while developing my
          skills in web development. Each project has helped me learn new
          technologies, solve problems, and improve my ability to build
          functional and user-friendly applications.
        </p>
      </section>

      <section className="mt-12 grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-lg border-l-4 border-blue-600 bg-gray-50 p-4 shadow-md transition duration-300 hover:-translate-y-1 dark:border-blue-400 dark:bg-gray-800"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-gray-200">
              {project.title}
            </h2>

            <p className="text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              <strong>Technologies:</strong>{" "}
              {project.technologies?.join(", ")}
            </p>

            {project.link && (
              <p className="mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  View Project
                </a>
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
}