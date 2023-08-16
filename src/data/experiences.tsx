import { IExperienceCardProps } from "@/components/ExperienceElement";

const experiences: IExperienceCardProps[] = [
  {
    job_title: "Software Engineer Trainee",
    company: "Spring Valley Tech Corp.",
    start_date: "January 30, 2023",
    end_date: "May 10, 2023",
    description:
      "Collaborated with a team of 5 to create a startup project from scratch. Designed the mobile app and web app in Figma as the lead UI/UX designer. Brought the designs to life as a frontend developer for both the mobile app and web app.",
    tech_stack:
      "React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, Figma, Chart.js, Flutter, Dart, Git, GitLab, tRPC",
  },
  {
    job_title: "Front-end Developer",
    company: "Alpha Four",
    start_date: "August 7, 2023",
    end_date: undefined,
    description:
      "Creating high-quality no-code web applications for enterprises, characterized by seamless functionality, robust capabilities, and distinctive features.",
    tech_stack: "Bubble.io, Linear, Notion, Slack",
  },
];

export default experiences;
