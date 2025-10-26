import Link from "next/link";
import React from "react";
import { footer } from "@/data/global";
import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col w-screen px-5 py-10 border-t border-fun-pink-darker z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => (
          <div key={index} className="text-left mb-5 sm:mb-0">
            <h4 className="uppercase text-fun-gray text-sm font-bold">
              {item.title}
            </h4>
            <div>
              {item.links.map((linkItem, idx) => (
                <div key={idx} className="my-4">
                  {linkItem.leavesWebsite ? (
                    <a
                      href={linkItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="items-center flex"
                    >
                      {linkItem.icon && (
                        <span className="pr-2 -mb-1">
                          <Image
                            src={linkItem.icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </span>
                      )}
                      {linkItem.name}
                    </a>
                  ) : (
                    <Link href={linkItem.link}>{linkItem.name}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="text-center col-span-2 sm:col-auto sm:text-left pt-8 sm:mt-0 sm:pt-0 text-fun-gray border-t border-fun-pink-dark sm:border-0">
          <h4 className="uppercase text-fun-gray text-sm font-bold">
            Quick Contact
          </h4>
          <div className="space-y-2 mt-4 w-full flex items-center sm:items-start flex-col">
            <div className="text-fun-gray-light text-sm">
              <p className="mb-2">📧 sujethlasrado0804@gmail.com</p>
              <p className="mb-2">📍 Essen, Germany</p>
              <p className="mb-2">💼 Available for opportunities</p>
            </div>
            <p className="text-fun-gray text-xs pt-1">
              Ready to turn ideas into reality? Let's connect! ⚡
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark">
        <div className="flex flex-col items-center justify-center">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                width={26}
                height={26}
                alt="React"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                width={40}
                height={26}
                alt="NextJS"
              />
              <Image
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                width={26}
                height={26}
                alt="TailwindCSS"
              />
            </div>
          </div>
          <div className="mt-2 text-xs">
            Made by{" "}
            <a
              href="mailto:sujethlasrado8@gmail.com"
              className="text-fun-gray-light font-medium"
            >
              Sujeth Lasrado
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>

      <div className="mt-8 text-center sm:text-right sm:-mt-12">
        <a
          className="w-auto inline-flex items-center sm:w-auto font-bold flex-shrink text-xs border border-fun-pink px-4 py-2 rounded-xl text-fun-pink cursor-pointer opacity-50"
          href="https://github.com/sujethlasrado"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/static/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
          <span className="ml-2">View Source Code</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
