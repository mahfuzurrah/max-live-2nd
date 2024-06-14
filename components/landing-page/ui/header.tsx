"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { useAuth } from '../../../context/AuthContext';

export default function Header() {
  const [top, setTop] = useState<boolean>(true);
  const { user, logout } = useAuth();

  const scrollHandler = () => {
    if (typeof window !== 'undefined') {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    }
  };

  useEffect(() => {
    scrollHandler(); // Initialize the scroll position
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
        <div className="shrink-0 mr-4">
          <Logo className="w-10 h-10 md:w-20 md:h-20" />
        </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              {user ? (
                <>
                  <li>
                    <Link
                      href="/dashboard"
                      title="dashboard"
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3"
                    >
                      <span>Dashboard</span>
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 transition duration-150 ease-in-out"
                    >
                      Déconnexion
                    </button>
                  </li>
                  <p className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">
                    {user.name}
                  </p>
                  {user.profilePicture && (
                    <img
                      src={user.profilePicture}
                      alt="Profile"
                      className="w-9 h-9 rounded-full mr-3"
                    />
                  )}
                </>
              ) : (
                <>
                    <Link
                      href="/sign-in"
                      title="Sign in"
                      className="btn-sm text-white bg-blue-600 hover:bg-blue-700 ml-3"
                    >
                      <span>Sign in</span>
                      <svg
                        className="w-3 h-3 fill-current text-white shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </Link>
                  <li>
                    <Link
                      href="/waiting-list"
                      title="Join the waiting list"
                      className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3"
                    >
                      <span>Join the waiting list</span>
                      <svg
                        className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
