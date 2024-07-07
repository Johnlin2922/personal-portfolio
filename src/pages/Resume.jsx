import React from "react";
import { ClipboardListIcon } from "@heroicons/react/solid";

const Resume = () => {
    return (
        <div
            id="Resume"
            className="lg:w-4/5 mt-24 text-justify mx-12 lg:ml-24 mb-96"
        >
            <div>
                <div className="table">
                    <ClipboardListIcon className="h-5 w-5 mr-4 text-yellow_vs" />{" "}
                    <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
                        Resume
                    </code>
                    <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
                </div>
            </div>
            <div className="text-[#a2aabc] text-lg mt-5">
                <div className="flex flex-col md:flex-row gap-4 md:gap-0">
                    <div className="w-1/4">
                        <code className="text-yellow_vs text-2xl">
                            Education
                        </code>
                    </div>
                    <div className="md:w-3/4">
                        <code className="text-blue_vs text-2xl">
                            Jacksonville State University
                        </code>
                        <br />
                        <code className="italic text-m text-lightblue_vs">
                            Masters of Science in Computer Systems and Software
                            Design
                        </code>
                        <br />
                        <code className="text-s text-brown_vs">
                            • January 2020 - May 2021 Graduated with 4.0 GPA
                        </code>
                        <br />
                        <code className="italic text-m text-lightblue_vs">
                            Bachelors of Science in Computer Science
                        </code>
                        <br />
                        <code className="text-s text-brown_vs">
                            • August 2015 - December 2018 Graduated with 3.8 GPA
                        </code>
                    </div>
                </div>
                <div className="flex flex-col pt-10 md:flex-row gap-4 md:gap-0">
                    <div className="w-1/4">
                        <code className="text-yellow_vs text-2xl">Work</code>
                    </div>
                    <div className="md:w-3/4">
                        <code className="text-blue_vs text-2xl">
                            Leidos Dynetics
                        </code>
                        <br />
                        <code className="italic text-m text-lightblue_vs">
                            Huntsville, AL{" "}
                        </code>
                        <br />
                        <code className="text-s text-brown_vs">
                            • May 2021 - Present
                        </code>
                        <br />
                        <code className="text-m">
                            <br />• Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                            <br />• Sed id eros non nisi vulputate eleifend.
                            Vestibulum erat ipsum, lacinia ut nibh ut, pulvinar
                            interdum lorem.
                            <br />• Aliquam et nisi eu risus ultrices suscipit
                            nec nec quam.
                            <br />• Suspendisse pretium fermentum luctus.
                            <br />• Maecenas vitae vestibulum ipsum, ut varius
                            diam.
                            <br />• Phasellus mattis nunc vel purus maximus.
                        </code>
                    </div>
                </div>
                <div className="flex flex-col pt-10 flex-wrap md:flex-row">
                    <div className="w-1/4">
                        <code className="text-yellow_vs text-2xl">Skills</code>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-m font-mono">
                            <br />• Nulla tristique luctus lacinia. Nullam ut
                            tortor arcu.
                            <br />• Aenean in mi non leo placerat suscipit a
                            eget odio.
                            <br />• Vivamus et dolor odio.
                            <br />• Suspendisse tempus interdum eros, et
                            bibendum massa tempus vitae.
                            <br />• Sed in aliquam ligula. Sed eget orci tortor.
                            <br />• Pellentesque laoreet laoreet justo, sed
                            efficitur sapien tincidunt eu.
                            <br />• Nulla tempor nunc eu molestie volutpat. Nunc
                            a accumsan dolor.
                            <br />• Duis ut congue dui.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
