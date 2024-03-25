"use client";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    const res = await axios.post("/api/auth/register", data);
    console.log(res);
    if (res.status === 201) {
      const result = await signIn("credentials", {
        email: res.data.email,
        password: data.password,
        redirect: false,
      });
      if (!result?.ok) {
        console.log(result?.error);
        return;
      }
      router.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-80">
      <label className="input input-bordered input-sm flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="email"
          className="grow"
          placeholder="email@dominio.com"
          autoFocus
          {...register("email", {
            required: {
              value: true,
              message: "El Email es requerido.",
            },
          })}
        />
      </label>
      {errors.email && (
        <span className="text-error text-xs mt-2">{errors.email.message}</span>
      )}
      <label className="input input-bordered input-sm flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
        </svg>
        <input
          type="text"
          className="grow"
          placeholder="Nombre Usuario"
          {...register("username", {
            required: {
              value: true,
              message: "El Username es requerido.",
            },
            maxLength: {
              value: 10,
              message: "Longitud maxima 10 caracteres.",
            },
          })}
        />
      </label>
      {errors.username && (
        <span className="text-error text-xs mt-2">
          {errors.username.message}
        </span>
      )}
      <label className="input input-bordered input-sm flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          placeholder="Contraseña"
          {...register("password", {
            required: {
              value: true,
              message: "La Contraseña es requerido.",
            },
          })}
        />
      </label>
      {errors.password && (
        <span className="text-error text-xs mt-2">
          {errors.password.message}
        </span>
      )}
      <label className="input input-bordered input-sm flex items-center gap-2 mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          className="grow"
          placeholder="Confirmar Contraseña"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirmar Contraseña es requerido.",
            },
          })}
        />
      </label>{" "}
      {errors.confirmPassword && (
        <span className="text-error text-xs mt-2">
          {errors.confirmPassword.message}
        </span>
      )}
      <button type="submit" className="btn btn-primary mt-4 btn-sm">
        Registrarse
      </button>
    </form>
  );
}

export default SignupForm;
