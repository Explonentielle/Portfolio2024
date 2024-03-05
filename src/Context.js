import React, { createContext, useContext, useEffect, useState } from 'react';
import 'intersection-observer';

const HeaderContext = createContext();

export const ContextProvider = ({ children }) => {
    const [showScrollDown, setShowScrollDown] = useState(true);
    const [sectionOn, setSectionOn] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({
        title: "",
        content: "",
        src: "",
        link: "",
        linkBis: "",
        techno: "",
    });

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };


    useEffect(() => {
        const handleScroll = () => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setSectionOn(entry.target.id);
                    }
                });
            }, {
                threshold: 0.5 // La moitié de l'élément est visible
            });

            // Observer chaque section avec un ID
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => observer.observe(section));
        };

        handleScroll(); // Appeler une fois pour initialiser
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 


    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY === 0) {
                setShowScrollDown(true);
            } else {
                setShowScrollDown(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <HeaderContext.Provider value={{ showScrollDown, sectionOn, isOpen, closeModal, openModal, modalContent, setModalContent }}>
            {children}
        </HeaderContext.Provider>
    );
};

export const useHeaderContext = () => {
    return useContext(HeaderContext);
};
