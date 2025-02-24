"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-fuchsia-600 via-pink-600 to-purple-600 dark:from-fuchsia-900 dark:via-pink-900 dark:to-purple-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-16 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Empowering Girls in Tech at Brooklyn College
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up animation-delay-200">
              Join our community and unlock your potential in computer science
              and technology.
            </p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 animate-fade-in-up animation-delay-400"
            >
              Join GirlsWhoCode BC
            </Button>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/wide_GWC.jpg"
              alt="Girls coding together"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
