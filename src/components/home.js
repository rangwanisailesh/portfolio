'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import {
    cormorantbold,
    dancingbold,
    inknut,
    merriweather,
    nunitobold,
    poppins
} from "./fonts"

import AOS from 'aos';
import 'aos/dist/aos.css';
import TypewriterComponent from "typewriter-effect";
import { Link } from "react-scroll";

import CoderAnimtation from "../../public/person2.json";
import TimeAnimtation from "../../public/time.json";

import { SiCloudinary, SiCodersrank, SiPrisma } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaGithub, FaHeart, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill, RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHeadlessui } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaArrowUp, FaBars, FaXTwitter, FaAngleDown } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { GrOracle } from "react-icons/gr";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const HomeComp = () => {

    const [projecthover, setProjecthover] = useState(null);
    const [top, setTop] = useState(false);
    const [toogle, setToogle] = useState(false);
    const [activeSkillFilter, setActiveSkillFilter] = useState("All Skills");

    const navItmes = [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Skills' },
        { name: 'Experience' },
        { name: 'Projects' },
        { name: 'Contact' },
    ];

    const skills = [
        {
            name: 'Prisma',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-purple-700 to-purple-900 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <SiPrisma className="text-white text-xl" />
                </div>
            ),
            category: "Backend"
        },
        {
            name: 'Node Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaNodeJs className="text-white text-xl" />
                </div>
            ),
            category: "Backend"
        },
        {
            name: 'Express Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-amber-400 to-amber-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiExpress className="text-white text-xl" />
                </div>
            ),
            category: "Backend"
        },
        {
            name: 'Postgresql',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-sky-500 to-sky-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <BiLogoPostgresql className="text-white text-xl" />
                </div>
            ),
            category: "Database"
        },
        {
            name: 'MongoDB',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiMongodb className="text-white text-xl" />
                </div>
            ),
            category: "Database"
        },
        {
            name: 'Next Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-900 to-black rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiNextjsFill className="text-white text-xl" />
                </div>
            ),
            category: "Frontend"
        },
        {
            name: 'React Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-sky-400 to-sky-700 rounded-full drop-shadow flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaReact className="text-white text-xl" />
                </div>
            ),
            category: "Frontend"
        },
        {
            name: 'Github',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-gray-700 to-black drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaGithub className="text-white text-xl" />
                </div>
            ),
            category: "Deployment"
        },
        {
            name: 'Tailwind',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-cyan-400 to-cyan-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiTailwindCssFill className="text-white text-xl" />
                </div>
            ),
            category: "Frontend"
        },
        {
            name: 'Supabase',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiSupabaseFill className="text-white text-xl" />
                </div>
            ),
            category: "Database"
        },
        {
            name: 'AWS',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-yellow-500 to-orange-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaAws className="text-white text-xl" />
                </div>
            ),
            category: "Deployment"
        },
        {
            name: 'Cloudinary',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <SiCloudinary className="text-white text-xl" />
                </div>
            ),
            category: "Deployment"
        },
        {
            name: 'Headless Apps',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-indigo-400 to-indigo-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiHeadlessui className="text-white text-xl" />
                </div>
            ),
            category: "Frontend"
        },
        {
            name: 'Blockchain',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <LiaLaptopCodeSolid className="text-white text-xl" />
                </div>
            ),
            category: "Backend"
        },
        {
            name: 'Solidity',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-violet-500 to-violet-700 rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiSolidity className="text-white text-xl" />
                </div>
            ),
            category: "Backend"
        },
        {
            name: 'TypeScript',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <BiLogoTypescript className="text-white text-xl" />
                </div>
            ),
            category: "Frontend"
        },
        {
            name: 'Oracle Cloud',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-red-500 to-red-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <GrOracle className="text-white text-xl" />
                </div>
            ),
            category: "Deployment"
        },
    ];

    const projects = [
        {
            img: '/panel.jpg',
            title: 'AI Automation Panel',
            description: 'Advanced AI automation dashboard with real-time processing capabilities.',
            technologies: ['Next.js', 'Openai Api', 'Postgresql', 'Puppeteer'],
            link: 'https://github.com/rangwanisailesh/PKLPO-Panel',
        },
        {
            img: '/appointment.jpg',
            title: 'Booking System',
            description: 'Full-featured appointment booking system with calendar integration.',
            technologies: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
            link: 'https://github.com/rangwanisailesh/Hair-Salon',
        },
        {
            img: '/admin.jpg',
            title: 'Headless Admin Panel',
            description: 'Modern headless admin dashboard for content management.',
            technologies: ['Next.js', 'Headless Lib', 'Fluent UI', 'MongoDB'],
            link: 'https://github.com/rangwanisailesh/Headless-Admin-App',
        },
        {
            img: '/blockchain.jpg',
            title: 'ERC-20 Token',
            description: 'Custom ERC-20 token implementation with blockchain integration.',
            technologies: ['Solidity', 'Next.js', 'Web3.js', 'Hardhat'],
            link: 'https://github.com/rangwanisailesh/sr-token-hardhat',
        }
    ];

    const contact = [
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sailesh-rangwani-a8523a16a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
        { icon: <IoMail />, link: 'mailto:contact@saileshrangwani.in' },
        { icon: <TbBrandGithubFilled />, link: 'https://github.com/rangwanisailesh' },
        { icon: <RiInstagramFill />, link: 'https://www.instagram.com/sailesh_rangwani?utm_source=qr&igsh=MW5yODBxbG9rY29zcw==' },
        { icon: <FaXTwitter />, link: 'https://x.com/Sailesh__R?t=fJeVwBCxjwCZJjYUSUxLsA&s=08' },
    ];

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {
                setTop(true);
            } else {
                setTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {

        AOS.init({
            once: true,
            disableMutationObserver: true
        });

        const script = document.createElement("script");
        script.src = "https://cdn.lordicon.com/xdjxvujz.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    // Add the background pattern for the hero section
    const heroBgPattern = {
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z\" fill=\"rgba(255,255,255,0.07)\"%3E%3C/path%3E%3C/svg%3E')"
    };

    return (
        <div className={`text-white ${poppins}`}>

            {/* Nav & Banner */}
            <div id="Home" className="bg1 h-[100vh]" style={heroBgPattern}>

                <div className="w-full flex items-center my-auto p-5 lg:px-8 contain">

                    <div className="flex items-center my-auto space-x-2 min-w-[60%] md:min-w-[40%]">
                        <div className="h-10 w-10 bg-gradient-to-b from-sky-500 to-sky-700 text-white rounded-full drop-shadow-md">
                            <span className="flex justify-center items-center m-auto h-full">
                                <SiCodersrank className="text-lg" />
                            </span>
                        </div>
                        <div className={`${dancingbold} text-xl md:text-2xl text-center italic drop-shadow-md`}>
                            Sailesh Rangwani
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-end w-full space-x-4">
                        {navItmes.map((i, index) => {
                            return (
                                <div key={index}>
                                    <button className="cursor-pointer hover:scale-[105%] duration-300 hover:text-sky-500">
                                        <Link to={i.name} smooth={true} duration={500}>
                                            {i.name}
                                        </Link>
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex lg:hidden items-center my-auto justify-end w-full relative">
                        <button onClick={() => setToogle(!toogle)}>
                            {toogle ? <RxCross2 /> : <FaBars />}
                        </button>

                        <div className={`${toogle ? 'absolute lg:hidden duration-300 top-6 right-4 bg-white rounded-lg p-4 shadow-lg' : 'duration-300 hidden'}`}>
                            {navItmes.map((i, index) => {
                                return (
                                    <div key={index}>
                                        <button className="text-black w-full border-b border-gray-300 pb-2 mb-2 cursor-pointer hover:scale-[105%] duration-300 hover:text-sky-500">
                                            <Link onClick={() => setToogle(false)} to={i.name} smooth={true} duration={500}>
                                                {i.name}
                                            </Link>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>

                <div className="h-[85vh] w-full contain flex items-center justify-center m-auto px-5">

                    <div className="space-y-10">

                        <div className={`text-4xl text-center ${inknut} leading-12`}>
                            <TypewriterComponent
                                options={{
                                    strings: ['Welcome To My <span class="text-sky-500">Portfolio !</span>'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 75,
                                    deleteSpeed: Infinity,
                                    cursor: '',
                                    html: true
                                }}
                            />
                        </div>

                        <div data-aos="fade-in" data-aos-duration="2000" data-aos-delay="2000" className={`text-lg lg:w-[70%] text-center flex justify-center mx-auto`}>
                            Hi, I'm Sailesh Rangwani, a passionate Full Stack Developer, Backend Engineer & Deployment Specialist.
                        </div>

                        <div className="flex justify-center mx-auto space-x-10">
                            <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="2500">
                                <lord-icon
                                    src="/code.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                            <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="2700">
                                <lord-icon
                                    src="/dev.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                            <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="3000">
                                <lord-icon
                                    src="/layer.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bouncing Chevron Down */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center">
                    <Link to="About" smooth={true} duration={500}>
                        <button className="animate-bounce duration-300 cursor-pointer">
                            <FaAngleDown className="h-6 w-6 md:h-8 md:w-8" />
                        </button>
                    </Link>
                </div>

            </div>

            {/* About */}
            <div id="About" className="bg2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 lg:px-8 py-14 lg:py-20 contain">

                    <div data-aos="fade-right" data-aos-duration="2000" className="space-y-4">
                        <div className="space-y-6 lg:space-y-1">
                            <div className=" text-center lg:text-left">-- About Me --</div>
                            <div className={`${inknut} leading-12 heading1 text-center lg:text-left`}>
                                <span className="text-sky-500">Who I Am & What I Do</span>
                            </div>
                        </div>

                        <div>
                            <div className="flex lg:hidden justify-center items-center m-auto drop-shadow-lg">
                                <Lottie animationData={CoderAnimtation} loop={true} className="w-auto h-72" />
                            </div>
                        </div>

                        <div className="">
                            Hey there! I'm Sailesh Rangwani, a passionate Full Stack Developer, Backend Engineer, and Deployment Specialist. With expertise in building scalable web applications, APIs, and cloud deployments, I love turning complex ideas into seamless digital experiences.
                        </div>
                        <div className="text-gray-400">
                            From crafting dynamic frontend interfaces to designing robust backend architectures, I ensure performance, security, and reliability at every step. Whether it's database management, API integrations, or deploying applications to the cloud, I thrive on delivering efficient and scalable solutions.
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="2000" className="hidden lg:flex justify-center items-center m-auto drop-shadow-lg">
                        <Lottie animationData={CoderAnimtation} loop={true} className="w-auto h-72" />
                    </div>

                </div>
            </div>

            {/* Skills */}
            <div id="Skills" className="bg1">

                <div className={`contain py-14 px-5 lg:px-8 space-y-8`}>

                    <div data-aos="fade-in" data-aos-duration="2000" className="space-y-1">
                        <div className="text-center">-- Skills --</div>
                        <div className={`${inknut} leading-12 heading1 text-center`}>
                            <span className="text-sky-500">My Skills & Tools</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        <button 
                            onClick={() => setActiveSkillFilter("All Skills")}
                            className={`cursor-pointer px-4 py-2 rounded-full ${activeSkillFilter === "All Skills" ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-300"} hover:bg-sky-600 transition-all duration-300`}
                        >
                            All Skills
                        </button>
                        <button 
                            onClick={() => setActiveSkillFilter("Frontend")}
                            className={`cursor-pointer px-4 py-2 rounded-full ${activeSkillFilter === "Frontend" ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-300"} hover:bg-sky-600 transition-all duration-300`}
                        >
                            Frontend
                        </button>
                        <button 
                            onClick={() => setActiveSkillFilter("Backend")}
                            className={`cursor-pointer px-4 py-2 rounded-full ${activeSkillFilter === "Backend" ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-300"} hover:bg-sky-600 transition-all duration-300`}
                        >
                            Backend
                        </button>
                        <button 
                            onClick={() => setActiveSkillFilter("Database")}
                            className={`cursor-pointer px-4 py-2 rounded-full ${activeSkillFilter === "Database" ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-300"} hover:bg-sky-600 transition-all duration-300`}
                        >
                            Database
                        </button>
                        <button 
                            onClick={() => setActiveSkillFilter("Deployment")}
                            className={`cursor-pointer px-4 py-2 rounded-full ${activeSkillFilter === "Deployment" ? "bg-sky-500 text-white" : "bg-gray-800 text-gray-300"} hover:bg-sky-600 transition-all duration-300`}
                        >
                            Deployment
                        </button>
                    </div>

                    <div data-aos="fade-in" data-aos-duration="2000" data-aos-delay="100" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
                        {skills
                            .filter(skill => activeSkillFilter === "All Skills" || skill.category === activeSkillFilter)
                            .map((i, index) => {
                            return (
                                <div key={index}>
                                    <div className="bg2 border border-gray-800 rounded-lg shadow p-4 hover:scale-[110%] duration-300">
                                        <div className="flex justify-center mx-auto text-center">
                                            {i.icon}
                                        </div>
                                        <div className="flex justify-center mx-auto text-center mt-3">
                                            {i.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

            {/* Experience */}
            <div id="Experience" className="bg2">

                <div className={`contain py-14 px-5 lg:px-8 space-y-8`}>

                    <div data-aos="fade-in" data-aos-duration="2000" className="space-y-1">
                        <div className="text-center">-- Experience --</div>
                        <div className={`${inknut} leading-12 heading1 text-center`}>
                            <span className="text-sky-500">My Journey in Tech & Beyond</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div data-aos="fade-right" data-aos-duration="2000" className="flex justify-center items-center m-auto drop-shadow-lg">
                            <Lottie animationData={TimeAnimtation} loop={true} className="w-80 h-80" />
                        </div>

                        <div data-aos="fade-left" data-aos-duration="2000" className="space-y-5">
                            <div className="">
                                My coding journey began in HSC with a deep interest in technology, but COVID led me to work as an Investigator at Oracle Investigation Agency, handling reports, documentation, and portal management.
                                Later, I transitioned to Anriyo Tech Solutions as a Full Stack Developer, building Full Stack Apps, and deploying scalable web solutions focused on performance and security.
                            </div>

                            <div className="">

                                <div className="flex space-x-4 h-fit overflow-y-hidden">
                                    <div className="w-fit space-y-2">
                                        <div className="h-6 w-6 bg-gradient-to-b from-sky-400 to-sky-700 rounded-full shadow"></div>
                                        <div className="min-h-10 h-full w-1 bg-gray-400 flex justify-center mx-auto rounded-lg"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div>Apr 2023 - Mar 2025 (2 years)</div>
                                        <div>Full Stack Developer | Anriyo Tech Solutions</div>
                                        <div className="text-gray-400">
                                            Designed & developed Headless Applications for scalable solutions. Built and deployed full-stack applications, optimizing security, performance, and efficiency. Integrated APIs and streamlined backend operations for seamless functionality.
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4 mt-3 h-fit overflow-y-hidden">
                                    <div className="w-fit space-y-2">
                                        <div className="h-6 w-6 bg-gradient-to-b from-sky-400 to-sky-700 rounded-full shadow"></div>
                                        <div className="min-h-10 h-full w-1 bg-gray-400 flex justify-center mx-auto rounded-lg"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div>Oct 2022 - Mar 2023 (6 months)</div>
                                        <div>Investigator | Oracle Investigation Agency</div>
                                        <div className="text-gray-400">
                                            Conducted detailed MS Excel reports & documentations.
                                            Managed & updated records on their internal investigation portal.
                                            Strengthened data analysis and reporting skills.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Projects */}
            <div id="Projects" className="bg1">

                <div className={`contain py-14 px-5 lg:px-8 space-y-8`}>

                    <div data-aos="fade-in" data-aos-duration="2000" className="space-y-1">
                        <div className="text-center">-- Portfolio --</div>
                        <div className={`${inknut} leading-12 heading1 text-center`}>
                            <span className="text-sky-500">Showcasing My Work</span>
                        </div>
                        <div className="text-center text-gray-400 lg:w-[60%] flex justify-center mx-auto mt-2">
                            Here are some of my projects showcasing my skills in full-stack development, headless applications, and efficient deployments.
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">

                        {projects.map((project, index) => {
                            return (
                                <a
                                    href={project.link}
                                    key={index}
                                    target="_blank"
                                    onMouseEnter={() => setProjecthover(index)}
                                    onMouseLeave={() => setProjecthover(null)}
                                    data-aos="zoom-in" data-aos-duration="2000" data-aos-delay={index * 200}
                                    className="h-80 w-full relative overflow-hidden rounded-lg cursor-pointer group">
                                    <Image
                                        alt={project.title}
                                        src={project.img}
                                        objectFit="cover"
                                        layout="fill"
                                        objectPosition="top"
                                        className="transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                                    
                                    <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                        <div>
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-gray-300 mb-4">{project.description}</p>
                                            
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="px-3 py-1 bg-sky-600 text-white rounded-full text-sm">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="text-sky-700 flex items-center space-x-2">
                                                <span>View Project</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })}

                    </div>

                </div>

            </div>

            {/* Contact */}
            <div id="Contact" className="bg2">

                <div className={`contain py-14 px-5 lg:px-8 space-y-8`}>

                    <div data-aos="fade-in" data-aos-duration="2000" className="space-y-1">
                        <div className="text-center">-- Contact --</div>
                        <div className={`${inknut} leading-12 heading1 text-center`}>
                            <span className="text-sky-500">Reach Out To Me</span>
                        </div>
                        <div className="text-center text-gray-400 lg:w-[60%] flex justify-center mx-auto mt-2">
                            Feel free to reach out for collaborations, projects, or just a tech chat. I'm always open to new opportunities!
                        </div>
                    </div>

                    <div className="w-full">
                        <div data-aos="zoom-in" data-aos-duration="2000" className="flex justify-center mx-auto space-x-3">
                            {contact.map((i, index) => {
                                return (
                                    <a href={i.link} target="_blank" data-aos="zoom-in" data-aos-duration="2000" data-aos-delay={200 * index} key={index}>
                                        <div className="h-9 w-9 bg-gradient-to-b from-gray-100 to-white shadow rounded-full hover:scale-[110%] duration-300 cursor-pointer">
                                            <span className="text-[#0F161C] flex justify-center items-center m-auto h-full text-lg">
                                                {i.icon}
                                            </span>
                                        </div>
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    <div data-aos="fade-in" data-aos-duration="2000" className="border-t pt-10 border-gray-800 w-full text-center">
                        <span>
                            Design with ❤️ by Sailesh Rangwani
                        </span>
                    </div>

                </div>

            </div>

            {/* Top Button */}
            <Link to={"Home"} smooth={true} duration={500}>
                <button className={`${top ? 'cursor-pointer fixed bottom-8 right-8 h-12 w-12 rounded-full bg-gradient-to-b from-sky-500 to-sky-700 text-white hover:scale-[110%] duration-300' : 'hidden'}`}>
                    <span className="flex justify-center items-center m-auto h-full">
                        <FaArrowUp />
                    </span>
                </button>
            </Link>

        </div>
    )
}