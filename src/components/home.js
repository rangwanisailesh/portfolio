import Image from "next/image";

import {
    cormorantbold,
    dancingbold,
    poppins
} from "./fonts"

import { SiCodersrank } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiHeadlessui } from "react-icons/si";
import { SiSolidity } from "react-icons/si";

export const HomeComp = () => {

    const navItmes = [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Skills' },
        { name: 'Projects' },
        { name: 'Experience' },
    ];

    const skills = [
        {
            name: 'Next Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-gray-700 to-black rounded-full flex justify-center items-center drop-shadow hover:scale-[110%] duration-300">
                    <RiNextjsFill className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'React Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-sky-400 to-sky-600 rounded-full drop-shadow flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaReact className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Node Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-green-400 to-green-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaNodeJs className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Express Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-yellow-400 to-yellow-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiExpress className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Github',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-gray-700 to-gray-900 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaGithub className="text-white text-xl" />
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
            name: 'Headless Apps',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-indigo-400 to-indigo-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <SiHeadlessui className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'AWS',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-orange-400 to-orange-600 drop-shadow rounded-full flex justify-center items-center hover:scale-[110%] duration-300">
                    <FaAws className="text-white text-xl" />
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
        <div className="bg-gradient-to-b from-sky-100 to-sky-200">
            <div className={`contain ${poppins}`}>

                {/* Nav */}
                <div className="w-full flex items-center my-auto p-5">

                    <div className="flex items-center my-auto space-x-2 min-w-[40%]">
                        <div className="h-10 w-10 bg-gradient-to-b from-gray-600 to-black rounded-full text-white drop-shadow-md">
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

                        <button className="btn1">
                            Contact
                        </button>
                    </div>

                </div>

                {/* Banner */}
                <div className="h-[80vh] w-full">
                    {/* Lottie Icons */}
                </div>

                <div className="px-5 py-10 space-y-14">

                    {/* About */}
                    <div className="flex">

                        <div className="space-y-4 w-[65%]">
                            <div className="font-semibold text-3xl">
                                Few Lines About Myself
                            </div>

                            <div className="text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                <br /><br />
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>

                        <div></div>

                    </div>

                    {/* Skills */}
                    <div className="grid grid-cols-1 gap-10">

                        <div className="space-y-5">
                            <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                                Skills
                            </div>

                            <div className="flex justify-center mx-auto text-center lg:w-[70%] text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-6">

                            {skills.map((i, index) => {
                                return (
                                    <div key={index} className="space-y-2">
                                        <div className="flex justify-center mx-auto text-center">
                                            {i.icon}
                                        </div>
                                        <div className="flex justify-center mx-auto text-center">
                                            {i.name}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                    {/* Projects */}
                    <div className="">

                        <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                            Projects
                        </div>

                    </div>

                    {/* Experience */}
                    <div className="grid grid-cols-1 gap-10">

                        <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                            Experience
                        </div>

                        <div className="grid grid-cols-2">

                            <div className="flex space-x-4">
                                <div className="w-auto shrink-0">
                                    <Image alt="logo" src={'/anriyo.png'} width={200} height={200} className="h-14 w-14" />
                                </div>

                                <div className="mt-3 space-y-4">
                                    <div className="font-semibold text-2xl">
                                        Anriyo Tech Solutions
                                    </div>
                                    <div className="text-gray-700">
                                        April 2023 - Present (2 years)
                                    </div>
                                    <div className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-4">
                                <div className="w-auto shrink-0">
                                    <Image alt="logo" src={'/anriyo.png'} width={200} height={200} className="h-14 w-14" />
                                </div>

                                <div className="mt-3 space-y-4">
                                    <div className="font-semibold text-2xl">
                                        Oracle Investigation Agency
                                    </div>
                                    <div className="text-gray-700">
                                        Oct 2022 - March 2023 (6 months)
                                    </div>
                                    <div className="text-gray-700">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}