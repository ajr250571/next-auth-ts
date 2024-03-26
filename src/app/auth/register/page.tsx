import SignupForm from "@/components/auth/SignupForm";
import Link from "next/link";

function RegisterPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)] items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl items-center">
        <div className="card-body">
          <h2 className="card-title mb-4">Registrarse</h2>
          <SignupForm />
          <div className="flex justify-between">
            <p className="text-sm">Ya tienes Cuenta?</p>
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
