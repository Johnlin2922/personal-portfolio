import { useState } from "react";
import tw from "tailwind-styled-components";
import { XIcon } from "@heroicons/react/solid";

const TabContainer = tw.div`
  h-full 
  flex 
  items-center 
  justify-center
  px-4 
  text-white 
  hover:bg-[#1e1e1e]
  hover:text-yellow_vs
  cursor-pointer
  text-lg
  font-medium
  text-gray-300
`;

const ReactIcon = require("../assets/icons/ReactIcon.png");

const NavBar = ({ activeTab, setActiveTab }) => {
    const [closedTabs, setClosedTabs] = useState([]);
    console.log("Active Tab: ", activeTab);
    console.log("Active Tab == home: ", activeTab == "home");

    return (
        <div className="flex flex-row h-full">
            <TabContainer
                className={
                    activeTab == "home"
                        ? "bg-[#1e1e1e] text-yellow_vs"
                        : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
                }
                onClick={() => {
                    setActiveTab("home");
                }}
            >
                <img
                    src={ReactIcon}
                    alt="ReactIcon"
                    className="w-7 mr-1 text-yellow_vs"
                />
                Home.jsx
            </TabContainer>

            {closedTabs.includes("about") ? null : (
                <TabContainer
                    hidden={"about" in closedTabs}
                    className={
                        activeTab == "about"
                            ? "bg-[#1e1e1e] text-yellow_vs"
                            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
                    }
                    onClick={() => {
                        setActiveTab("about");
                    }}
                >
                    <img
                        src={ReactIcon}
                        alt="React Icon"
                        className="w-7 mr-1 text-yellow_vs"
                    />
                    About.jsx
                    <XIcon
                        className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("home");
                            setClosedTabs((prevState) => [
                                ...prevState,
                                "about",
                            ]);
                        }}
                    />
                </TabContainer>
            )}
            {closedTabs.includes("resume") ? null : (
                <TabContainer
                    hidden={"resume" in closedTabs}
                    className={
                        activeTab == "resume"
                            ? "bg-[#1e1e1e] text-yellow_vs"
                            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
                    }
                    onClick={() => {
                        setActiveTab("resume");
                    }}
                >
                    <img
                        src={ReactIcon}
                        alt="React Icon"
                        className="w-7 mr-1 text-yellow_vs"
                    />
                    Resume.jsx
                    <XIcon
                        className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("home");
                            setClosedTabs((prevState) => [
                                ...prevState,
                                "resume",
                            ]);
                        }}
                    />
                </TabContainer>
            )}
            {closedTabs.includes("contact") ? null : (
                <TabContainer
                    hidden={"contact" in closedTabs}
                    className={
                        activeTab == "contact"
                            ? "bg-[#1e1e1e] text-yellow_vs"
                            : "hover:bg-[#1e1e1e] hover:text-yellow_vs"
                    }
                    onClick={() => {
                        setActiveTab("contact");
                    }}
                >
                    <img
                        src={ReactIcon}
                        alt="React Icon"
                        className="w-7 mr-1 text-yellow_vs"
                    />
                    Contact.jsx
                    <XIcon
                        className="w-6 ml-4 hover:bg-gray-600 hover:rounded"
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("home");
                            setClosedTabs((prevState) => [
                                ...prevState,
                                "contact",
                            ]);
                        }}
                    />
                </TabContainer>
            )}
        </div>
    );
};

export default NavBar;
