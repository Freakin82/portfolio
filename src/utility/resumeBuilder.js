const { REACT_APP_RESUME_DRIVE_ID } = process.env;
export const resume = {
  name: 'Hritik Singh',
  email: 'hritiks127@gmail.com',
  Phone: '+918920255828',
  address: 'Ghaziabad, Delhi NCR, India',
  resumeDriveLinkCode:
    REACT_APP_RESUME_DRIVE_ID ?? '1Aou8wDfROpJoqG4k6WQdlV2T5zfnUa1x',
  dob: {
    month: 'November',
    year: '1999',
    date: 13,
  },
  links: {
    github: 'https://github.com/hritiksingh13',
    facebook: 'https://www.facebook.com/hritik.singh.3597',
    linkedIn: 'https://www.linkedin.com/in/hritikk-singh',
    instagram: '',
  },
  headline: 'A Fullstack Web Developer',
  jobName: 'Web Developer',
  bio: 'Experienced Full Stack Developer skilled in crafting captivating web experiences with HTML, CSS, JavaScript, React JS, Node.js, Express.js, C#, and ASP .NET. Seamlessly blending frontend design and robust backend development for diverse web solutions.',
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
      name: 'Web Development Bootcamp',
      affiliation: 'Udemy',
      description:
        'Comprehensive training fostering strong coding abilities and practical web development skills.',
    },
    {
      year: '2023 - 2023',
      name: 'Pesto Plus Fellowship',
      affiliation: 'Pesto Tech',
      description:
        '8-month program shapes devs into global engineers, prioritizes skill, boosts income.',
    },
  ],
  //description must be less than or equal to 100 characters
  experience: [
    {
      year: '2022 - Present',
      name: 'MAQ Software',
      affiliation: 'IT Company',
      description: '',
    },
  ],
  skills: {
    primary: [
      {
        name: 'ReactJS',
        score: 95,
      },
      {
        name: 'Javascript',
        score: 90,
      },
      {
        name: 'HTML5 & CSS3',
        score: 90,
      },
      {
        name: 'Redux',
        score: 95,
      },
      {
        name: 'SQL & PostgreSQL',
        score: 80,
      },
    ],
    secondary: [
      {
        name: 'tailwind CSS',
        score: 90,
      },
      {
        name: 'Node & Express JS',
        score: 70,
      },
      {
        name: '.NET',
        score: 80,
      },
      {
        name: 'MongoDB',
        score: 70,
      },
      {
        name: 'PowerShell & Bicep Scripts',
        score: 70,
      },
    ],
  },
  platforms: [
    'Visual Studio',
    'Visual Studio Code',
    'GIT',
    'GitHub',
    'Azure DevOps',
    'JiRa',
  ],
  projects: [
    {
      name: 'EmbedFAST',
      link: 'https://maqsoftware.com/embedfast',
    },
    {
      name: 'Car Bazaar',
      link: 'https://carbazaar-node.netlify.app/',
    },
    {
      name: 'Clock App',
      link: 'https://cpgy2o.csb.app/',
    },
    {
      name: 'Link Shortner',
      link: 'https://53299h.csb.app/',
    },
  ],
  //hireMeHeader example: "I'm <span>open</span> to work!", use span for focusing texts
  hireMeHeader: "I'm <span>Available</span> for freelancing",
};
