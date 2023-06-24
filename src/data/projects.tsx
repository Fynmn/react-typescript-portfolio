import { IProjectCard } from "@/components/ProjectCard";

const projects: IProjectCard[] = [
  {
    title: "Hospilink",
    description:
      "HospiLink is a web application that utilizes machine learning and Google Distance Matrix API to help EMTs transport the patient to the best suitable hospital in the shortest amount of time. I was a front-end developer who made the web app functional by rendering thedata, state management, form validation, form submission, crud operations and animations. I was also a machine learning engineer who developed the model for predicting the hospital facilities, equipment and specialists needed by the patient. I was also a microservice developer who used the exported model and developed an API so applications can make requests to the API for predictions.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/2719744/file/original-7b44670833617cf55327818eb6bc84ce.png?crop=0x0-3201x2401&resize=400x0",
    type: "Development",
    link: "https://booored.vercel.app",
    tags: [
      "JavaScript",
      "React",
      "React Libraies",
      "Next.js",
      "Python",
      "Flask",
      "PHP",
      "TailwindCSS",
      "Git",
      "GitHub",
      "Postman",
      "JupyterLab",
      "Google Colab",
      "Jira",
      "Data Cleaning",
      "Machine Learning",
      "API Development",
    ],
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  {
    title: "Spring Valley Estates Neural Network",
    description:
      "A Residential Estate Management for Spring Valley. Our team developed a web application for the management and mobile application for the residents.",
    imgUrl:
      "https://cdn.dribbble.com/users/2547176/screenshots/15348170/media/1433f78530f2b5a8c9505fd6d699284f.png?compress=1&resize=800x600&vertical=top",
    type: "Design & Development",
    tags: [
      "TypeScript",
      "Next.js",
      "React",
      "React Libraries",
      "TailwindCSS",
      "Flutter",
      "Dart",
      "Figma",
      "Git",
      "Gitlab",
      "PostgreSQL",
      "HTML5",
      "CSS3",
      "API",
      "Chart.js",
    ],
    link: "https://booored.vercel.app",
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  {
    title: "Pollice",
    description:
      "Pollice is an Election System App for WVSU-CICT. As a back-end developer, I created the logic and functionality of our application. I was also the database administrator who designed and managed our database.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4384272/file/original-b51c32bfcb4e7244d725bc362439980e.png?compress=1&resize=1024x768",
    type: "Development",
    tags: [
      "Python",
      "Flask",
      "JavaScript",
      "MongoDB",
      "TailwindCSS",
      "Git",
      "GitHub",
      "Nginx",
      "Linode",
    ],
    link: "https://booored.vercel.app",
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  {
    title: "Interactive Dictionary",
    description:
      "I built a dictionary in different interfaces. (1) CLI, (2) Desktop GUI (3) Web. The CLI app was made with Python. The Desktop GUI app was made with Java following the MVC pattern. I then used JavaFX for the GUI and JSON.simple toolkit to parse JSON text. The Web interface was made with JavaScript and React.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4511869/file/original-6c8445c7882017bad20592639a806356.png?compress=1&resize=1024x768",
    type: "Development",
    tags: ["Python", "Java", "JavaFX", "JavaScript", "React", "Git", "GitHub"],
    link: "https://booored.vercel.app",
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  {
    title: "The Bored Hoomans App",
    description:
      "A website created for bored hoomans with some spare time and looking for ways to spend that time.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4208343/file/original-dd0ee735d64e42fd63fbb81496c4d9b1.jpg?compress=1&resize=1024x768",
    type: "Development",
    tags: [
      "JavaScript",
      "Next.js",
      "React",
      "Git",
      "GitHub",
      "Vercel",
      "API",
      "HTML5",
      "TailwindCSS",
      "CSS3",
    ],
    link: "https://booored.vercel.app",
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  {
    title: "Machine Learning and Data Related Projects",
    description:
      "I have trained several models in order to uncover interesting insights or to make predictions such as the following: (1) predict the hospital facility, equipment and specialist needed by an emergency patient with the patient's condition as inputs; (2) predict the sentiment of a review from the IMDB Dataset with Logistic Regression and Feature Extraction; (3) predict the digit of a handwritten number from 0-9 using a Random Forest Classier; (4) predict the employment in the Philippines with a Time-Series Analysis using Skforecast; (5) nd if there is an association with suicide rate and unemployment.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/5779728/file/original-02887eee802d54333afb3aab085dcc73.png?compress=1&resize=1024x768",
    type: "Data Science",
    tags: [
      "Python",
      "Flask",
      "Machine Learning",
      "Data Science",
      "scikit-learn",
      "pandas",
      "numpy",
      "nltk",
      "Git",
      "GitHub",
      "JupyterLab",
      "Google Colab",
      "Kaggle",
    ],
    link: "https://booored.vercel.app",
    images: [
      "https://picsum.photos/id/1018/1000/600/",
      "https://picsum.photos/id/1015/1000/600/",
      "https://picsum.photos/id/1019/1000/600/",
    ],
  },
  // {
  //   title: "Job Board",
  //   description:
  //     "A website that allows employers to post job openings and job seekers to search for job opportunities. The website has features such as job search, job posting, user authentication, and resume submission.",
  //   imgUrl:
  //     "https://cdn.dribbble.com/userupload/5454629/file/original-6429af9e16d7b554437548da18b52c41.png?compress=1&resize=1024x768",
  //   type: "Data Analytics",
  //   tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3"],
  //   link: "https://booored.vercel.app",
  //   images: [
  //     "https://picsum.photos/id/1018/1000/600/",
  //     "https://picsum.photos/id/1015/1000/600/",
  //     "https://picsum.photos/id/1019/1000/600/",
  //   ],
  // },
];

export default projects;
