/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/twitter.glb 
Author: pengedarseni (https://sketchfab.com/pengedarseni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-twitter-x-logo-814e35fbc3e543ac91ca959355f251c0
Title: 3D Twitter X Logo
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Twitter(props) {
  const { nodes, materials } = useGLTF('models/twitter.glb')
  const [isHovered, setIsHovered] = useState(false);
  const group = useRef();
  const originalRotation = useRef([Math.PI / 2, 0, 0]);
  const rotationSpeed = 0.15;
  
  useEffect(() => {
    if (group.current) {
      originalRotation.current = [...group.current.rotation];
    }
  }, []);

  useFrame(() => {
    if (isHovered) {
      group.current.rotateY(rotationSpeed);
    } else {
      group.current.rotation.y += (originalRotation.current[1] - group.current.rotation.y) * 0.1;
    }
  });
  return (
    <group  onPointerEnter={(e) => setIsHovered(true)} onPointerLeave={(e) => setIsHovered(false)} ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={props.position} scale={0.5}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.github} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.glossy_putih} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/twitter.glb')
