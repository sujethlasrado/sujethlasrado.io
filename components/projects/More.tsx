import React from "react";

function More() {
  return (
    <div className="py-20">
      <p className="text-sm text-fun-gray mb-4">
        Hey — I've got even more work and experiments on
      </p>

      <a
        href="https://github.com/sujethlasrado"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit my GitHub"
        className="group relative inline-flex items-center gap-3 font-semibold text-lg text-white bg-gradient-to-r from-gray-800 via-[#6e5494] to-gray-700 rounded-xl px-4 py-2 shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6e5494]/60"
      >
        <img
          src="/static/icons/github-f.svg"
          alt="GitHub"
          className="h-5 w-5 transition-transform group-hover:scale-110"
        />
        <span>My GitHub</span>

        {/* replaced the blurry overlay with a subtle, non-blurring highlight */}
        <span
          className="absolute inset-0 rounded-xl bg-white/5 opacity-0 group-hover:opacity-80 transition-opacity pointer-events-none"
          aria-hidden="true"
        />
      </a>
    </div>
  );
}

export default More;
