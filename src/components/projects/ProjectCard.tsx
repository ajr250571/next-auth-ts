"use client";

import { Project } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  project: Project;
}
function ProjectCard({ project }: Props) {
  const route = useRouter();
  return (
    <div
      onClick={() => {
        route.push(`/dashboard/projects/${project.id}`);
      }}
      className="card card-compact bg-secondary text-secondary-content"
    >
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
