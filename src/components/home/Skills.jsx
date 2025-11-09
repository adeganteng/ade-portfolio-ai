import { motion } from "framer-motion";
import { ScrollSection, ScrollItem } from "../effects/ScrollAnimations";

const skillCategories = [
  {
    category: "Hard Skill",
    skills: [
      { name: "Frontend", level: 50 },
      { name: "Backend", level: 45 },
      { name: "AI Integration", level: 50 },
      { name: "AI Collaboration", level: 99 },
      { name: "Git", level: 85 },
    ],
  },
  {
    category: "Soft Skill",
    skills: [
      { name: "Problem Solving", level: 99 },
      { name: "Teamwork", level: 99 },
      { name: "Communication", level: 90 },
      { name: "Time Management", level: 90 },
      { name: "Adaptability", level: 99 },
    ],
  },
  {
    category: "Language",
    skills: [
      { name: "Indonesian", level: 99 },
      { name: "English", level: 60 },
      { name: "Javanese", level: 99 },
      { name: "Reading Arabic", level: 90 },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "Canva", level: 90 },
      { name: "Corel Draw", level: 75 },
      { name: "Microsoft Office", level: 90 },
      { name: "Draw Io", level: 80 },
    ],
  },
];

const SkillBar = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1.2,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="h-full rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
          }}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
              Skills & Expertise
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
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: catIndex * 0.15, duration: 0.6 }}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span
                    className="w-2 h-8 rounded-full mr-3"
                    style={{
                      background:
                        "linear-gradient(180deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                    }}
                  />
                  {category.category}
                </h3>
                <div>
                  {category.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
