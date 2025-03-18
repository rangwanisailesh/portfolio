import Image from "next/image";

import {
    cormorantbold,
    dancingbold,
    inknut,
    merriweather,
    nunitobold,
    poppins
} from "./fonts"

import { SiCloudinary, SiCodersrank, SiPrisma } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHeadlessui } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const HomeComp = () => {

    const navItmes = [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Skills' },
        { name: 'Projects' },
        { name: 'Experience' },
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

                <div className="h-[85vh] w-full contain">
                    {/* Lottie Icons */}
                </div>

            </div>

            {/* About */}
            <div className="bg2">
                <div className="grid grid-cols-2 gap-6 px-5 py-14 contain">

                    <div className="space-y-4">
                        <div className="space-y-1">
                            <div>------ About</div>
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
                        <div className="text-center">------ Skills</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">My Skills & Tools</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-x-6 gap-y-10">
                        {skills.map((i, index) => {
                            return (
                                <div className="bg2 border border-gray-800 rounded-lg shadow p-4" key={index}>
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
                        <div className="text-center">------ Experience</div>
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
                        <div className="text-center">------ Portfolio</div>
                        <div className={`${inknut} heading1 text-center`}>
                            <span className="text-sky-500">My Creative Work</span>
                        </div>
                    </div>

                </div>
           
            </div>

        </div>
    )
}