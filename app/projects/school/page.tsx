export default async function SchoolPage() {
  const response = await fetch(
    "http://localhost:3000/api/projects?type=school"
  );

  const projects = await response.json();

  return (
    <main className="min-h-screen px-16 py-12">
      <h1 className="mb-8 text-4xl font-bold">
        School Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          (project: { id: number; name: string; type: string }) => (
            <div
              key={project.id}
              className="rounded-xl border p-6 shadow-sm"
            >
              <h2 className="mb-2 text-2xl font-semibold">
                {project.name}
              </h2>

              <p className="text-gray-600">
                {project.type}
              </p>
            </div>
          )
        )}
      </div>
    </main>
  );
}