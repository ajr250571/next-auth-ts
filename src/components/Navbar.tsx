"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data: session } = useSession();
  // console.log(session);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Auth</a>
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
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <details>
                  <summary>{session?.user?.name}</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                      <a>Profile</a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a onClick={() => signOut()}>Logout</a>
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
