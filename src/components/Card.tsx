"use client";

// import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import { MousePointerSquare } from 'lucide-react';
import { useHeaderContext } from '../Context';
import { projectsData } from '../lib/data'


export default function Card({ src, title, link, techno }) {
    const { isOpen, openModal, setModalContent, modalContent } = useHeaderContext();

    const open = (title) => {
        updateModalContent(title)
        openModal(!isOpen);
        
    };

    const updateModalContent = (title) => {
        const selectedProject = projectsData.find(project => project.title === title);
    
        if (selectedProject) {
          setModalContent(prevModalContent => ({
            ...prevModalContent,
            title: selectedProject.title,
            content: selectedProject.content,
            src: selectedProject.src,
            link: selectedProject.link,
            linkBis: selectedProject.linkBis,
            techno: selectedProject.techno,
          }));
        }
      };

    return (
        <CardContainer className="cardContainer p-2 inter-var m-3">
            <CardBody className=" projectCard bg-card relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className=" titleCard text-2xl font-extrabold text-neutral-600 text-white dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <img
                        // height="1000"
                        // width="1000"
                        className=" w-full h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                        src={src}
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="ml-2 font-bold text-neutral-500 text-s max-w-sm mt-2 text-white dark:text-neutral-300"
                >
                    <div className="flex cursor" onClick={() => open(title)}>
                        en Savoir plus
                        <MousePointerSquare />
                    </div>
                </CardItem>
                <div className="flex flex-col justify-between items-center mt-4">
                    <div className="mb-4">
                        {techno.map((item, index) => (
                            <CardItem
                                key={index}
                                translateZ={20}
                                as="button"
                                className=" cardButton px-4 py-2 m-2 rounded-xl bg-button dark:bg-white dark:text-black text-white font-bold"
                            >
                                {item}
                            </CardItem>
                        ))}
                    </div>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 bg-link rounded-xl text-xs font-normal text-white dark:text-white"
                    >
                        <a href={link}>
                            View source code
                        </a>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}