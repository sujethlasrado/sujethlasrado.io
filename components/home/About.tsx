import React from "react";
import SectionTitle from "../global/SectionTitle";

function About() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="about">
        <SectionTitle title="About Me" />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <p className="text-fun-gray-light text-lg leading-relaxed mb-6">
              I'm a passionate Full Stack Java Developer with extensive
              expertise in building scalable and high-performance web
              applications. I enjoy creating solutions that solve real-world
              problems while delivering smooth and reliable user experiences.
            </p>
            <p className="text-fun-gray-light text-lg leading-relaxed mb-6">
              With a strong foundation in both backend and frontend development,
              I work extensively with Java, Spring Boot, ReactJS, AWS, and
              databases such as PostgreSQL and MongoDB. I'm always eager to
              explore technologies like Kafka and microservices architecture,
              and I thrive on tackling projects that push the boundaries of
              modern web development.
            </p>
            <p className="text-fun-gray-light text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring emerging technologies,
              optimizing system designs, or playing badminton to stay active and
              refreshed.
            </p>
          </div>
          <div className="flex-1">
            <div className="bg-fun-pink-darker p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-fun-pink">
                Quick Facts
              </h3>
              <ul className="space-y-2 text-fun-gray-light">
                <li>• 4+ years of professional experience</li>
                <li>• Best Performing Employee Award at Daimler Truck</li>
                <li>• Saved company 2 million euros through innovation</li>
                <li>• German Chancenkarte (Opportunity Card Visa) holder</li>
                <li>
                  • Expertise in Java, Spring Boot, AWS, and microservices
                </li>
                <li>• Currently learning German (A2 level)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
