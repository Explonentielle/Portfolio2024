import React from 'react';

const Skill = ({ skill, index }) => {

    return (

        <div className='m-5 p-10 skill flex flex-col' key={index} >

            {skill.name === "Figma" ? (
                <img className='skillImg' src={process.env.PUBLIC_URL + skill.path} alt={skill.name} />
            ) : (
                <svg
                    className={`svg-${skill.name}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                >
                    <path d={skill.path} />
                    <path d={skill.pathb} />

                </svg>
            )}


            <p className="p-2 text-2xl text-white font-bold">{skill.name}</p>
            <p className="p-2 text-white ">{skill.level}</p>
            <div className='flex flex-wrap justify-center'>
                {skill.experiences.map((experience, index) => (
                    <a key={index} href={experience.link}>
                        <p className={experience.name === 'Personel' ? 'text-blue m-1' : experience.name === 'M2I' ? 'text-green m-1' : 'text-pink m-1'} >{experience.name}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Skill; 