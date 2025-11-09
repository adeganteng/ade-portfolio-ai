import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProjectFilter } from "../components/projects/ProjectFilter";
import { ProjectGrid } from "../components/projects/ProjectGrid";
import projectsData from "../assets/data/projects.json";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projectsData;
    }
    return projectsData.filter((project) =>
      project.tags.some((tag) =>
        tag.toLowerCase().includes(activeFilter.toLowerCase())
      )
    );
  }, [activeFilter]);

  return (
    <div className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <div
            className="w-20 h-1 mx-auto mb-4 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
            }}
          />
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects I've worked on, from web applications to
            mobile apps and AI integrations.
          </p>
        </motion.div>

        {/* Filter */}
        <ProjectFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <ProjectGrid projects={filteredProjects} />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found for this filter.
            </p>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Total Projects */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              {projectsData.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Total Projects
            </div>
          </div>

          {/* Featured */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-secondary)" }}
            >
              {projectsData.filter((p) => p.featured).length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Featured
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-accent)" }}
            >
              {new Set(projectsData.flatMap((p) => p.tags)).size}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>

          {/* Years Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
            <div
              className="text-3xl font-bold mb-2"
              style={{ color: "var(--color-primary)" }}
            >
              2+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Years Experience
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
