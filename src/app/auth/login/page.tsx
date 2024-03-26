import SigninForm from "@/components/auth/SigninForm";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-5rem)]  items-center justify-center">
      <div className="card h-auto w-auto bg-base-200 shadow-xl items-center">
        <div className="card-body">
          <h2 className="card-title mb-4">Iniciar Sesión</h2>
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
