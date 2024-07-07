import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
    return (
        <div id="Contact" className="pb-72 mt-36">
            <div className="table mx-12 lg:mx-60">
                <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
                <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                    Get In Touch
                </code>
                <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
                <code>
                    I'm always excited to hear about new opportunities and
                    connect with others. Whether you have a question, a project
                    idea, or just want to say hello, feel free to reach out!
                    Click the button below to contact me, and I'll do my best to
                    respond promptly. Looking forward to hearing from you!
                </code>
                <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
                    <a href="mailto:Johnlin2922@gmail.com">
                        <code>Contact</code>
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Contact;