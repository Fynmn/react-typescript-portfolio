import { IProjectCard } from "@/components/ProjectCard";

const projects: IProjectCard[] = [
  {
    title: "E-Commerce Website",
    description:
      "An online store that allows users to buy and sell products. The website has features such as shopping cart, user authentication, product listing, product search, and payment gateway integration.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/2719744/file/original-7b44670833617cf55327818eb6bc84ce.png?crop=0x0-3201x2401&resize=400x0",
    type: "Development",
    tags: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Social Media App",
    description:
      "A social media platform where users can create profiles, post updates, and interact with other users. The app has features such as newsfeed, commenting, liking, messaging, and user authentication.",
    imgUrl:
      "https://cdn.dribbble.com/users/2547176/screenshots/15348170/media/1433f78530f2b5a8c9505fd6d699284f.png?compress=1&resize=800x600&vertical=top",
    type: "Development",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Fitness Tracker",
    description:
      "An app that allows users to track their fitness activities such as workouts, calories burned, and steps taken. The app has features such as user authentication, data visualization, and goal setting.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4384272/file/original-b51c32bfcb4e7244d725bc362439980e.png?compress=1&resize=1024x768",
    type: "Development",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Chart.js"],
  },
  {
    title: "Food Delivery App",
    description:
      "A mobile app that allows users to order food from nearby restaurants for delivery. The app has features such as user authentication, restaurant search, menu browsing, ordering, and payment gateway integration.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4511869/file/original-6c8445c7882017bad20592639a806356.png?compress=1&resize=1024x768",
    type: "Design",
    tags: ["React Native", "Node.js", "Express.js", "MongoDB", "Stripe"],
  },
  {
    title: "Online Learning Platform",
    description:
      "A platform that provides online courses for students. The website has features such as course catalog, enrollment, progress tracking, discussion forums, and user authentication.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/4208343/file/original-dd0ee735d64e42fd63fbb81496c4d9b1.jpg?compress=1&resize=1024x768",
    type: "Design",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "GraphQL"],
  },
  {
    title: "Real Estate Listing",
    description:
      "A website that allows users to search for properties for rent or sale. The website has features such as property search, property listing, user authentication, and payment gateway integration.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/5779728/file/original-02887eee802d54333afb3aab085dcc73.png?compress=1&resize=1024x768",
    type: "Design",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Google Maps API"],
  },
  {
    title: "Job Board",
    description:
      "A website that allows employers to post job openings and job seekers to search for job opportunities. The website has features such as job search, job posting, user authentication, and resume submission.",
    imgUrl:
      "https://cdn.dribbble.com/userupload/5454629/file/original-6429af9e16d7b554437548da18b52c41.png?compress=1&resize=1024x768",
    type: "Data Analytics",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "AWS S3"],
  },
];

export default projects;
