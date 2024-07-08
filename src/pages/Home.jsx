import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Contact from "./Contact";
import Header from "../components/Header";
import About from "./About";
import Resume from "./Resume";
import { useWindowSize } from "../Utilities/Utilities";
import MobileMenu from "../components/MobileMenu";

const Home = () => {
    const [activeTab, setActiveTab] = useState("home");
    const sideBarWidth = 270;

    const windowSize = useWindowSize();

    const getPaddingLeftValue = () => {
        if (windowSize.width >= 1024) {
            return sideBarWidth;
        } else {
            return 0;
        }
    };

    return (
        <div className="App flex h-full">
            <div
                className="bg-[#262526] h-full fixed hidden lg:block sm:pl-0"
                style={{ width: `${sideBarWidth}px` }}
            >
                <SideBar />
            </div>
            <div className="bg-[#1e1e1e] h-full">
                <div className="lg:hidden">
                    <div>
                        <MobileMenu />
                    </div>
                </div>
                <div
                    className="bg-[#424042] h-16 hidden lg:block"
                    style={{ paddingLeft: `${sideBarWidth}px` }}
                >
                    <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                {activeTab === "home" && (
                    <div
                        style={{ paddingLeft: `${getPaddingLeftValue()}px` }}
                        className="w-screen"
                    >
                        <Header />
                        <About />
                        <Resume />
                        <Contact />
                    </div>
                )}
                {activeTab === "contact" && (
                    <div
                        style={{ paddingLeft: `${sideBarWidth}px` }}
                        className="w-screen"
                    >
                        <Contact />
                    </div>
                )}
                {activeTab === "about" && (
                    <div
                        style={{ paddingLeft: `${sideBarWidth}px` }}
                        className="w-screen"
                    >
                        <About />
                    </div>
                )}
                {activeTab === "resume" && (
                    <div
                        style={{ paddingLeft: `${sideBarWidth}px` }}
                        className="w-screen"
                    >
                        <Resume />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
