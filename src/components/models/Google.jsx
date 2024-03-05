/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/google.glb 
Author: pengedarseni (https://sketchfab.com/pengedarseni)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/3d-google-logo-09643bdcd49843fc892067acfa75bc15
Title: 3D Google Logo
*/

import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Google(props) {
  const { nodes, materials } = useGLTF('models/google.glb')
  const [isHovered, setIsHovered] = useState(false);
  const group = useRef();
  const originalRotation = useRef([Math.PI / 2, 0, 0]);
  const rotationSpeed = 0.2;
  
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
        <group position={props.position} scale={0.45}>
          <mesh geometry={nodes.Object_4.geometry} material={materials['glossy_putih.002']} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.google_3_GLOS} />
          <mesh geometry={nodes.Object_6.geometry} material={materials.google_4_GLOS} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.google2_GLOS} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.google_1_GLOS} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/google.glb')
