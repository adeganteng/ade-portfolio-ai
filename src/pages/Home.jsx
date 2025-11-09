import { Hero } from "../components/home/Hero";
import { About } from "../components/home/About";
import { Skills } from "../components/home/Skills";
import { FeaturedProjects } from "../components/home/FeaturedProjects";
import { Contact } from "../components/home/Contact";
import { SchoolRoadmap } from "../components/home/SchoolRoadmap";
import { FeaturedExperience } from "../components/home/FeaturedExperience";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <SchoolRoadmap />
      <FeaturedExperience />
      <Skills />
      <FeaturedProjects />
      <Contact />
    </>
  );
};
