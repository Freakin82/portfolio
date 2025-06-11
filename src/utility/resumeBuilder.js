const { REACT_APP_RESUME_DRIVE_ID } = process.env;
export const resume = {
  name: 'Paranjal Dwivedi',
  email: 'paranjal82@gmail.com',
  Phone: '+917251992882',
  address: 'Gurugram, Haryana, India',
  resumeDriveLinkCode:
    REACT_APP_RESUME_DRIVE_ID ?? '1Aou8wDfROpJoqG4k6WQdlV2T5zfnUa1x',
  dob: {
    month: 'March',
    year: '2000',
    date: 7,
  },
  links: {
    github: 'https://github.com/Freakin82',
    facebook: '',
    linkedIn: 'https://www.linkedin.com/in/dwivedi-paranjal',
    instagram: '',
  },
  headline: 'A Software Development Engineer',
  jobName: 'Full Stack Deveoper',
  bio: 'Software Developer with 2+ years in Java(Spring Boot), React frontend, and Android app development. Proficient in building scalable APIs, responsive UIs, and mobile solutions with a strong focus on clean code and performance.',
  //description must be less than or equal to 100 characters
  education: [
    {
      year: '2018 - 2022',
      name: "Bachelor's Degree in CS",
      affiliation: 'Abdul Kalam Technical University',
      description:
        'Catalyst for technical proficiency and problem-solving acumen.',
    },
    {
      year: '2021 - 2021',
      name: 'Java Spring Boot',
      affiliation: 'Udemy',
      description:
        'Comprehensive training fostering strong coding abilities and practical backend services development skills.',
    },
    {
      year: '2020 - 2020',
      name: 'Android App Development',
      affiliation: 'Internshala',
      description:
        'A complete bootcamp from beginner to advanced in Android App Development using Kotlin',
    },
  ],
  //description must be less than or equal to 100 characters
  experience: [
    {
      year: '2022 - 2023',
      name: 'ZopSmart Technology',
      affiliation: 'IT Company',
      description: '',
    },
  ],
  skills: {
    primary: [
      {
        name: 'ReactJS',
        score: 85,
      },
      {
        name: 'Javascript',
        score: 90,
      },
      {
        name: 'Java',
        score: 95,
      },
      {
        name: 'Spring Boot',
        score: 95,
      },
      {
        name: 'SQL & PostgreSQL',
        score: 80,
      },
    ],
    secondary: [
      {
        name: 'Android Development',
        score: 90,
      },
      {
        name: 'Kotlin',
        score: 80,
      },
      {
        name: 'TypeScript',
        score: 70,
      },
      {
        name: 'MongoDB',
        score: 70,
      },
    ],
  },
  platforms: [
    'Intellij',
    'Visual Studio',
    'Visual Studio Code',
    'Android Studio',
    'GIT',
    'GitHub',
    'Azure DevOps',
    'JiRa',
  ],
  projects: [

  ],
  //hireMeHeader example: "I'm <span>open</span> to work!", use span for focusing texts
  hireMeHeader: "I'm <span>Available</span> for freelancing",
};
