import { FaBriefcase, FaBuilding, FaFile, FaUsers } from "react-icons/fa";

import {
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineRobot,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdQuestionAnswer } from "react-icons/md";
import { FaStar, FaMedal } from "react-icons/fa";

import {
  FaBookAtlas,
  FaBullhorn,
  FaCalculator,
  FaCalendar,
  FaClock,
  FaCode,
  FaDatabase,
  FaLinkedin,
  FaMusic,
  FaPaintbrush,
  FaStackpath,
  FaStethoscope,
  FaVideo,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { FaCogs, FaShoppingCart } from "react-icons/fa";

export const menuItems = [
  { name: "Home", slug: "/" },
  { name: "Find Jobs", slug: "/jobs" },
  { name: "Employers", slug: "/employers" },
  { name: "Candidates", slug: "/candidates" },
  { name: "Pricing Plans", slug: "/pricing-plans" },
  { name: "Customer Support", slug: "/support" },
];

export const cta = [
  {
    title: "Become a Candidate",
    description:
      "Land your perfect job with ease and style. Register now for a seamless job search experience tailored just for you!",
    action: "Register Now",
    bgImg: "/mantyping.jpg",
  },
  {
    title: "Become an Employer",
    description:
      "Find your ideal candidate effortlessly. Register now and secure the perfect match for your open position!",
    action: "Get started Now",
    bgImg: "/womantyping.jpg",
  },
];

export const footerLinks = [
  {
    heading: "Quick Links",
    content: [
      { name: "About", slug: "about" },
      { name: "Contact", slug: "contact" },
      { name: "Pricing", slug: "cricing" },
      { name: "Blog", slug: "blog" },
    ],
  },
  {
    heading: "Candidate",
    content: [
      { name: "Browse Jobs", slug: "browse-jobs" },
      { name: "Browse Employers", slug: "browse-employers" },
      { name: "Candidate Dashboard", slug: "candidate-dashboard" },
      { name: "Saved Jobs", slug: "saved-jobs" },
    ],
  },
  {
    heading: "Employers",
    content: [
      { name: "Post a Job", slug: "Post a Job" },
      { name: "Browse Candidates", slug: "browse-candidates" },
      { name: "Employers Dashboard", slug: "employers-dashboard" },
      { name: "Applications", slug: "applications" },
    ],
  },
  {
    heading: "Support",
    content: [
      { name: "FAQs", slug: "faqs" },
      { name: "Privacy Policy", slug: "privacy-policy" },
      { name: "Terms & Conditions", slug: "terms-conditions" },
    ],
  },
];

export const statsCards = [
  {
    name: "Live Jobs",
    number: "23459",
    icon: <FaBriefcase className="w-full h-full p-4" />,
  },
  {
    name: "Companies",
    number: "23459",
    icon: <FaBuilding className="w-full h-full p-4" />,
  },
  {
    name: "Candidates",
    number: "23459",
    icon: <FaUsers className="w-full h-full p-4" />,
  },
  {
    name: "New Jobs",
    number: "23459",
    icon: <FaFile className="w-full h-full p-4" />,
  },
];

export const suggestions = [
  { name: "Designer" },
  { name: "Developer" },
  { name: "Digital Marketing" },
  { name: "Video Editing" },
];

export const steps = [
  {
    title: "Build your Profile",
    description: "Setup an account with Career Coach",
    icon: <AiOutlineUserAdd />,
  },
  {
    title: "Start your Job Search",
    description: "Choose a job role that you qualify the most for",
    icon: <HiOutlineClipboardCheck />,
  },
  {
    title: "Craft a compelling CV and Cover Letter",
    description: "Put together a strong CV and Job Specific Cover Letter",
    icon: <AiOutlineRobot />,
  },
  {
    title: "Prepare for Your Interview",
    description:
      "Undertake a mock interview and aptitude tests to groom you for the Job Interview",
    icon: <MdQuestionAnswer />,
  },
  {
    title: "Build your Career from here",
    description: "Connect with a Career Buddy, learn and share",
    icon: <FaStar />,
  },
  {
    title: "Make some Money on the Side",
    description: "Earn from side gigs in your field",
    icon: <FaMedal />,
  },
];

export const languages = [
  { name: "English", value: "english", flag: "/next.svg", code: "us" },
  { name: "Italian", value: "italian", flag: "/next.svg", code: "it" },
  { name: "French", value: "french", flag: "/next.svg", code: "fr" },
  { name: "Spanish", value: "spanish", flag: "/next.svg", code: "es" },
  { name: "German", value: "german", flag: "/next.svg", code: "de" },
  { name: "Portuguese", value: "portuguese", flag: "/next.svg", code: "pt" },
];

export const categories = [
  {
    name: "Graphics & Design",
    number: "25387",
    icon: <FaPaintbrush className="w-full h-full p-4" />,
  },
  {
    name: "Web Design & Development",
    number: "25387",
    icon: <FaCode className="w-full h-full p-4" />,
  },
  {
    name: "Digital Marketing",
    number: "25387",
    icon: <FaBullhorn className="w-full h-full p-4" />,
  },
  {
    name: "Video & Animation",
    number: "25387",
    icon: <FaVideo className="w-full h-full p-4" />,
  },
  {
    name: "Music & Audio Production",
    number: "25387",
    icon: <FaMusic className="w-full h-full p-4" />,
  },
  {
    name: "Account & Finance",
    number: "25387",
    icon: <FaCalculator className="w-full h-full p-4" />,
  },
  {
    name: "Health and Care",
    number: "25387",
    icon: <FaStethoscope className="w-full h-full p-4" />,
  },
  {
    name: "Data Science",
    number: "25387",
    icon: <FaDatabase className="w-full h-full p-4" />,
  },
  {
    name: "Engineering",
    number: "25387",
    icon: <FaCogs className="w-full h-full p-4" />,
  },
  {
    name: "Procurement",
    number: "25387",
    icon: <FaShoppingCart className="w-full h-full p-4" />,
  },
];

export const popularVacancies = [
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Anaestician", numberOpen: "24336" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Data Scientist", numberOpen: "24356" },
  { name: "Designer", numberOpen: "14356" },
];

