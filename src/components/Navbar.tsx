"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="navbar bg-base-100 border-b-2 mb-2">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          PPK
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {!session && (
            <>
              <li>
                <Link href="/auth/login">Login</Link>
              </li>
              <li>
                <Link href="/auth/register">Register</Link>
              </li>
            </>
          )}

          {session && (
            <>
              <li>
                <Link href="/dashboard">Tasks</Link>
              </li>
              <li>
                <details>
                  <summary className="bg-primary rounded-br-3xl">
                    {session?.user?.name}
                  </summary>
                  <ul className="p-2 bg-primary rounded-t-none">
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a
                        className="text-error font-bold"
                        onClick={() => signOut()}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </details>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
