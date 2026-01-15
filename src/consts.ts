// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Header, Footer, About, Project } from "./types.ts";

import ProfilePic from "./assets/profile-pic.jpg";

import PenweaveImage from "./assets/projects/penweave.png";
import MGUScraperImage from "./assets/projects/mguscraper.png";
import FlashifyImage from "./assets/projects/flashify.png";
import WeatherifyImage from "./assets/projects/weatherify.png";
import BriefImage from "./assets/projects/brief.svg";
import PlaceholderImage from "./assets/projects/placeholder.svg";

export const SITE_URL: string = "https://shonebinu.com";

export const ENABLE_STARDUST_BG: boolean = false;

export const meta = {
  about: {
    // index page
    title: "Shone Binu",
    description:
      "Hi, I'm Shone Binu, a software engineer. Welcome to my little corner of the internet!",
  },
  projects: {
    title: "Projects | Shone Binu",
    description:
      "Here are some of my projects — things I’ve built, experimented with, and had fun creating.",
  },
  blog: {
    title: "Blog | Shone Binu",
    description:
      "This is my blog — a place where I share thoughts, ideas, and things I’m learning along the way.",
  },
  // blog post title and description are taken from the variables in markdown file
};

export const header: Header = { logoTitle: "SB" };

export const footer = {
  content:
    "Hecho con ❤️ por Roberto Velasquez • <a href='https://github.com/Errejota14/RobertoV.github.io' class='link'>Código Fuente</a>",
};

export const about: About = {
  headLine:
    "Hola, soy <span class='fancy-highlight font-black'>Roberto Velasquez</span>",

  tagLine: "Ingeniero Electrónico",

  profilePic: ProfilePic,

  description:
    "Ingeniero Electrónico con experiencia en desarrollo y reparación de sistemas electrónicos a nivel de componentes, incluyendo microsoldadura y soldadura con cautín. Actualmente me desempeño en desarrollo electrónico y docencia universitaria, enfocado en la validación de sistemas y resolución de problemas técnicos. Experto en diseño de PCB, programación de microcontroladores (Arduino, ESP32, STM32) e integración hardware-software mediante PostgreSQL, FastAPI y Flask.",

  links: [
    { icon: "Github", href: "https://github.com/Errejota14" },
    { icon: "Linkedin", href: "www.linkedin.com/in/roberto-velasquez3035" },
  ],

  resumeHref:
    "https://drive.google.com/file/d/1rQQkr899ncNtkpyftp55BIcZmvvjv6j6/view?usp=sharing",

  workExperience: [
    {
      title: "Desarrollo Electrónico",
      timeline: "Agosto 2022 - Presente",
      company: "Sistemas Tecnológicos Alcaraván",
      description:
        "Desarrollo de prototipos electrónicos y soluciones integrales, desde el diseño de PCBs hasta la programación de microcontroladores e integración con aplicaciones web. Participación en producción, pruebas finales y control de calidad de tarjetas electrónicas.",
    },
  ],

  education: [
    {
      title: "Ingeniero Electrónico",
      timeline: "2017 - 2023",
      institution:
        "Universidad Nacional Experimental Politécnica de la Fuerza Armada (UNEFA)",
      description:
        "Formación en electrónica analógica y digital, sistemas embebidos, diseño de PCB y programación de microcontroladores.",
    },
  ],

  getInTouch:
    "Puedes contactarme vía correo en <a href='mailto:robertoj3055@gmail.com' class='primary-underline'>robertoj3055@gmail.com</a> o a través de mis redes profesionales.",
};


export const projects: Project[] = [
  {
    logoImage: BriefImage,
    title: "Brief",
    techs: ["Python", "Gtk", "Linux", "Flatpak"],
    description:
      "Brief is a GTK4 application for browsing community-maintained command line help pages. It uses tldr-pages as the data source.",
    sourceHref: "https://github.com/shonebinu/brief",
    liveHref: "https://flathub.org/en/apps/io.github.shonebinu.Brief",
  },
  {
    logoImage: PlaceholderImage,
    title: "Zed React Snippets",
    techs: ["Javascript"],
    description:
      "Zed extension with converted React/Redux/React-Native snippets from the popular 'ES7+ React/Redux/React-Native snippets' VSCode extension. ",
    sourceHref: "https://github.com/shonebinu/zed-react-snippets",
    liveHref: "https://zed.dev/extensions/react-snippets-es7",
  },
  {
    logoImage: PenweaveImage,
    title: "Penweave",
    techs: ["React", "Supabase", "daisyUI"],
    description:
      "Penweave is a CodePen‑like tool that lets users run their HTML/CSS/JS in a browser environment with secure preview and sharing.",
    sourceHref: "https://github.com/shonebinu/penweave/",
    liveHref: "https://penweave.pages.dev",
  },
  {
    logoImage: MGUScraperImage,
    title: "MGU Scraper",
    techs: ["Python", "Streamlit", "Beautiful Soup"],
    description:
      "MGU Scraper is a tool designed to simplify the extraction and analysis of bulk student exam results from MGU Kottayam University.",
    sourceHref: "https://github.com/shonebinu/MGUScraper",
    liveHref: "https://mguscraper.streamlit.app/",
  },
  {
    logoImage: FlashifyImage,
    title: "Flashify",
    techs: ["PHP", "MySQL", "LAMP"],
    description:
      "Flashify is a minimal, beautiful, and responsive web-based flashcard application built using the LAMP stack.",
    sourceHref: "https://github.com/shonebinu/flashify",
    liveHref: "https://flashify.shonebinu.com/",
  },
  {
    logoImage: WeatherifyImage,
    title: "Weatherify",
    techs: ["Javascript", "Webpack"],
    description:
      "Weather app featuring glassmorphism design, powered by weatherapi.com.",
    sourceHref: "https://github.com/shonebinu/weatherify",
    liveHref: "https://shonebinu.github.io/weatherify/",
  },
];

// add blog articles in /src/content/blog
