import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";
import schoolData from "../../assets/data/school.json";

const formatDate = (start, end, current) => {
  const startDate = new Date(start).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
  const endDate = current
    ? "Present"
    : new Date(end).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      });
  return `${startDate} - ${endDate}`;
};

export const SchoolRoadmap = () => {
  return (
    <section
      id="school"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Academic Background
        </motion.h2>

        <div className="relative">
          {/* vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 rounded"
            style={{
              background:
                "linear-gradient(to bottom, var(--color-primary), var(--color-secondary), var(--color-accent))",
            }}
          />

          {/* school items */}
          <div className="space-y-12 ml-14">
            {schoolData.map((school, idx) => (
              <motion.div
                key={school.id}
                className="relative"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                {/* dot */}
                <div
                  className="absolute -left-10 top-2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-900 z-10"
                  style={{
                    background: "var(--color-secondary)",
                  }}
                />

                {/* content */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {school.name}
                  </h3>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {school.degree}
                  </p>

                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mt-2 mb-4 text-sm">
                    <Calendar size={16} />
                    <span>
                      {formatDate(
                        school.startDate,
                        school.endDate,
                        school.current
                      )}
                    </span>
                    <MapPin size={16} />
                    <span>{school.location}</span>
                  </div>

                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                    {school.achievements.map((achieve, i) => (
                      <li key={i}>{achieve}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