export const testimonials = [
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Bessie Cooper",
    clientImage: "/bessiecooper.png",
    clientRole: "UI/UX Designer",
  },
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Robert Fox",
    clientImage: "/robertfox.png",
    clientRole: "UI/UX Designer",
  },
  {
    stars: "5",
    description:
      "Career Assistant made my job search easy and stress free. You feel confident with the post interview training.",
    clientName: "Jane Cooper",
    clientImage: "/janecooper.png",
    clientRole: "UI/UX Designer",
  },
];

export const jobs = [
  {
    title: "Technical Support Specialist",
    time: 1,
    salaryRange: ["20000", "25000"],
    companyName: "Google",
    companyLocation: "Accra, Ghana",
    companyImg: "/logoGoogle.png",
  },
  {
    title: "Technical Support Specialist",
    time: 3,
    salaryRange: ["20000", "25000"],
    companyName: "Google",
    companyLocation: "Accra, Ghana",
    companyImg: "/logoGoogle.png",
  },
  {
    title: "Technical Support Specialist",
    time: 5,
    salaryRange: ["20000", "25000"],
    companyName: "Google",
    companyLocation: "Accra, Ghana",
    companyImg: "/logoGoogle.png",
  },
  {
    title: "Technical Support Specialist",
    time: 2,
    salaryRange: ["20000", "25000"],
    companyName: "Google",
    companyLocation: "Accra, Ghana",
    companyImg: "/logoGoogle.png",
  },
];

export const timeOptions = [
  "full-time",
  "part-time",
  "hybrid",
  "nss",
  "internship",
];

export const currencies = [
  { name: "US Dollar", short: "USD", symbol: "$" },
  { name: "Pound Sterling", short: "BPD", symbol: "£" },
  { name: "Euro", short: "EUR", symbol: "€" },
  { name: "Ghana Cedi", short: "GHS", symbol: "GH₵" },
  { name: "Rupee", short: "INR", symbol: "₹" },
];

export const placeOptions = ["on-site", "hybrid", "remote"];

export const jobDetails = [
  {
    title: "Senior UI/UX Designer",
    company: "Google",
    timeOption: timeOptions[0],
    placeOption: placeOptions[0],
    description:
      "Commodo sunt excepteur est enim enim deserunt deserunt consectetur veniam labore. Laborum laboris Lorem do id velit consequat. Minim nisi irure fugiat sunt voluptate. Labore officia culpa reprehenderit sunt laboris eu et velit sint ea ullamco ea occaecat exercitation.",
    requirements: [
      "3+ years experience",
      "Good knowledge of HTML, CSS, Javascript",
      "Great troubleshooting and analytical skills",
    ],
    desirables: [
      "Working knowledge of ecommerce platforms",
      "API Platform experience",
    ],
    benefits: [
      "Early finish on Fridays",
      "Brand new Macbook Pro",
      "Health Package",
      "Generous Annual Bonus",
    ],
    salaryRange: ["30000", "35000"],
    currency: currencies[0],
    location: "New Delhi, India",
    metadata: [
      "14th Aug, 2024",
      "30th Sept, 2024",
      "Entry Level",
      "Fresh Graduate",
      "Bachelor's Degree",
    ],
  },
];

export const jobOverviewCard = [
  { title: "Job Posted :", icon: <FaCalendar /> },
  { title: "Job Expire :", icon: <FaClock /> },
  { title: "Job Level :", icon: <FaStackpath /> },
  { title: "Job Experience :", icon: <FaBookAtlas /> },
  { title: "Education :", icon: <FaBriefcase /> },
];

export const shareLink = [
  { text: "copy link", link: "", icon: <AiOutlineLink /> },
  { text: "", link: "", icon: <FaLinkedin /> },
  { text: "", link: "", icon: <FaXTwitter /> },
  { text: "", link: "", icon: <FaWhatsapp /> },
];
