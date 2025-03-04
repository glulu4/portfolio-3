// import React, {useState} from 'react'
// import MyModal from './MyModal';
// import {usePathname} from 'next/navigation';

// export default function Links() {

//     const [isModalVisible, setIsModalVisible] = useState(false);


//     const links = [
//         {
//             name: "Home",
//             url: "/"
//         },
//         {
//             name: "Work",
//             url: "/projects"
//         },
//         // {
//         //     name: "About",
//         //     url: "/about"
//         // },
//         {
//             name: "Contact",
//             url: "/contact"
//         },
//     ]

//     const pathName = usePathname();

//     const linksToDisplay = links.filter((link) => link.url !== pathName);

//     console.log(linksToDisplay);
    
//   return (
//     <div className="pl-2 flex flex-row items-center gap-6 text-textTert text-lg">
//       {linksToDisplay.map((link) => (
//         link.name === "Contact" ? (
//         <button key={link.url} onClick={() => setIsModalVisible(true)} className="hover:text-hoverColor">
//           {link.name}
//         </button>
//         ) : (
//         <a key={link.url} href={link.url} className="hover:text-hoverColor">
//           {link.name}
//         </a>
//         )
//       ))}
//       <MyModal
//         isOpen={isModalVisible}
//         onClose={() => setIsModalVisible(false)}
//       >
//         <p>Contact form or information goes here.</p>
//           </MyModal>
//     </div>
//   )
// }


"use client";
import React, {useState, useEffect} from "react";
import {usePathname} from "next/navigation";
import Modal from "./MyModal";
import ContactModal from "./ContactModal";
import SocialLinks from "./SocialLinks";

export default function Links() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pathName, setPathName] = useState("");

    useEffect(() => {
        setPathName(window.location.pathname); // Ensure pathname is set after client renders
    }, []);

    const links = [
        {name: "Home", url: "/"},
        {name: "Work", url: "/projects"},
        {name: "Contact", url: "/contact"},
    ];

    const linksToDisplay = links.filter((link) => link.url !== pathName);

    return (
        <div className="pl-2 flex flex-row items-center gap-6 text-textTert text-lg">
            {linksToDisplay.map((link) =>
                link.name === "Contact" ? (
                    <button
                        key={link.url}
                        onClick={() => setIsModalVisible(true)}
                        className="hover:text-hoverColor"
                    >
                        {link.name}
                    </button>
                ) : (
                    <a key={link.url} href={link.url} className="hover:text-hoverColor">
                        {link.name}
                    </a>
                )
            )}
            <ContactModal isOpen={isModalVisible} setIsOpen={() => setIsModalVisible(false)}>
                <div className="pl-2">
                    <p className="text-white font-medium sm:text-lg tracking-widest">gabriel.lulu80@gmail.com</p>
                </div>
                <div className="pt-5">
                    <SocialLinks />
                </div>
            </ContactModal>
        </div>
    );
}
