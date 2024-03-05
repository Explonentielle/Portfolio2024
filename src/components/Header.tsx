import React, { useState } from 'react';
import { useHeaderContext } from '../Context';


const Header = () => {
    const { showScrollDown, sectionOn } = useHeaderContext();
    const [currentTime, setCurrentTime] = useState(new Date());

    const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <header className="header">

            <div className="header__inner">
                <div className='header__logo' >
                    <span  >
                        <a href="/">
                            ADB
                        </a>
                    </span>
                    <span className="hover-reveal" >
                        Developement
                    </span>
                </div>
                <div className={showScrollDown ? "header__right" : " header__right Scrolled"}>
                    <div className='links mr-20'>
                        <ul className='flex p-1'>
                            <li className={sectionOn !== 'home' ? 'p-3 m-2' : ' p-3 m-2 bg-gray-400 rounded-3xl'}>
                                <a href="#home">
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z" /></svg>
                                </a>

                            </li>
                            <li className={sectionOn !== 'projects' ? 'p-3  m-2' : ' p-3  m-2 bg-gray-400 rounded-3xl'}>
                                <a href="#projects">
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.669 11l-1.385 9h-16.568l-1.385-9h19.338zm-13.697-9h-6.972l.714 5h2.021l-.429-3h3.694c1.112 1.388 1.952 2 4.277 2h9.283l-.2 1h2.04l.6-3h-11.723c-1.978 0-2.041-.417-3.305-2zm16.028 7h-24l2 13h20l2-13z" /></svg>                                </a>
                            </li>
                            <li className={sectionOn !== 'skills' ? 'p-3  m-2' : ' p-3  m-2 bg-gray-400 rounded-3xl'}>
                                <a href="#skills">
                                    <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M 11.5528 3.10557 C 11.8343 2.96481 12.1657 2.96481 12.4472 3.10557 L 20.4472 7.10557 C 20.786 7.27496 21 7.62123 21 8 C 21 8.37877 20.786 8.72504 20.4472 8.89443 L 18.3673 9.93441 L 20.4903 11.1286 C 20.8128 11.31 21.0087 11.6546 20.9997 12.0245 C 20.9907 12.3944 20.7782 12.7291 20.4472 12.8946 L 18.3674 13.9345 L 20.4903 15.1286 C 20.8128 15.31 21.0087 15.6546 20.9997 16.0245 C 20.9907 16.3944 20.7782 16.7291 20.4472 16.8946 L 12.4472 20.8946 C 12.1657 21.0354 11.8343 21.0354 11.5528 20.8946 L 3.55279 16.8946 C 3.22184 16.7291 3.00931 16.3944 3.0003 16.0245 C 2.99128 15.6546 3.18725 15.31 3.50974 15.1286 L 5.63258 13.9345 L 3.55279 12.8946 C 3.22184 12.7291 3.00931 12.3944 3.0003 12.0245 C 2.99128 11.6546 3.18725 11.31 3.50974 11.1286 L 5.63275 9.93441 L 3.55279 8.89443 C 3.214 8.72504 3 8.37877 3 8 C 3 7.62123 3.214 7.27496 3.55279 7.10557 L 11.5528 3.10557 Z M 7.7923 15.0144 L 6.13213 15.9482 L 12 18.8821 L 17.8679 15.9482 L 16.2077 15.0144 L 12.4472 16.8946 C 12.1657 17.0354 11.8343 17.0354 11.5528 16.8946 L 7.7923 15.0144 Z M 12.4472 12.8944 L 16.2075 11.0143 L 17.8679 11.9482 L 12 14.8821 L 6.13213 11.9482 L 7.79246 11.0143 L 11.5528 12.8944 C 11.8343 13.0352 12.1657 13.0352 12.4472 12.8944 Z M 6.23607 8 L 12 10.882 L 17.7639 8 L 12 5.11803 L 6.23607 8 Z" /></svg>                                </a>
                            </li>

                            <li className={sectionOn !== 'contact' ? 'p-3  m-2' : ' p-3  m-2 bg-gray-400 rounded-3xl'}>
                                <a href="#contact">
                                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" /></svg>                               
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header__info">
                        <span className="info-item">
                            <span className="js-temperature">11°C</span> <b>Lille</b>
                            <span className="js-currenttime">{formattedTime}</span>
                        </span>
                        <span className="info-item">
                            <span className="available available--green"></span>
                            AVAILABLE <b>FOR WORK</b>
                        </span>
                        <span className="info-item color">
                            <a className="color" href="mailto:alexandre.de.bonnieres@example.com">
                                <span>
                                    <b> alex59bonnieres@gmail.com </b>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;