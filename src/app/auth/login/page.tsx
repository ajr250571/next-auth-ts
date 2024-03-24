import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl items-center mt-10">
        <div className="card-body">
          <h2 className="card-title">Iniciar Sesión</h2>
          <SigninForm />
          <div className="flex justify-between">
            <p className="text-sm">No tienes Cuenta?</p>
            <Link className="link link-primary" href="/auth/register">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
