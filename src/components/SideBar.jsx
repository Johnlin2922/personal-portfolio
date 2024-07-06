import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

const SideBar = () => {
    const [showProjects, setShowProjects] = useState(true);

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
                </div>
            </div>
        </div>
    );
};

export default SideBar;
