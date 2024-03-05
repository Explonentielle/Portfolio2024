import React from "react";
import { useHeaderContext } from '../Context';
import { MousePointerSquare } from 'lucide-react';

export default function Modal() {
    const { isOpen, closeModal, modalContent } = useHeaderContext();
    console.log(modalContent.linkBis)

    if (!isOpen) return null;

    return (
        <div className="modalFixed w-full top-0 left-0 p-2">
            <div className="relative flex w-auto h-full flex-col bg-gray-800 rounded-lg bg-opacity-95">
                <div className=" absolute top-10 right-10 p-2 rounded-lg">
                    <button className="px-4 py-2 bg-gray-400 bg-opacity-95 text-xl text-white font-bold rounded-lg" onClick={closeModal}>
                        Close
                    </button>
                </div>
                <div className="p-32 innerCont">
                    <div>
                        <h2 className="text-6xl titleModal font-extrabold mb-16">{modalContent.title}</h2>
                    </div>
                    <div>
                        <div className="flex">
                            <p className="text-lg text-gray-400 mb-8 w-3/4">{modalContent.content.description}</p>


                            <div className="flex flex-wrap justify-center ">
                                {modalContent.content.features.main && modalContent.content.features.main.map((feature, index) => (
                                    <div key={index} className=" w-1/3 px-4 py-2 m-2 rounded-xl modalDescription bg-button  dark:bg-white dark:text-black text-white ">
                                        <h2 className="font-bold p-2 mb-4">{feature.title}</h2>
                                        <p className="text-ssm text-gray-400">{feature.description}</p>
                                    </div>
                                ))}
                                {modalContent.content.features.additional && modalContent.content.features.additional.map((additionalFeature, index) => (
                                    <div key={index} className="   w-1/3 px-4 py-2 m-2 rounded-xl modalDescription bg-button   dark:bg-white dark:text-black text-white">
                                        <h2 className="font-bold  p-2 mb-4">{additionalFeature.title}</h2>
                                        <p className="text-ssm text-gray-400">{additionalFeature.description}</p>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="flex flex-col items-center mt-4 ">
                            <div className="flex ">
                                {modalContent.techno && modalContent.techno.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 m-2 bg-blue-500 text-white rounded-lg text-sm">{tech}</span>
                                ))}
                            </div>
                            {modalContent.link && (
                                <div className="flex items-center justify-around w-3/4">
                                   <a href={modalContent.linkBis} target="_blank" rel="noopener noreferrer" className="block mt-4 hover:underline text-white font-bold flex rounded-xl bg-gray-400 p-2 bg-opacity-95 ">
                                            Check the project <MousePointerSquare />
                                        </a>
                                    {/* {modalContent.linkBis && (
                                        <a href={modalContent.link} target="_blank" rel="noopener noreferrer" className="block mt-4 hover:underline text-white font-bold flex rounded-xl bg-gray-400 p-2 bg-opacity-95">
                                        Check source code <MousePointerSquare />
                                    </a>
                                    )} */}
                                </div>
                            )}

                            {modalContent.content.summary && (
                                <p className="mt-16 text-xl text-gray-400 font-bold px-32">{modalContent.content.summary}</p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}