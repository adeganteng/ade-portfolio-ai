import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { ScrollSection } from "../effects/ScrollAnimations";
import experienceData from "../../assets/data/experience.json";

export const FeaturedExperience = () => {
  const featuredExperiences = experienceData.filter((exp) => exp.featured);

  const formatDate = (start, end, current) => {
    const startDate = new Date(start).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    const endDate = current
      ? "Present"
      : new Date(end).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        });
    return `${startDate} - ${endDate}`;
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollSection>
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>
            <motion.div
              className="w-20 h-1 mx-auto rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
              }}
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4"
            >
              My professional journey and key accomplishments
            </motion.p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredExperiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card
                  className="p-6 h-full flex flex-col bg-white dark:bg-gray-800 border transition-colors duration-300 rounded-xl"
                  style={{ borderColor: "var(--color-primary, #e5e7eb)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.borderColor = "var(--color-primary)")
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p
                        className="font-semibold"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>
                        {formatDate(exp.startDate, exp.endDate, exp.current)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={16} />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link to="/experience">
              <Button
                size="lg"
                variant="outline"
                className="border-2 transition-all duration-300"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "var(--color-primary)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "var(--color-primary)";
                }}
              >
                View Full Timeline
                <ExternalLink size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
