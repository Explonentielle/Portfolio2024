import React, { useEffect } from 'react'
import Skill from './Skill'
import { skills } from '../lib/data'

const Skills = () => {

    return (
        <section className='mb-32' id='skills'>
            <div>
                <h2 className='skillsTitle mb-5 ml-32 text-5xl text-white font-bold'>Thechnical Stack</h2>
            </div>
            <div className='flex stack'>
                <div className='flex flex-col'>
                    <p className='vertical-text text-2xl text-white font-extrabold'>FRONT</p>
                    <p className='vertical-text text-2xl text-white font-extrabold'>BACK</p>
                    <p className=''></p>
                </div>
                <div className='flex flex-wrap skills'>
                    {skills.map((skill, index) => (
                        <Skill skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills