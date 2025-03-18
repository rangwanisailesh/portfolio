'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

import {
    cormorantbold,
    dancingbold,
    inknut,
    merriweather,
    nunitobold,
    poppins
} from "./fonts"
import TypewriterComponent from "typewriter-effect";
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
import { BiLogoPostgresql } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { TbBrandGithubFilled } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const HomeComp = () => {

    const [projecthover, setProjecthover] = useState(null);

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
        },
        {
            name: 'Node Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaNodeJs className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Express Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-amber-400 to-amber-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiExpress className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Postgresql',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-sky-500 to-sky-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <BiLogoPostgresql className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'MongoDB',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiMongodb className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Next Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-900 to-black rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiNextjsFill className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'React Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-sky-400 to-sky-700 rounded-full drop-shadow flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaReact className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Github',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-gray-700 to-black drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaGithub className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Tailwind',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-cyan-400 to-cyan-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiTailwindCssFill className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Supabase',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-500 to-green-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiSupabaseFill className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'AWS',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-yellow-500 to-orange-700 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaAws className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Cloudinary',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <SiCloudinary className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Headless Apps',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-indigo-400 to-indigo-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiHeadlessui className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Blockchain',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <LiaLaptopCodeSolid className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Solidity',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-violet-500 to-violet-700 rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiSolidity className="text-white text-xl" />
                </div>
            ),
        },
    ];

    const projects = [
        {
            img: '/appointment.jpg',
            title: 'Booking System',
            link: 'https://github.com/rangwanisailesh/Hair-Salon',
        },
        {
            img: '/admin.jpg',
            title: 'Headless Admin Panel',
            link: 'https://github.com/rangwanisailesh/Headless-Admin-App',
        },
        {
            img: '/blockchain.jpg',
            title: 'ERC-20 Token',
            link: 'https://github.com/rangwanisailesh/sr-token-hardhat',
        }
    ];

    const contact = [
        { icon: <FaLinkedinIn />, link: 'mailto:s.rangwani44@gmail.com' },
        { icon: <IoMail />, link: 'mailto:s.rangwani44@gmail.com' },
        { icon: <TbBrandGithubFilled />, link: 'https://github.com/rangwanisailesh' },
        { icon: <RiInstagramFill />, link: 'mailto:s.rangwani44@gmail.com' },
        { icon: <FaXTwitter />, link: 'mailto:s.rangwani44@gmail.com' },
    ];

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.lordicon.com/xdjxvujz.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className={`text-white ${poppins}`}>

            {/* Nav & Banner */}
            <div className="bg1">

                <div className="w-full flex items-center my-auto p-5 contain">

                    <div className="flex items-center my-auto space-x-2 min-w-[40%]">
                        <div className="h-10 w-10 bg-gradient-to-b from-sky-500 to-sky-700 text-white rounded-full drop-shadow-md">
                            <span className="flex justify-center items-center m-auto h-full">
                                <SiCodersrank className="text-lg" />
                            </span>
                        </div>
                        <div className={`${dancingbold} text-2xl text-center italic drop-shadow-md`}>
                            Sailesh Rangwani
                        </div>
                    </div>

                    <div className="flex items-center justify-end w-full space-x-4">
                        {navItmes.map((i, index) => {
                            return (
                                <div key={index}>
                                    <button className="cursor-pointer hover:scale-[105%] duration-300 hover:text-sky-500">
                                        {i.name}
                                    </button>
                                </div>
                            )
                        })}
                    </div>

                </div>

                <div className="h-[85vh] w-full contain flex items-center justify-center m-auto">

                    <div className="space-y-6">

                        <div className={`text-4xl text-center ${inknut}`}>
                            <TypewriterComponent
                                options={{
                                    strings: ['Welcome to my <span class="text-sky-500">Portfolio !</span>'],
                                    autoStart: true,
                                    loop: false,
                                    delay: 75,
                                    deleteSpeed: Infinity,
                                    cursor: '',
                                    html: true
                                }}
                            />
                        </div>

                        <div className={`text-lg lg:w-[70%] text-center flex justify-center mx-auto`}>
                            I'm Sailesh Rangwani, a passionate Full Stack Developer, Backend Engineer & Deployment Specialist.
                        </div>

                        <div className="flex justify-center mx-auto space-x-10">
                            <div>
                                <lord-icon
                                    src="/code.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                            <div>
                                <lord-icon
                                    src="/dev.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                            <div>
                                <lord-icon
                                    src="/layer.json"
                                    trigger="loop"
                                    style={{ width: "70px", height: "70px" }}
                                ></lord-icon>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* About */}
            <div className="bg2">
                <div className="grid grid-cols-2 gap-6 px-5 py-14 contain">

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div>-- About --</div>
                            <div className={`${inknut} heading1`}>
                                <span className="text-sky-500">Few Lines About Myself</span>
                            </div>
                        </div>

                        <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </div>
                        <div className="text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>

                    <div></div>

                </div>
            </div>

            {/* Skills */}
            <div className="bg1">

                <div className={`contain py-14 px-5 space-y-8`}>

                    <div className="space-y-1">
                        <div className="text-center">-- Skills --</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">My Skills & Tools</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-x-6 gap-y-10">
                        {skills.map((i, index) => {
                            return (
                                <div className="bg2 border border-gray-800 rounded-lg shadow p-4 hover:scale-[110%] duration-300" key={index}>
                                    <div className="flex justify-center mx-auto text-center">
                                        {i.icon}
                                    </div>
                                    <div className="flex justify-center mx-auto text-center mt-3">
                                        {i.name}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

            {/* Experience */}
            <div className="bg2">

                <div className={`contain py-14 px-5 space-y-8`}>

                    <div className="space-y-1">
                        <div className="text-center">-- Experience --</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">My Journey</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">

                        <div></div>

                        <div className="space-y-5">
                            <div className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </div>

                            <div className="">

                                <div className="flex space-x-4 h-fit overflow-y-hidden">
                                    <div className="w-fit space-y-2">
                                        <div className="h-6 w-6 bg-gradient-to-b from-sky-400 to-sky-700 rounded-full shadow"></div>
                                        <div className="min-h-10 h-full w-1 bg-gray-400 flex justify-center mx-auto rounded-lg"></div>
                                    </div>

                                    <div className="space-y-2">
                                        <div>Apr 2023 - Mar 2025 (2 years)</div>
                                        <div>Anriyo Tech Solutions</div>
                                        <div className="text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
                                        <div>Oracle Investigation Agency</div>
                                        <div className="text-gray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Projects */}
            <div className="bg1">

                <div className={`contain py-14 px-5 space-y-8`}>

                    <div className="space-y-1">
                        <div className="text-center">-- Portfolio --</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">My Creative Work</span>
                        </div>
                        <div className="text-center text-gray-500 lg:w-[60%] flex justify-center mx-auto mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-6">

                        {projects.map((i, index) => {
                            return (
                                <a
                                    href={i.link}
                                    key={index}
                                    target="_blank"
                                    onMouseEnter={() => setProjecthover(index)}
                                    onMouseLeave={() => setProjecthover(null)}
                                    className="h-80 w-full relative overflow-hidden cursor-pointer">
                                    <Image
                                        alt="appointment system"
                                        src={i.img}
                                        objectFit="cover"
                                        layout="position"
                                        fill={true}
                                        objectPosition="top"
                                        className={`${projecthover == index ? 'scale-[110%] duration-300' : 'duration-300'}`}
                                    />
                                    <div className="p-4 bg-[#121212ba] w-full h-full absolute top-0 left-0">

                                        <div className="flex items-center my-auto space-x-2">
                                            <div className="w-1 h-6 bg-sky-500 rounded-lg"></div>
                                            <div className="text-lg">
                                                {i.title}
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
            <div className="bg2">

                <div className={`contain py-14 px-5 space-y-8`}>

                    <div className="space-y-1">
                        <div className="text-center">-- Contact --</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">Reach Out To Me</span>
                        </div>
                        <div className="text-center text-gray-500 lg:w-[60%] flex justify-center mx-auto mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="flex justify-center mx-auto space-x-3">
                            {contact.map((i, index) => {
                                return (
                                    <button key={index} className="h-9 w-9 bg-gradient-to-b from-gray-300 to-white shadow rounded-full hover:scale-[110%] duration-300 cursor-pointer">
                                        <span className="text-[#0F161C] flex justify-center items-center m-auto h-full text-lg">
                                            {i.icon}
                                        </span>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="border-t pt-10 border-gray-800 w-full text-center">
                        <span>
                            Design with ❤️ by Sailesh Rangwani
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}