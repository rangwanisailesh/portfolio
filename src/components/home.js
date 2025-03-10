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
        { name: 'Experience' },
        { name: 'Projects' },
    ];

    const skills = [
        {
            name: 'Next Js',
            icon: (
                <div className="h-10 w-10 bg-gradient-to-b from-gray-700 to-black rounded-full flex justify-center items-center drop-shadow">
                    <RiNextjsFill className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'React Js',
            icon: (
                <div className="h-10 w-10 bg-sky-500 rounded-full flex justify-center items-center">
                    <FaReact className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Node Js',
            icon: (
                <div className="h-10 w-10 bg-green-500 rounded-full flex justify-center items-center">
                    <FaNodeJs className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Express Js',
            icon: (
                <div className="h-10 w-10 bg-gray-800 rounded-full flex justify-center items-center">
                    <SiExpress className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Github',
            icon: (
                <div className="h-10 w-10 bg-gray-900 rounded-full flex justify-center items-center">
                    <FaGithub className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'MongoDB',
            icon: (
                <div className="h-10 w-10 bg-green-700 rounded-full flex justify-center items-center">
                    <SiMongodb className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Headless Apps',
            icon: (
                <div className="h-10 w-10 bg-indigo-500 rounded-full flex justify-center items-center">
                    <SiHeadlessui className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'AWS',
            icon: (
                <div className="h-10 w-10 bg-orange-500 rounded-full flex justify-center items-center">
                    <FaAws className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Blockchain',
            icon: (
                <div className="h-10 w-10 bg-blue-700 rounded-full flex justify-center items-center">
                    <LiaLaptopCodeSolid className="text-white text-xl" />
                </div>
            ),
        },
        {
            name: 'Solidity',
            icon: (
                <div className="h-10 w-10 bg-gray-500 rounded-full flex justify-center items-center">
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

                </div>

                <div className="px-5 py-10 space-y-12">

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
                    <div className="grid grid-cols-1 gap-8">

                        <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                            Skills
                        </div>

                        <div className="flex justify-center items-center m-auto">

                            {skills.slice(0, 1).map((i, index) => {
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

                        <div className="flex justify-center items-center m-auto space-x-10">

                            {skills.slice(1, 3).map((i, index) => {
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

                        <div className="flex justify-center items-center m-auto space-x-10">

                            {skills.slice(3, 6).map((i, index) => {
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

                        <div className="flex justify-center items-center m-auto space-x-10">

                            {skills.slice(6, 10).map((i, index) => {
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

                </div>

            </div>
        </div>
    )
}