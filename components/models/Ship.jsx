/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/ship/scene.gltf --transform 
Files: public/ship/scene.gltf [28.54KB] > C:\Users\Najiite\NextJs\thrap\scene-transformed.glb [1.84MB] (-6344%)
Author: Conrad Justin (https://sketchfab.com/ConradJustin)
License: SKETCHFAB Standard (https://sketchfab.com/licenses)
Source: https://sketchfab.com/3d-models/shipwreck-turned-into-hideout-7a04de41ba9544d08364997ecd74b217
Title: Shipwreck turned into hideout
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ship(props) {
  const { nodes, materials } = useGLTF('/models/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object1264_Object1264_mtl_0.geometry} material={materials.Object1264_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1265_Object1265_mtl_0.geometry} material={materials.Object1265_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1266_Object1266_mtl_0.geometry} material={materials.Object1266_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1267_Object1267_mtl_0.geometry} material={materials.Object1267_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1268_Object1268_mtl_0.geometry} material={materials.Object1268_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1269_Object1269_mtl_0.geometry} material={materials.Object1269_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1270_Object1270_mtl_0.geometry} material={materials.Object1270_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
      <mesh geometry={nodes.Object1271_Object1271_mtl_0.geometry} material={materials.Object1271_mtl} rotation={[-Math.PI / 2, 0, 0]} scale={0.001} />
    </group>
  )
}

useGLTF.preload('/models/scene-transformed.glb')
