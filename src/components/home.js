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
        { name: 'Next Js', icon: <RiNextjsFill /> },
        { name: 'React Js', icon: <FaReact /> },
        { name: 'Node Js', icon: <FaNodeJs /> },
        { name: 'Express Js', icon: <SiExpress /> },
        { name: 'Github', icon: <FaGithub /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Headless Apps', icon: <SiHeadlessui /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Blockchain', icon: <LiaLaptopCodeSolid /> },
        { name: 'Solidity', icon: <SiSolidity /> },
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
                    <div className="space-y-4">

                        <div className="font-semibold text-3xl flex justify-center mx-auto text-center">
                            Core Skills
                        </div>

                        <div className="flex justify-center items-center m-auto">

                            {skills.slice(0, 1).map((i, index) => {
                                return (
                                    <div className="space-y-2">
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