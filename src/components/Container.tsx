import React from 'react'
import SocialIcons from './SocialIcons'
import Skills from './Skills';
import Projects from './Projects';
import Contacts from './Contacts';
import { socials } from '../lib/data'
import { ScrollBar } from './ScrollBar';
import Footer from "./Footer"



const Container = () => {
    return (
        <div className='innerContainer p-32 '>
            <section id='home' className='heroBaner p-32'>
                <h3 className='text-3xl text-white '>Hey there, I'm</h3>
                <div className='mt-2 pl-2'>
                    <h1 className='mb-10 text-8xl text-white font-bold'><p className='text-8xl font-bold'>Alexandre</p> De Bonnieres</h1>
                    <p className='text-3xl text-white w-2/3 '><b>Fullstack Developer</b>  and creative coder, based in Lille France.  I'm actively <a className='underline' href="https://www.linkedin.com" target="_blank" rel="noreferrer"> seeking opportunities.</a></p>
                </div>
                <div className='links mt-10'>
                    <ul className='flex'>
                        {socials.map((social, index) => (
                            <SocialIcons social={social} index={index} />
                        ))}
                    </ul>
                </div>
            </section>

            <ScrollBar />

            <Projects />
            
            <Skills />


            <Contacts />

            <Footer />

        </div>
    )
}

export default Container

