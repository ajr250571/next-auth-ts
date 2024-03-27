"use client";

import axios from "axios";
import { useRouter, useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

type Inputs = {
  title: string;
  description: string;
};

function TaskNewPage() {
  const router = useRouter();
  const params = useParams() as { projectId: string };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!params.projectId) {
      const res = await axios.post("/api/projects", data);
      if (res.status === 201) {
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      const res = await axios.put(`/api/projects/${params.projectId}`, data);
      if (res.status === 200) {
        router.push("/dashboard");
        router.refresh();
      }
    }
  };
  const handlerDelete = async (projectId: string) => {
    console.log(projectId);
    const res = await axios.delete(`/api/projects/${projectId}`);
    // console.log(res);
    if (res.status === 200) {
      toast.success("Project deleted.");
    }
    router.push("/dashboard");
    router.refresh();
  };

  useEffect(() => {
    if (params.projectId) {
      axios.get(`/api/projects/${params.projectId}`).then((res) => {
        setValue("title", res.data.title);
        setValue("description", res.data.description);
      });
    }
  }, []);

  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">
            {params.projectId ? "Edit Project" : "New Project"}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-80 gap-y-2"
          >
            <input
              type="text"
              placeholder="Title"
              className="input input-bordered input-sm"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title es requerido.",
                },
              })}
            />
            {errors.title && (
              <span className="text-error text-xs font-bold">
                {errors.title.message}
              </span>
            )}
            <textarea
              placeholder="Description"
              className="textarea textarea-bordered textarea-sm h-24"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description es requerido.",
                },
              })}
            />
            {errors.description && (
              <span className="text-error text-xs font-bold">
                {errors.description.message}
              </span>
            )}

            <button type="submit" className="btn btn-primary">
              {params.projectId ? "Save Project" : "Create Project"}
            </button>
          </form>
          {params.projectId && (
            <button
              onClick={() => handlerDelete(params.projectId)}
              className="btn btn-error"
            >
              Delete Project
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskNewPage;
