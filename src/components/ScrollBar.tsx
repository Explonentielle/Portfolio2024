import React from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { useHeaderContext } from '../Context';

export const ScrollBar = () => {

    const { showScrollDown } = useHeaderContext();
    

    const scrollToBottom = () => {
        const innerContainer = document.querySelector('.innerContainer');
        const scrollHeight = innerContainer.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollStep = 25;

        const scrollDown = () => {
            if (window.scrollY + windowHeight < scrollHeight*1) {
                window.scrollTo(0, window.scrollY + scrollStep);
                requestAnimationFrame(scrollDown);
            }
        };

        scrollDown();
    };

    return (
        <div className={showScrollDown ? 'scrollDowncontainer' : ' scrollDowncontainer hidden'}>
            <div onClick={scrollToBottom} className='scrollDown'>
                <div className='svgContainer'>
                    <FiChevronDown style={{ fontSize: '4rem' }} />
                    <FiChevronDown className='lastChild' style={{ fontSize: '4rem' }} />
                </div>
            </div>
        </div>
    )
}
