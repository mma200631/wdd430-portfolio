import { getProjects } from "../../api/lib/projects-db";

export default async function SchoolPage() {
  const projects = await getProjects("school");

  return (
    <main className="min-h-screen px-16 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        School Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border p-6 shadow-sm"
          >
            <h2 className="mb-2 text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mb-3 text-gray-600">
              {project.description}
            </p>

            <p className="text-sm text-gray-500">
              {project.type}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}