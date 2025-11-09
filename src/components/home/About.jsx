import { motion } from "framer-motion";
import { Code, Database, Smartphone, Brain } from "lucide-react";
import { Card } from "../ui/Card";
import { ScrollSection } from "../effects/ScrollAnimations";
import profilePhoto from "../../assets/images/profile.jpg"; // sesuaikan path

const highlights = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and modern web applications with AI",
  },
  {
    icon: Database,
    title: "Backend Systems",
    description: "Designing scalable server-side architectures with AI",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Creating cross-platform mobile experiences with AI",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Implementing AI-powered features with AI",
  },
];

export const About = () => {
  return (
    <section
      id="about"
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
              About Me
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Box */}
              <div
                className="relative aspect-square rounded-2xl p-1 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                }}
              >
                <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-8xl overflow-hidden group">
                  {/* Emoji (default) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 group-hover:opacity-0 gap-4">
                    {/* Emoji */}
                    <span className="text-8xl">👨‍💻</span>

                    {/* Text */}
                    <span className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center px-4">
                      Hover to reveal the mystery! 🎭
                    </span>
                  </div>

                  {/* Your Photo (appears on hover) */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <img
                      src={profilePhoto}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative Blur Elements */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl opacity-30"
                style={{ background: "var(--color-accent)" }}
              />
              <div
                className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-3xl opacity-30"
                style={{ background: "var(--color-primary)" }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                Hi, I'm a Learning Enthusiast
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm currently in my final semester studying Information Systems,
                passionate about creating innovative web solutions that make a
                difference. With experience in Laravel, React, Node.js, and
                Python, I enjoy tackling complex problems and building
                user-friendly applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you can find me trail running in the
                mountains, exploring new technologies, or learning about
                investment strategies. I'm always eager to learn and grow as a
                developer.
              </p>

              {/* Tags/Badges */}
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  }}
                >
                  🎓 Information Systems
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
                  }}
                >
                  💻 Ordinary Developer
                </span>
                <span
                  className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md"
                  style={{
                    background:
                      "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
                  }}
                >
                  🏃 Trail Runner
                </span>
              </div>
            </motion.div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="p-6 text-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 h-full">
                  <div
                    className="inline-flex p-4 rounded-xl mb-4"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
                    }}
                  >
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </ScrollSection>
      </div>
    </section>
  );
};
