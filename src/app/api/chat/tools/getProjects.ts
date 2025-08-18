import { tool } from "ai";
import { z } from "zod";

export const getProjects = tool({
  description:
    "This tool shows public-facing projects or side works by Farzad. Use it when the user asks to see portfolio, repos, or demos.",
  parameters: z.object({}),
  execute: async () => {
    return `
Most of my recent work is in production environments for internships and personal projects. Here are some public-facing projects: 

- **Bullseye** — Trading platform with GPT-4o integration for real-time buy/sell recs, portfolio dashboards (FastAPI + Redis), and technical strategy backtesting.
- **Charm** — AI texting assistant using DeepSeek LLM, with tone-customizable replies, chat saving (Spring Boot + PostgreSQL + Redis), and React Native frontend.
- **CodeStrike** — Competitive 1v1 coding battle platform (React + Socket.io + Node/Express + Docker) with real-time timers, matchmaking, and isolated code execution.
- **Breast Cancer Tumor Classification** — Supervised ML models (KNN, Naive Bayes, Decision Tree) on UCI dataset, achieving 95.8% accuracy with feature selection.
- **Predictive Modeling: CA Housing** — Regression models with scikit-learn/Keras to predict home prices, including EDA, geospatial analysis, and ML pipelines.

💡 Wanna dive deeper into one of these? I can walk you through the stack, design choices, and key results.
    `.trim();
  },
});
