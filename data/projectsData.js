import { v4 as uuidv4 } from 'uuid';
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'MondeAnime',
		url: 'https://mondeanimes.vercel.app/',
		category: 'Web Application',
		img: '/images/mondanime.webp',
		ProjectHeader: {
			title: 'MondeAnime',
			publishDate: 'August 20, 2024',
			tags: 'UI / Frontend',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'MondeAnime',
				img: '/images/mondanime.webp',
			},
			{
				id: uuidv4(),
				title: 'MondeAnime',
				img: '/images/mondanime.webp',
			},
			{
				id: uuidv4(),
				title: 'MondeAnime',
				img: '/images/mondanime.webp',
			},
		],
		ProjectInfo: {
			ClientHeading: 'About Client',
			CompanyInfo: [
				{
					id: uuidv4(),
					title: 'Name',
					details: 'Company Ltd',
				},
				{
					id: uuidv4(),
					title: 'Services',
					details: 'Web Development',
				},
				{
					id: uuidv4(),
					title: 'Website',
					details: 'https://company.com',
				},
				{
					id: uuidv4(),
					title: 'Phone',
					details: '555 8888 888',
				},
			],
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'HTML',
						'CSS',
						'JavaScript',
						'Vue.js',
						'TailwindCSS',
						'AdobeXD',
					],
				},
			],
			ProjectDetailsHeading: 'Challenge',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?',
				},
				{
					id: uuidv4(),
					details:
						'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
				},
			],
			SocialSharingHeading: 'Share This',
			// SocialSharing: [
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Twitter',
			// 		icon: <FiTwitter />,
			// 		url: 'https://twitter.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Instagram',
			// 		icon: <FiInstagram />,
			// 		url: 'https://instagram.com/realstoman',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Facebook',
			// 		icon: <FiFacebook />,
			// 		url: 'https://facebook.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'LinkedIn',
			// 		icon: <FiLinkedin />,
			// 		url: 'https://linkedin.com/',
			// 	},
			// 	{
			// 		id: uuidv4(),
			// 		name: 'Youtube',
			// 		icon: <FiYoutube />,
			// 		url: 'https://www.youtube.com/c/StomanStudio',
			// 	},
			// ],
		},
	},
	
];
