import React, { useState } from "react";
import {
    MenuIcon,
    XIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from "@heroicons/react/solid";
import { Disclosure, Transition } from "@headlessui/react";
import SideBar from "./SideBar";

const JSIcon = require("../assets/icons/JSIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");

const MobileMenu = () => {
    const projects = [
        {
            name: "First Project",
            href: "#",
            icon: (
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
            ),
            current: true,
        },
        {
            name: "Second Project",
            href: "#",
            icon: (
                <img
                    src={TSIcon}
                    alt="TS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
            ),
            current: false,
        },
        {
            name: "Third Project",
            href: "#",
            icon: (
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
            ),
            current: false,
        },
        {
            name: "Fourth Project",
            href: "#",
            icon: (
                <img
                    src={JSIcon}
                    alt="JS Icon"
                    className="w-7 mr-1  ml-5 text-yellow_vs"
                />
            ),
            current: false,
        },
    ];
    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const [showProjectsList, SetShowProjectsList] = useState(true);

    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        {open ? (
                            <XIcon className="block w-16" aria-hidden="true" />
                        ) : (
                            <MenuIcon
                                className="block w-16"
                                aria-hidden="true"
                            />
                        )}{" "}
                    </Disclosure.Button>

                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <div className="flex">
                            <SideBar />
                        </div>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default MobileMenu;
