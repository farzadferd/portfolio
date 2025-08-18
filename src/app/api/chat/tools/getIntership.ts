import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship or opportunity I'm open to, plus contact info. Use this when someone asks about my internship experience or how to reach me for offers.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s the deal 👇

- 📅 **Availability**: Open to Internship and New Grad positions.
- 🌍 **Location**: Remote or on-site in the **US**.
- 💡 **Focus**: Full-Stack Software Engineering, AI/LLM infrastructure/implementation, Databases, developing applications that solve real-world mess
- 🧠 **Interests**: long-context modeling, hybrid retrieval, metadata games, tool use, orchestration, and AI-native SaaS
- 💼 **Stack**: Java, Spring Boot, Go, Python, React (TypeScript), FastAPI, PostgreSQL, Docker, Socket.io (Web Sockets), Redis, Git, MongoDB, Pytorch, Pandas, NumPy, Matplotlib, TensorFlow, C, C++, Hugging Face, GitLab CI/CD, you name it
- 🎯 **What I bring**: Producing Software Apps that incorporate AI/LLMs, Proficiency in Full-Stack Experience, Growing knowledge in AI/Machine Learning, Infra thinking, Strong communication/collaboration skills, **Speed**
- 🥷 Not just “curious about AI” — I try to build it, test it, break it, fix it.

📬 Wanna build cool stuff?

- Email: fferdous@umass.edu
- LinkedIn: [linkedin.com/farzadferd/](https://www.linkedin.com/in/farzadferd/)  
- GitHub: [github.com/farzadferd](https://github.com/farzadferd)

Contact me if your stack is chaotic and your problem’s juicy. Otherwise… good luck 🤞`;
  },
});
