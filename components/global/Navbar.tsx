// Navbar.tsx
import Link from "next/link";
import React from "react";
import { routes } from "@/data/global";

type NavbarProps = {
  currentPage: string;
};

export default function Navbar({ currentPage }: NavbarProps) {
  const visibleRoutes = routes.filter((r) => !r.disabled);

  return (
    <header>
      <nav className="flex items-center justify-between">
        <li className="list-none font-bold text-lg cursor-pointer">
          <Link href="/">
            <span className="font-black text-xl flex items-center">
              <img
                className="mr-2 transform hover:rotate-360 hover:scale-75 transition-transform duration-500"
                src="/static/logos/logo_no_text.svg"
                width="60"
                alt="Logo"
              />
              {"Sujeth Lasrado".split("").map((letter, index) => (
                <span
                  key={index}
                  className="hover:text-fun-pink hover:-mt-2 transition-all duration-500 hover:duration-100 click:goodbyeLetterAnim"
                >
                  {letter}
                </span>
              ))}
            </span>
          </Link>
        </li>

        <ul className="flex items-center space-x-10">
          {visibleRoutes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className={`font-medium ${
                  currentPage === route.path ? "text-fun-pink" : ""
                }`}
              >
                {route.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
