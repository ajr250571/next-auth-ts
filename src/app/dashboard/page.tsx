import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import ProjectCard from "@/components/projects/ProjectCard";
import prisma from "@/libs/prisma";
import { getServerSession } from "next-auth";

async function loadProjects() {
  const session = await getServerSession(authOptions);
  if (!session) throw new Error("No autorizado.");
  return await prisma.project.findMany({
    where: {
      userId: Number(session?.user.id),
    },
  });
}

async function DashboardPage() {
  const projects = await loadProjects();
  return (
    <div>
      <HeaderDashboard />
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 mt-2">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
