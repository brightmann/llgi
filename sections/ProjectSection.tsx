import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";
import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import mewwme from "public/projects/mewwme-og.svg";
import virtualphotography from "public/projects/virtualphotography.svg";
import somniaProject from "public/projects/somnia-project.svg";
import mewstify from "public/projects/mewstify-blog.svg";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection, onSectionChange]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in my{" "}
        <Link href="https://github.com/lrmn7" legacyBehavior>
          <a className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap">
            Github
          </a>
        </Link>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Mewwme's",
    type: "Frontend",
    image: (
      <Image
        src={mewwme}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "The Discord music bot that's 100% free with no payment or votes required to access all its amazing functionalities.",
    tags: ["Discord bot", "Discord music", "Radio FM", "Music 24/7"],
    liveUrl: "https://meww.me/",
    codeUrl: "https://github.com/mewwme/",
    bgColor: "bg-[#B4BEE0]",
  },
  {
    title: "Mewstify",
    type: "Frontend",
    image: (
      <Image
        src={mewstify}
        sizes="100vw"
        fill
        alt="mewstify"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "Discover your top artists and songs on Spotify and enjoy your stats with beautiful visuals",
    tags: ["Spotify Stats", "Mewstify", "Spotify"],
    liveUrl: "https://mewstify.vercel.app/",
    codeUrl: "https://github.com/lrmn7/mewstify",
    bgColor: "bg-[#9FD0E3]",
  },
{
  title: "Virtual Photography Portfolio",
  type: "Creative",
  image: (
    <Image
      src={virtualphotography}
      sizes="100vw"
      fill
      alt="Virtual Photography Portfolio"
      className="transition-transform duration-500 hover:scale-110 object-cover"
    />
  ),
  desc: "A personal virtual photography portfolio featuring cinematic in-game photos captured across multiple games using photomode, exploring atmosphere, storytelling and visual emotion.",
  tags: ["Virtual Photography", "Gaming", "Photomode", "Creative", "Portfolio"],
  liveUrl: "https://vp.lrmn.link/",
  codeUrl: "https://github.com/lrmn7/",
  bgColor: "bg-[#C7B8FF]",
},
  {
    title: "Somnia Testnet Hub",
    type: "Frontend",
    image: (
      <Image
        src={somniaProject}
        sizes="100vw"
        fill
        alt="Somnia Testnet Project Hub"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "A project hub showcasing my Somnia Network testnet builds, experiments, and live demos during the Somnia phase testnet.",
    tags: ["Somnia Network", "Testnet", "Web3", "Project Hub", "Frontend"],
    liveUrl: "https://elsom.pages.dev/",
    codeUrl: "https://github.com/lrmn7",
    bgColor: "bg-[#9FD0E3]",
  },
];

export default ProjectSection;
