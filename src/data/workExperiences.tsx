import { IWorkExperience } from "@/types/workExperience";

const workExperiences: IWorkExperience[] = [
  {
    id: 1,
    title: "Software Engineer Trainee",
    company: "Spring Valley Tech Corp.",
    location: "Bago, Philippines",
    startDate: "January 2023",
    endDate: "May 2023",
    description: [
      "Collaborated with a team of 5 for a a startup project encompassing a mobile app, an admin dashboard, and a back-end service.",
      "Designed the mobile app and web app in Figma as the lead UI/UX designer.",
      "Brought the designs to life as a frontend developer for both mobile and web app.",
      "Implemented responsive designs and interactive features using Next.js and React for the web application.",
      "Developed some features of the mobile application using Flutter and Dart."
    ],
    technologies: [
      "React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", 
      "TailwindCSS", "Figma", "Chart.js", "Flutter", "Dart", "Git", 
      "GitLab", "Mobile Development", "Web Development"
    ],
    icon: "💼",
    jobType: "Internship",
    workMode: "On-site"
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    company: "Alpha Four",
    location: "North Carolina, USA",
    startDate: "August 2023",
    endDate: "June 2025",
    description: [
      "Collaborated with cross-functional teams of developers, designers, and an agency to build a high-growth platform for marketers—combining community (like Facebook Groups), learning (like Udemy), and discussion (like Reddit), with integrated AI and rich resource libraries.",
      "Developied a fully responsive and scalable app with seamless functionality, robust capabilities and distinctive features.",
      "Built a custom microservice using Python and Flask (deployed on Railway) to power an AI chatbot with Retrieval-Augmented Generation (RAG) for contextual, document-based responses.",
      "Integrated the app with a PHP backend to enable upgrade, downgrade, and purchase functionalities via InfusionSoft.",
      "Integrated dynamic resource content and contributed across frontend, backend, and API connections."
    ],
    technologies: [
      "Bubble.io", "HTML", "CSS", "JavaScript", "Python", "Flask", 
      "Retrieval-Augmented Generation", "OpenAI", "API Development", 
      "Railway", "Git", "GitHub", "Figma", "Weweb.io", "Mobile Development", "Web Development","Linear"
    ],
    icon: "🧠",
    jobType: "Full-time",
    workMode: "Remote"
  },
  {
    id: 3,
    title: "Technical Lead (Solo Developer)",
    company: "The Coaching Gig",
    location: "Wellington, New Zealand",
    startDate: "October 2023",
    endDate: "Present",
    description: [
      "Led the end-to-end development and successful launch of a cross-platform mobile app for sports coaches and teachers, deployed on both the App Store and Play Store.",
      "Managed the full product lifecycle, from concept through to deployment and iteration.",
      "Built a custom Admin CMS for managing content, users, and push notifications.",
      "Integrated Mixpanel to monitor user behavior, engagement, and app performance.",
      "Collaborated on UI/UX design to deliver an intuitive and engaging user experience."
    ],
    technologies: [
      "Bubble.io", "Figma", "JavaScript", "HTML", "CSS",
      "Natively", "Mixpanel", "Mobile Development", "Web Development", "Linear"
    ],
    icon: "🚀",
    jobType: "Part-time",
    workMode: "Remote"
  },
//   {
//     id: 4,
//     title: "Full-Stack Software Engineer / Project Lead",
//     company: "Freelance Projects",
//     location: "Worldwide",
//     startDate: "August 2025",
//     endDate: "Present",
//     description: [
//       "Leading a team of 3 developers to deliver high-quality freelance projects across web and mobile platforms.",
//       "Building and deploying custom applications primarily using Bubble.io and Next.js.",
//       "Overseeing end-to-end development: database design, workflows, UI/UX, and third-party API integrations.",
//       "Implementing AI-driven features using OpenAI APIs for chatbots, automation, and content generation.",
//       "Working closely with clients to scope requirements, manage timelines, and ensure successful MVP launches.",
//       "Utilizing tools like Linear to track progress, assign tasks, and maintain team productivity."
//     ],
//     technologies: [
//       "Bubble.io", "Next.js", "Figma", "JavaScript", "HTML", "CSS",
//       "Natively", "OpenAI", "Mobile Development", "Web Development", "Linear"
//     ],
//     icon: "🛠️",
//     jobType: "Part-time",
//     workMode: "Remote"
//   }
];

export default workExperiences; 