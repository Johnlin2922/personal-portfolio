import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";
import List from "../components/List";

const PythonLogo = require("../assets/logos/PythonLogo.png");
const ReactLogo = require("../assets/logos/ReactLogo.png");
const TypescriptLogo = require("../assets/logos/TypescriptLogo.png");
const JsLogo = require("../assets/logos/JsLogo.png");
const FirebaseLogo = require("../assets/logos/FirebaseLogo.png");
const NodeJSLogo = require("../assets/logos/NodeJSLogo.png");
const DockerLogo = require("../assets/logos/DockerLogo.png");
const CSharpLogo = require("../assets/logos/CSharpLogo.png");
const UnityLogo = require("../assets/logos/UnityLogo.png");
const JavaLogo = require("../assets/logos/JavaLogo.png");
const AndroidLogo = require("../assets/logos/AndroidLogo.png");
const WireSharkLogo = require("../assets/logos/WireSharkLogo.png");
const VisualStudioLogo = require("../assets/logos/VisualStudioLogo.png");

const skills = [
    { name: "JavaScript (ES6+)", logo: JsLogo },
    { name: "React", logo: ReactLogo },
    { name: "TypeScript", logo: TypescriptLogo },
    { name: "Python", logo: PythonLogo },
    { name: "Firebase", logo: FirebaseLogo },
    { name: "Nodejs", logo: NodeJSLogo },
    { name: "Docker", logo: DockerLogo },
    { name: "CSharp", logo: CSharpLogo },
    { name: "VisualStudio", logo: VisualStudioLogo },
    { name: "Java", logo: JavaLogo },
    { name: "Android", logo: AndroidLogo },
    { name: "WireShark", logo: WireSharkLogo },
    { name: "Unity", logo: UnityLogo },
];

const About = () => {
    return (
        <div
            id="About"
            className="flex mx-12 mt-24 lg:mx-24 items-center justify-center lg:w-4/5 mb-96"
        >
            <div>
                <div className="table">
                    <IdentificationIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
                    <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                        About Me
                    </code>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                </div>
                <div className="text-[#a2aabc] text-lg mt-5">
                    <code>
                        Hi there! I'm a software engineer passionate about
                        learning new technologies and solving complex problems
                        with a curious mindset. Outside of coding, I enjoy
                        exploring personal finance strategies and scaling rock
                        faces. I'm also a lifelong learner, diving into
                        philosophy and psychology to broaden my perspective.
                        Let's innovate and conquer challenges together!
                    </code>
                    <br />
                    <br />
                    <code>Here are a few technologies that I work with:</code>
                    <List list={skills} />
                </div>
            </div>
        </div>
    );
};

export default About;
