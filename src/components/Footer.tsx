import React, { useState, useEffect } from 'react';
import { Google } from './models/Google';
import { Linkedin } from './models/Linkedin';
import { Github } from './models/Github';
import { Twitter } from './models/Twitter';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, Environment } from '@react-three/drei';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  // Fonction pour gérer le défilement de la page
  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if (windowHeight + scrollTop === documentHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='footer' style={{ opacity: showFooter ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
      <div className='canvaContainer'>
        <a href="https://github.com/">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color={'black'} />
            <Github position={[0, 0, 0]} />
            <Environment preset='sunset' />
          </Canvas>
        </a>
        <a href="mailto:alex59debonnieres@gmail.com:">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color={'black'} />
            <Google position={[0, 0, 0]} />
            <Environment preset='sunset' />
          </Canvas>
        </a>
        <a href="https://Linkedin.com/">
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color={'black'} />
            <Linkedin position={[0, 0, 0]} />
            <Environment preset='sunset' />
          </Canvas>
        </a>
        <a href="https://Twitter.com/">
          <Canvas camera={{ position: [-0.35, 0, 5], fov: 45 }}>
            <ContactShadows opacity={1} scale={10} blur={1} far={10} resolution={256} color={'black'} />
            <Twitter position={[0, 0, 0]} />
            <Environment preset='sunset' />
          </Canvas>
        </a>
      </div>
      <div className='footerCopy'>
        <h2>© ADB Developpement 2024</h2>
        <p>Creative and fullstack developer</p>
      </div>
    </div>
  );
}

export default Footer;
