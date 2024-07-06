import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const ReactIcon = require("../assets/icons/ReactIcon.png");

const SideBar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showWebList, SetShowWebList] = useState(true);

    return (
        <div className="flex h-full">
            <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
                <div>
                    <div
                        className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                        onClick={() => setShowProjects(!showProjects)}
                    >
                        {showProjects ? (
                            <ChevronDownIcon className="w-7 mr-1" />
                        ) : (
                            <ChevronRightIcon className="w-7 mr-1" />
                        )}
                        <p>SideBarStuff</p>
                    </div>
                    {showProjects ? (
                        <>
                            <div
                                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                                onClick={() => SetShowWebList(!showWebList)}
                            >
                                {showWebList ? (
                                    <ChevronDownIcon className="w-7 mr-1  ml-5" />
                                ) : (
                                    <ChevronRightIcon className="w-7 mr-1  ml-5" />
                                )}

                                <p>Web</p>
                            </div>
                            {showWebList ? <WebList /> : null}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

const WebList = () => (
    <div className="flex flex-col">
        <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={ReactIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
                <p>People</p>
            </div>
        </a>
        <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={ReactIcon}
                    alt="TS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
                <p>Online Store</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
                <p>Restaurant Web App</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
                <p>Fourth Project</p>
            </div>
        </a>
    </div>
);

export default SideBar;
