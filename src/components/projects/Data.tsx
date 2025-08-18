import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Bullseye',
    description:
      'an AI-powered (GPT-4o) trading assistant that helps users track portfolio performance, analyze real-time stock data, and receive intelligent trading signals. Built with FastAPI, React, and PostgreSQL, it provides a seamless, data-driven trading experience.',
    techStack: [
      'Python',
      'FastAPI',
      'GPT-4o',
      'Alpha Vantage',
      'Backtrader',
      'React',
      'HTML/CSS',
      'Pandas',
      'NumPy',
      'PostgreSQL',
    ],
    date: 'February 2025 - Present',
    links: [{ name: 'Github', url: 'https://github.com/farzadferd/bullseye'}],
    images: [],
  },
  {
    title: 'Charm',
    description:
      'an AI-powered texting assistant that helps men craft confident, playful, and engaging messages. It provides personalized reply suggestions, saves past chats, and offers smart tips to improve dating conversations. ',
    techStack: [
      'React',
      'TypeScript',
      'Springboot',
      'DeepSeek API',
      'PostgreSQL',
      'Redis',
    ],
    date: 'April 2025 - Present',
    links: [{ name: 'Github', url: 'https://github.com/farzadferd/CharmGPT' }],
    images: [],
  },
  {
    title: 'CodeStrike',
    description:
      'A competitive coding platform where users face off in 1v1 battles, solving LeetCode-style problems in a 10-minute timed match. Players write and test code in a built-in editor, and winners are determined by solution correctness and efficiency. Integrated Docker to securely isolate and evaluate user-submitted code in scalable containers, preventing execution risks and enabling safe, efficient code testing in the competitive environment.',
    techStack: [
      'React',
      'Node.js',
      'Socket.io',
      'Docker',
      'CodeMirror',
      'Express.js',
    ],
    date: 'September 2024 - December 2024',
    links: [{ name: 'Github', url: 'https://github.com/farzadferd/codestrike' }],
    images: [],
  }
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="text-neutral-700 dark:text-neutral-200">
      <p className="mb-6 text-sm md:text-base">
        {projectData.description}
      </p>

      {projectData.techStack && (
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {projectData.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-6">
          <h3 className="mb-2 text-lg font-semibold">Links</h3>
          <div className="flex flex-wrap gap-4">
            {projectData.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
              >
                <Link className="h-4 w-4" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Personal Project',
    title: 'Bullseye',
    src: '/syntopreview.png', // Placeholder image
    content: <ProjectContent project={{ title: 'Bullseye' }} />,
  },
  {
    category: 'Personal Project',
    title: 'Charm',
    src: '/syntopreview.png', // Placeholder image
    content: <ProjectContent project={{ title: 'Charm' }} />,
  },
  {
    category: 'Group Startup',
    title: 'CodeStrike',
    src: '/syntopreview.png', // Placeholder image
    content: <ProjectContent project={{ title: 'CodeStrike' }} />,
  },
];
