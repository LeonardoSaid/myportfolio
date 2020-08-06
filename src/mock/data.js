import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leonardo Said | Engenheiro de Computação',
  lang: 'pt',
  description: 'Bem-vindo ao meu website!',
};

// HERO DATA
export const heroData = {
  title: 'Olá 👋, eu sou ',
  name: 'Leonardo Said',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra commodo mattis. Proin sodales mauris placerat hendrerit dapibus.',
  paragraphTwo:
    'In vehicula a massa nec lobortis. Nunc vehicula massa eu nibh dapibus eleifend. Nunc dignissim diam lectus, eget sollicitudin dolor iaculis sed.',
  paragraphThree:
    'Para os HRs que desejam uma versão mais organizada e simplificada das minhas informações, você pode baixar meu currículo no link abaixo:',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pqai.png',
    title: 'PQAI - Plataforma de Qualidade do Ar Interno',
    info: 'Este é a info da PQAI.',
    info2: 'Info 2 da PQAI.',
    url: '/pqai',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'friot.png',
    title: 'Refrigeração Inteligente',
    info: 'Este é a info da Friot.',
    info2: 'Info2 da Friot',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: '',
  //   info: '',
  //   info2: '',
  //   url: '',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/LeonardoSaid',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leonardo-said-2314621a4/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
