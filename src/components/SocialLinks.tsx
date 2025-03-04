import React from "react";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function SocialLinks() {
    return (
        <div
            className="flex space-x-4" // Tailwind for positioning and spacing
        >
            <a
                href="https://github.com/glulu4"
                target="_blank"
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="rounded-md bg-transparent p-2 hover:bg-gray-200 transition-colors"
            >
                <FaGithub style={{color: "black", fontSize: "24px"}} />
            </a>

            <a
                href="https://www.linkedin.com/in/gabriel-lulu/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-transparent p-2 hover:bg-gray-200 transition-colors"
            >
                <FaLinkedin style={{color: "#0072b1", fontSize: "24px"}} />
            </a>
        </div>
    );
}

export default SocialLinks;