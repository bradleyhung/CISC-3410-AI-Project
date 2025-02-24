"use client";

import { Code, Users, Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Code className="h-12 w-12 text-purple-500" />,
    title: "Hands-on Coding Workshops",
    description:
      "Learn programming languages and tools through interactive sessions.",
  },
  {
    icon: <Users className="h-12 w-12 text-pink-500" />,
    title: "Mentorship Program",
    description:
      "Get guidance from experienced professionals in the tech industry.",
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
    title: "Exciting Projects",
    description:
      "Work on real-world projects to build your portfolio and skills.",
  },
  {
    icon: <Award className="h-12 w-12 text-green-500" />,
    title: "Hackathons & Competitions",
    description: "Showcase your skills and win prizes in coding competitions.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 bg-gradient-to-tl from-cyan-100 via-teal-100 to-blue-100 dark:from-cyan-950 dark:via-teal-950 dark:to-blue-950 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20"></div>
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          What We Offer
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
