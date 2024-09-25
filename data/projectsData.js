import { v4 as uuidv4 } from "uuid";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export const projectsData = [
  {
    id: 1,
    title: "MondeAnime",
    url: "https://mondeanimes.vercel.app/",
    category: "Application Web",
    img: "/images/mondanime.webp",
    ProjectHeader: {
      title: "MondeAnime",
      publishDate: "20 Aout 2023",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "MondeAnime",
        img: "/images/mondanime.webp",
      },
      {
        id: uuidv4(),
        title: "MondeAnime",
        img: "/images/mondanime.webp",
      },
      {
        id: uuidv4(),
        title: "MondeAnime",
        img: "/images/mondanime.webp",
      },
    ],
    ProjectInfo: {
      ClientHeading: "A propos du Site",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "MondeAnimes",
        },
        {
          id: uuidv4(),
          title: "Type",
          details: "Divertissement",
        },
        {
          id: uuidv4(),
          title: "site web",
          details: "mondeanime.vercel.app",
        },
      ],
      ObjectivesHeading: "Breve Description",
      ObjectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: ["HTML", "CSS", "JavaScript", "Next.js", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
      ],
    },
  },
  {
    id: 2,
    title: "SITE VITRINE BOUTIQUE D'HABILLEMENT",
    url: "https://site-vitrine-boutique-habillement.vercel.app/",
    category: "Application Web",
    img: "/images/sitehabits/sitehabit1.png",
    ProjectHeader: {
      title: "SITE VITRINE BOUTIQUE D'HABILLEMENT",
      publishDate: "25/09/2024",
      tags: "UI / Frontend",
    },
    ProjectImages: [
      {
        id: uuidv4(),
        title: "Accueil",
        img: "/images/sitehabits/sitehabit1.png",
      },
      {
        id: uuidv4(),
        title: "Articles",
        img: "/images/sitehabits/sitehabit4.png",
      },
      {
        id: uuidv4(),
        title: "A propo",
        img: "/images/sitehabits/sitehabit5.png",
      },
    ],
    ProjectInfo: {
      ClientHeading: "A propos du Site",
      CompanyInfo: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "SITE VITRINE BOUTIQUE D'HABILLEMENT",
        },
        {
          id: uuidv4(),
          title: "Type",
          details: "Commerce",
        },
        {
          id: uuidv4(),
          title: "site web",
          details: "https://site-vitrine-boutique-habillement.vercel.app/",
        },
      ],
      ObjectivesHeading: "Breve Description",
      ObjectivesDetails:
        "Un model d'un site pour présenter sa boutique, son business,entreprise autrement appelé 'Site Vitrine'",
      Technologies: [
        {
          title: "Outils & Technologies",
          techs: ["Next.js", "TailwindCSS"],
        },
      ],
      ProjectDetailsHeading: "Challenge",
      ProjectDetails: [
        {
          id: uuidv4(),
          details:
            "Dans la conception de ce site j'ai principalement utilisé Nextjs et Tailwindcss, mais aussi Framer-motion pour les animations et transitions",
        },
      ],
    },
  },
];
