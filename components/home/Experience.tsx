import React from "react";
import SectionTitle from "../global/SectionTitle";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Developer",
    company: "Daimler Truck Innovation Centre India",
    period: "08/2023 - Present",
    description: [
      "Developed microservices using Java, Spring Boot, Docker, Kubernetes, and Maven to improve repair time automation, reducing manual processing time by 60%",
      "Integrated Redis and Oracle DB to optimize high-volume data storage and retrieval, enhancing data access latency by 35%",
      "Automated CI/CD pipeline with Jenkins and Jfrog, cutting deployment times by 40% and minimizing release downtime",
      "Ensured GDPR-compliant secure APIs with OAuth 2.0 and REST standards, achieving 100% internal audit clearance",
      "Led cross-team technical discussions with German stakeholders, contributing to 4 successful production releases",
      "Received the Best Performing Employee Award for saving 2 million euros for the company in Mediahub",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Maven",
      "Oracle DB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "OAuth 2.0",
    ],
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "GlobalLogic India Pvt Ltd",
    period: "08/2022 - 08/2023",
    description: [
      "Curated and validated 2000+ prompts using Regex and proprietary tools, increasing AI accuracy by 35%",
      "Worked with the Google US team on model training, helping reduce false positives in generative responses by 25%",
      "Debugged production issues using CL Editor and Cider, ensuring 99.9% system availability",
      "Defined ethical guidelines for user scenarios, increasing compliance alignment for regulated regions",
      "Received performance bonus and 'Pat on the Back' award for code quality and cross-team collaboration",
    ],
    technologies: [
      "Regex",
      "Cider",
      "CL Editor",
      "Piper",
      "Critique",
      "CL workflow",
    ],
  },
  {
    id: 3,
    title: "Backend Developer",
    company: "Sclera | Access Research Labs",
    period: "03/2021 - 08/2022",
    description: [
      "Designed Java-based REST APIs using Spring Boot for asset workflows, reducing system latency by 45%",
      "Integrated SNMP and BACnet support for industrial devices, expanding system coverage to 1200+ endpoints",
      "Created custom Linux CLI monitoring scripts and deployed an incident dashboard using AWS CloudWatch, saving $50K annually",
      "Developed an internal SIEM tool and integrated it with Secureframe and Splunk, achieving SOC 2 Type I and II certifications",
      "Received executive appreciation for launching critical features under tight timelines",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Maven",
      "MongoDB",
      "AWS",
      "Docker",
      "REST APIs",
      "Linux CLI",
      "SOC2",
    ],
  },
];

function Experience() {
  return (
    <div className="flex flex-col text-left justify-between pt-8 relative">
      <div id="experience">
        <SectionTitle title="Professional Experience" />
      </div>
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="bg-fun-pink-darker p-4 rounded-lg">
                    <h3 className="text-xl font-bold text-fun-pink mb-2">
                      {experience.title}
                    </h3>
                    <p className="text-fun-gray-light font-semibold mb-1">
                      {experience.company}
                    </p>
                    <p className="text-fun-gray text-sm">{experience.period}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-fun-gray-light flex items-start"
                      >
                        <span className="text-fun-pink mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-fun-pink-darker text-fun-pink text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <div className="absolute left-4 md:left-1/3 top-16 w-0.5 h-8 bg-fun-pink-darker"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
