export interface IExperienceCard {
  job_title: string;
  company: string;
  start_date: string;
  end_date: string;
  skills: string[];
}

const experiences: IExperienceCard[] = [
  {
    job_title: "Software Engineer Trainee",
    company: "Spring Valley Tech Crop.",
    start_date: "January 30, 2023",
    end_date: " - May 10, 2023",
    skills: [
      "React, Next.js, JavaScript, TypeScript, HTML, CSS, TailwindCSS, Figma, Chart.js, Flutter, Dart, Git, GitLab, tRPC",
    ],
  },
  {
    job_title: "Front-end Developer",
    company: "Alpha Four",
    start_date: "August 7, 2023",
    end_date: " - present",
    skills: ["Bubble.io"],
  },
];

export default experiences;
