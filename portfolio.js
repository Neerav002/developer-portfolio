import emoji from "react-easy-emoji";

export const greetings = {
	name: "Neerav Singla",
	title: "Hi all, I'm Neerav",
	description:
		"I'm a C++ enthusiast & a passionate Full Stack web developer having an experience of web applications with Node.js, React.js, React-Native.",
	resumeLink:
		"https://drive.google.com/file/d/1rx9FWvowcutJgesPAhcMEmlGROdVeH-E/view?usp=share_link",
};

export const openSource = {
	githubUserName: "Neerav002",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/neerav-singla-151499185/",
	github: "https://github.com/Neerav002",
	instagram: "https://www.instagram.com/nee_rav__",
	facebook: "https://www.facebook.com/neeravsingla.singla",
	twitter: "https://twitter.com/NeeravSingla",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK & CURRENTLY EXPLORING REACT NATIVE",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
				),
				emoji("⚡ Building responsive static websites using Next.js"),
				emoji(
					"⚡ Building RESTful APIs in Node.js & express.js"
				),
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
			],
		},
		{
			title: "Mobile App Development",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experience of working on React Native"),
				emoji(
					"⚡ Building the Applications using Expo CLI"
				),
				
			],
			softwareSkills: [
				// ? Check README To get icon details
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nextjs",
					fontAwesomeClassname: "vscode-icons:file-type-light-next",
				},
				{
					skillName: "Redux",
					fontAwesomeClassname: "logos:redux",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				
				
			],
		},
	
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "JMIETI",
		subHeader: "BAchelors of Technology in Computer Science",
		duration: "August 2019 - present",
		desc: "Participated in SIH 2022 ",
		grade: "Grade A",
		
	},
];

export const experience = [
	{
		role: "ReactJS Trainee",
		company: "GOTESO",
		companyLogo: "GOTESO",
		date: "July 2022 – Sept 2022",
		desc: "I worked as ReactJS Trainee to design web based admin dashboards for mulitple apps using ReactJS, Bootstrap, jQuery, Chart.js and some other libraries.",
	},
];

export const projects = [
	{
		name: "TODO App React Native",
		desc: "A Mobile Application for Daily Use .",
		github: "https://github.com/Neerav002/ToDoApp",
	},
	{
		name: "Tune Play",
		desc: "An Online music streaming application",
		github: "https://github.com/Neerav002/Tune-Play/tree/master/Tune-Play-Stream-master",
	},
	{
		name: "Blog Webiste ",
		desc: "A Web Application for writing blogs",
		github: "https://github.com/Neerav002/Blog-Website",
	},
];

// export const feedbacks = [
	
// ];

// option to hide or show the ContactUs component
export const showContactUs = true;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Neerav Singla",
	description:
		"A passionate Full Stack Web Developer and Mobile APP Developer.",
	author: "Neerav Singla",
	image: "https://avatars3.githubusercontent.com/u/59178380?v=4",
	keywords: [
		"Hanzla",
		"Hanzla Tauqeer",
		"@1hanzla100",
		"1hanzla100",
		"Portfolio",
		"Hanzla Portfolio ",
		"Hanzla Tauqeer Portfolio",
	],
}
