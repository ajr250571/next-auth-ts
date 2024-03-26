"use client";

import Link from "next/link";

function DashboardPage() {
  return (
    <div className="container flex justify-between">
      <h1 className="text-3xl text-primary">Tasks</h1>
      <Link className="btn btn-primary btn-sm" href="/dashboard/tasks/new">
        New Task
      </Link>
    </div>
  );
}

export default DashboardPage;
