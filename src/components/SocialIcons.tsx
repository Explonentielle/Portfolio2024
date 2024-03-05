import React from 'react';

const SocialIcons = ({ social, index}) => {
  return (
    <li className='p-3 m-3 rounded-3xl '>
        <a className='flex ' key={index} href={social.link} target="_blank" rel="noreferrer">
          <svg
            className="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
          >
            <path d={social.path} />
          </svg>
          <p className="p-2 text-white">{social.name}</p>
        </a>

    </li>
  );
};

export default SocialIcons;