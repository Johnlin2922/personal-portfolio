import React, { useState } from "react";
import SideBar from "../components/SideBar";

const Home = () => {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <div className="App flex h-full">
            <div
                className="bg-[#262526] h-full fixed hidden lg:block"
                style={{ width: `${270}px` }}
            >
                <SideBar />
            </div>
            Testing
        </div>
    );
};

export default Home;
