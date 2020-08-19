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
  subtitle: 'Engenheiro de Computação | Desenvolvedor',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Graduando em Engenharia de Computação na Universidade Federal de Itajubá, tenho experiência profissional no desenvolvimento de projetos P&D, sistemas IoT e computação em nuvem.',
  paragraphTwo:
    'Eu ❤️ programação, no meu tempo livre trabalho em meus projetos open-source, problemas de maratona e desenvolvimento de Alexa Skills.',
  paragraphThree:
    'Para os RHs que desejam uma versão mais organizada e detalhada dos meus dados, você pode baixar meu currículo no link abaixo:',
  resume: 'https://www.resumemaker.online/es.php',
};

// SKILLS DATA
export const skillsData = [];

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'pqai.png',
    title: 'PQAI - Plataforma de Qualidade do Ar Interno',
    info:
      'Projeto P&D da Honeywell para desenvolvimento de uma plataforma de monitoramento e gestão da qualidade do ar em ambientes climatizados.',
    info2: 'Tech Stack: React, Redux, Java, MySQL, MongoDB, Flutter',
    url: '/pqai',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'friot.png',
    title: 'Refrigeração Inteligente',
    info:
      'Projeto P&D da Honeywell em parceria com a PixelTI para desenvolvimento de uma plataforma de monitoramento e automatização de refrigeradores.',
    info2: 'Tech Stack: React, Redux, NodeJS, Express, MySQL, MongoDB, Flutter',
    url: '/friot',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: 'E aí, vamos conversar?',
  btn: 'Enviar E-mail',
  email: 'leonardocosta013@gmail.com',
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
    {
      id: nanoid(),
      name: 'gitlab',
      url: 'https://gitlab.com/LeonardoSaid',
    },
    {
      id: nanoid(),
      name: 'spotify',
      url: 'https://open.spotify.com/user/22rg3elkrzcfbf3opcgjaveiq?si=UdVsz3SCT3eCzs0erzOhvA',
    },
  ],
};
