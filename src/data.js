// Skills icons - https://react-icons.github.io/react-icons/
import {
  FaGitAlt,
  FaGithubSquare,
  FaLink,
  FaLinkedinIn,
  FaPython,
  FaLinkedin,
} from "react-icons/fa";
import { SiJavascript, SiStyledcomponents, SiRedux, SiMysql, SiSqlite, SiTableau, SiRstudio, SiR } from "react-icons/si";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import GH from "./images/GH.svg";
import map from "./images/routemap.svg";
import NBA from "./images/nbalogo.png";
import streamlit_logo from "./images/streamlit-logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "AmosRM";

// Blog link icon (imported above)
export const Blog = <FaLinkedinIn />;


/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "My name is Amos. I am an Israeli living in Asia since 20155.";
export const moreInfo1 =
  "After setting up my own company in China, Covid interfered and I found myself in Taiwan - looking for a career switch. I got hooked on coding and taught myself various coding languages.";
export const moreInfo2 =
  "I get excited from learning about business insights, new technologies, NBA, and the outdoors. On this website you find various related projects I have been working on.  I would be happy to get into contact with you if you have any ideas or questions!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, there must be one icon imported above per skill below.
*/
export const skillData = [
  {
    id: 1,
    skill: <FaPython className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <SiSqlite className="display-4" />,
    name: "SQLite",
  },
  {
    id: 3,
    skill: <SiTableau className="display-4" />,
    name: "Tableau",
  },
  {
    id: 4,
    skill: <SiR className="display-4" />,
    name: "R",
  },
  {
    id: 5,
    skill: <FaGithubSquare className="display-4" />,
    name: "GitHub",
  },
  {
    id: 6,
    skill: <SiMysql className="display-4" />,
  }
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["SQL", "NBA", "streamlitapp", "Notebooks", "cyclingplots"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 13-14)
export const projectCardImages = [
  {
    name: "SQL",
    image: GH,
  },
  {
    name: "NBA",
    image: NBA,
  },
  {
    name: "streamlitapp",
    image: streamlit_logo,
  },
  {
    name: "Notebooks",
    image: GH,
  },
  {
    name: "cyclingplots",
    image: map,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/xwkzpyzq";
