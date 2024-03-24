import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl items-center mt-10">
        <div className="card-body">
          <h2 className="card-title">Registrarse</h2>
          <SignupForm />
          <div className="flex justify-between">
            <p>Ya tienes una Cuenta?</p>
            <Link className="link link-primary" href="/auth/login">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
