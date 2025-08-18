import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Farzad Ferdous. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Farzad Ferdous — a 20-year-old Full-Stack Software Engineer & Aspiring AI/ML Engineer from Massachusetts. I have worked as a Software Engineer Intern at Lexi, an AI healthcare translation startup, where I created a landing website and contributed to different features, such as a settings feature, playback speed, and voice cloning. I also coded full-stack applications (with AI implementation), such as Bullseye, Charm, and Codestrike. I specialize in full-stack development across React, FastAPI, Spring Boot, PostgreSQL, MongoDB with expertise in AI/ML systems including LLM integration, model training, and deployment for real-world applications. I love solving real problems with AI and software engineering. I hope to learn and grow my skills as an engineer from other like-minded people.",
    };
  },
});
