import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useWindowSize } from "../Utilities/Utilities";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const ReactIcon = require("../assets/icons/ReactIcon.png");

const GitLogo = require("../assets/logos/GitLogo.png");
const LinkedinLogo = require("../assets/logos/LinkedinLogo.png");
const MailLogo = require("../assets/logos/MailLogo.png");

const SideBar = () => {
    const [showProjects, setShowProjects] = useState(true);
    const [showWebList, SetShowWebList] = useState(true);
    const [showInProgressList, SetShowInProgressList] = useState(true);
    const [showLinks, SetShowLinks] = useState(true);
    const [showLinksList, SetShowLinksList] = useState(true);

    const windowSize = useWindowSize();

    const shouldRenderMobile = () => {
        if (windowSize.width >= 1024) {
            return false;
        } else {
            return true;
        }
    };

    return (
        <div className="flex h-full">
            <div className="text-[#a2aabc] text-lg mt-5 flex w-full">
                <div className="w-screen">
                    <div
                        className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                        onClick={() => setShowProjects(!showProjects)}
                    >
                        {showProjects ? (
                            <ChevronDownIcon className="w-7 mr-1" />
                        ) : (
                            <ChevronRightIcon className="w-7 mr-1" />
                        )}
                        <p>Projects</p>
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

                    {showProjects ? (
                        <>
                            <div
                                className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                                onClick={() =>
                                    SetShowInProgressList(!showInProgressList)
                                }
                            >
                                {showInProgressList ? (
                                    <ChevronDownIcon className="w-7 mr-1  ml-5" />
                                ) : (
                                    <ChevronRightIcon className="w-7 mr-1  ml-5" />
                                )}

                                <p>In Progress</p>
                            </div>
                            {showInProgressList ? <InProgressList /> : null}
                        </>
                    ) : null}

                    {shouldRenderMobile() && (
                        <div
                            className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold"
                            onClick={() => SetShowLinks(!showLinks)}
                        >
                            {showLinks ? (
                                <ChevronDownIcon className="w-7 mr-1" />
                            ) : (
                                <ChevronRightIcon className="w-7 mr-1" />
                            )}
                            <p>Links</p>
                        </div>
                    )}

                    {showLinks && shouldRenderMobile() ? (
                        <>{showLinksList ? <LinksList /> : null}</>
                    ) : null}
                </div>
            </div>
            {!shouldRenderMobile() ? (
                <div className="absolute w-full bottom-10 px-6">
                    <div className="flex justify-between">
                        <a href="https://github.com/johnlin2922">
                            <img
                                src={GitLogo}
                                alt="Git Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/johnny-lin-838a5414a/">
                            <img
                                src={LinkedinLogo}
                                alt="Linkedin Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                            />
                        </a>
                        <a href="mailto:Johnlin2922@gmail.com">
                            <img
                                src={MailLogo}
                                alt="Mail Logo"
                                className="h-10 w-10 text-yellow_vs hover:cursor-pointer duration-500 hover:scale-125"
                            />
                        </a>
                    </div>
                </div>
            ) : (
                <></>
            )}
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
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>People</p>
            </div>
        </a>
        <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={ReactIcon}
                    alt="TS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Online Store</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Restaurant Web App</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Fourth Project</p>
            </div>
        </a>
    </div>
);

const InProgressList = () => (
    <div className="flex flex-col">
        <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Weather Hood</p>
            </div>
        </a>
        <a href="/">
            <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={ReactIcon}
                    alt="TS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Stonks</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Amazing Countries</p>
            </div>
        </a>
        <a href="/">
            <div className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] ml-12">
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>Fourth Project</p>
            </div>
        </a>
    </div>
);

const LinksList = () => (
    <div className="flex flex-col">
        <a href="/">
            <div className="ml-8 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={MailLogo}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>E-Mail</p>
            </div>
        </a>
        <a href="/">
            <div className="ml-8 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a]">
                <img
                    src={GitLogo}
                    alt="TS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>GitHub</p>
            </div>
        </a>
        <a href="/">
            <div className="ml-8 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300">
                <img
                    src={LinkedinLogo}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-1 text-yellow_vs"
                />
                <p>LinkedIn</p>
            </div>
        </a>
    </div>
);

export default SideBar;
