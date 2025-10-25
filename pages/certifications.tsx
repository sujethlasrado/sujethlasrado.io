import React from "react";
import Link from "next/link";

export default function Certifications() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-20 px-6 bg-bg">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-fun-gray mb-4">
          Certifications
        </h1>
        <p className="text-sm text-fun-gray mb-8">
          Verified courses and certifications I've completed — skills I use to
          build real projects.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Example certification card - duplicate/replace with your real items */}
          <article className="p-4 rounded-lg bg-white/5 border border-white/6">
            <h3 className="font-semibold text-fun-gray">React Developer</h3>
            <p className="text-xs text-fun-gray-light mt-1">
              Platform — Example Academy
            </p>
            <p className="text-sm text-fun-gray mt-3">
              Hands-on projects with hooks, context, and performance patterns.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-sm text-fun-pink font-medium"
            >
              View credential →
            </a>
          </article>

          <article className="p-4 rounded-lg bg-white/5 border border-white/6">
            <h3 className="font-semibold text-fun-gray">
              Frontend Engineering
            </h3>
            <p className="text-xs text-fun-gray-light mt-1">
              Platform — Example
            </p>
            <p className="text-sm text-fun-gray mt-3">
              Responsive UI, accessibility, and CSS architecture.
            </p>
            <a
              href="#"
              className="inline-block mt-4 text-sm text-fun-pink font-medium"
            >
              View credential →
            </a>
          </article>
        </div>

        <div className="mt-10">
          <p className="text-sm text-fun-gray mb-4">
            Want the full list or copies of credentials?{" "}
            <a
              href="mailto:sujethlasrado0804@gmail.com?subject=Certifications%20Request"
              className="text-fun-pink font-medium"
            >
              Email me
            </a>{" "}
            or check my{" "}
            <a
              href="https://github.com/sujethlasrado"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fun-pink font-medium"
            >
              GitHub
            </a>
            .
          </p>

          <Link href="/">
            <a className="inline-block mt-2 px-4 py-2 rounded-md bg-fun-pink text-white font-medium">
              Back to home
            </a>
          </Link>
        </div>
      </div>
    </main>
  );
}
