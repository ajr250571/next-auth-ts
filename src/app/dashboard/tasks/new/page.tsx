"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  title: string;
  description: string;
};

function TaskNewPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
  };
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mb-4">New Project</h2>
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
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskNewPage;
