import React, { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import Contact from "./Contact";

const Home = () => {
    const [activeTab, setActiveTab] = useState("home");
    const sideBarWidth = 270;

    return (
        <div className="App flex h-full">
            <div
                className="bg-[#262526] h-full fixed hidden lg:block"
                style={{ width: `${sideBarWidth}px` }}
            >
                <SideBar />
            </div>
            <div className="bg-[#1e1e1e] h-full">
                <div
                    className="bg-[#424042] h-16 hidden lg:block"
                    style={{ paddingLeft: `${sideBarWidth}px` }}
                >
                    <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
                </div>
                {activeTab === "home" && (
                    <div style={{ paddingLeft: `${sideBarWidth}px` }}>
                        <Contact />
                    </div>
                )}
                {activeTab === "contact" && (
                    <div style={{ paddingLeft: `${sideBarWidth}px` }}>
                        <Contact />
                    </div>
                )}
                {activeTab === "about" && (
                    <div style={{ paddingLeft: `${sideBarWidth}px` }}>
                        <Contact />
                    </div>
                )}
                {activeTab === "resume" && (
                    <div style={{ paddingLeft: `${sideBarWidth}px` }}>
                        <Contact />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
