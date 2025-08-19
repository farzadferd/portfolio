'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export function Presentation() {
  const profile = {
    name: 'Farzad Ferdous',
    age: '21 years old',
    location: 'Hopkinton, Massachusetts',
    description: `Hi! 👋\nI'm Farzad — Fullstack Software Engineer & Aspiring AI/ML Engineer deep into building software applications, LLMs, RAG pipelines, GenAI systems.\nI work at Lexi, an AI healthcare startup based in Cambridge MA, and love building Software Applications that incorporate AI and have real-world use.\nAlways hungry for tough problems, fast feedback, and creating solutions.`,
    src: '/farzad.JPG', // Replace with your memoji image path
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const paragraphVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 } },
  };

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                unoptimized
                height={500}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphVariants}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line"
          >
            {profile.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2"
          >
            {['LLMs', 'RAG Systems', 'Python', 'GenAI', 'Builder'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
