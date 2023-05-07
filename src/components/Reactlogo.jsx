/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 reactlogo.gltf --transform
Author: xenadus (https://sketchfab.com/xenadus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/react-logo-76174ceeba96487f9863f974636f641e
Title: React logo
*/


import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/reactlogo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        
        <mesh geometry={nodes['React-Logo_Material002_0'].geometry} material={materials['Material.002']} position={[0, 7.94, 18.1]} rotation={[0, 0, -Math.PI / 2]} scale={[39.17, 39.17, 52.73]} />
      </group>
    </group>
  )
}

useGLTF.preload('/reactlogo-transformed.glb')