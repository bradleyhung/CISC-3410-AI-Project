"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          About GirlsWhoCode BC
        </h2>
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="text-gray-800 dark:text-gray-200 text-lg mb-6 leading-relaxed">
              GirlsWhoCode at Brooklyn College is a vibrant community dedicated
              to closing the gender gap in technology. We provide a supportive
              environment for girls and women to learn, grow, and excel in
              computer science.
            </p>
            <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
              Through workshops, mentorship programs, and exciting projects, we
              empower our members to become the next generation of tech leaders
              and innovators.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/thin_gwc.jpg"
              alt="Girls collaborating on a coding project"
              width={500}
              height={400}
              className="rounded-lg shadow-xl hover:scale-105 transition duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
