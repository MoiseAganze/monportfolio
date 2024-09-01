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
    category: "Web Application",
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
];
