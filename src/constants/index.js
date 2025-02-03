export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Evaluation and Management of Course FAQ and Chatbot',
    desc: 'A web application for NTU professors to efficiently manage course materials within the course chatbot’s knowledge base. The app also includes a dashboard that provides valuable insights, helping professors understand student sentiment towards the courses.',
    subdesc:
      'This web app streamlines backend setup for the chatbot, reducing manual effort and enhancing overall efficiency.',
    href: 'https://www.youtube.com/watch?v=1mZ3o_fl3k0&t=202s&pp=ygUbSGFyaWtpc2huYW4gVmluYXlhIFNvdXJhYmhh',
    texture: '/textures/project/project1.png',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Flask',
        path: '/assets/flask.png',
      },
      {
        id: 3,
        name: 'Azure',
        path: '/assets/azure.png',
      },
    ],
  },
  {
    title: 'EasyFood - Mobile App',
    desc: 'EasyFood is a self contained, open source product developed and deployed on Android platform. Its main features include suggesting suitable restaurants and recipes to users as per their requirement. It acts as a personal food diary where users’ can save their favorite recipes.',
    subdesc:
      'The usability of this app connects users and local restaurants. The app takes into account weird food combinations and dietary requirements and makes informed suggestions.',
    href: 'https://github.com/Vinaya72/easy-food',
    texture: '/textures/project/project2.png',
    logo: '/assets/android.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: '/assets/flutter.png',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.png',
      },
    ],
  },
  {
    title: 'Sentiment Analysis: Domain Adaptation',
    desc: 'Developed and assessed three deep learning architectures (CNN, LSTM, Transformer) for domain adaptability in sentiment analysis tasks by training on the SST-2 dataset and testing on IMDB to improve cross-domain performance.',
    subdesc:
      'Additionally, this study explores various Transformer architectures to evaluate their impact on classification accuracy, aiming to advance NLP model performance in sentiment analysis.',
    href: '/',
    texture: '/textures/project/lstm.png',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'Pandas',
        path: '/assets/pandas.png',
      },
      {
        id: 2,
        name: 'Numpy',
        path: 'assets/numpy.png',
      },
      {
        id: 3,
        name: 'Pytorch',
        path: '/assets/pytorch.png',
      },
    ],
  },
  {
    title: 'NTUShare - Mobile App',
    desc: 'Designed and developed a mobile app for NTU students, enabling them to sell, rent, or donate items they no longer need, with the goal of reducing product wastage.',
    subdesc:
      'Upon finding a suitable match in items the user is looking for, they will be able to contact the lister to arrange the details of their exchange or rental. ',
    href: 'https://github.com/Vinaya72/NTUShare',
    texture: '/textures/project/project4.png',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Firebase',
        path: 'assets/firebase.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 2.4 : isMobile ? 1 : 3,
    deskPosition: isMobile ? [0.001, -3, -1.5] : [0.25, -4.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 9, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Wissen Technology',
    pos: 'Software Developer',
    duration: 'May 2024 - Jul 2024',
    title: "Developed a custom web app for internal use that evaluates job candidates by processing resumes and previous interview feedback by leveraging NLP techniques and Azure cloud services to enhance hiring process efficiency.",
    icon: '/assets/wissen.png',
  },
  {
    id: 2,
    name: 'Octopus8',
    pos: 'Data Solutions Developer',
    duration: 'Jul 2023 - Dec 2023',
    title: "Developed tailored data management solutions that met the specific business needs of two major charitable organizations. Analyzed and visualized six months of clients’ organizational data using SQL, aiding in strategic decision making",
    icon: '/assets/octopus8.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'AAkanksha',
    pos: 'Frontend Developer',
    duration: 'Sep 2021 - Nov 2021',
    title: "Developed a responsive, user-centric frontend for an ecommerce platform, optimizing the landing, checkout, product list, and description pages to enhance user experience and engagement.",
    icon: '/assets/aakanksha.png',
    animation: 'salute',
  },
];
