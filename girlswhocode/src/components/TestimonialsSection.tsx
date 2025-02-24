"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Computer Science Major",
    image: "/wide_GWC.jpg",
    quote:
      "GirlsWhoCode BC has been an incredible support system throughout my CS journey. The workshops and mentorship have boosted my confidence and skills!",
  },
  {
    name: "Emily Chen",
    role: "Software Engineer",
    image: "/wide_GWC.jpg",
    quote:
      "Being part of GirlsWhoCode BC opened up so many opportunities for me. It's where I found my passion for coding and made lifelong friends.",
  },
  {
    name: "Zoe Martinez",
    role: "Tech Entrepreneur",
    image: "/wide_GWC.jpg",
    quote:
      "The support and knowledge I gained from GirlsWhoCode BC were instrumental in launching my tech startup. It's an amazing community!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-l from-orange-100 via-amber-100 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          What Our Members Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={60}
                  height={60}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 italic">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
