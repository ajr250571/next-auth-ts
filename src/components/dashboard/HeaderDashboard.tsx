"use client";
import { useRouter } from "next/navigation";

function HeaderDashboard() {
  const route = useRouter();
  return (
    <div className="container flex justify-between">
      <h1 className="text-2xl text-primary">Projects</h1>
      <button
        className="btn btn-primary btn-sm rounded-2xl"
        onClick={() => {
          route.push("/dashboard/projects/new");
        }}
      >
        New Project
      </button>
    </div>
  );
}

export default HeaderDashboard;
