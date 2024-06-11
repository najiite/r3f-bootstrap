import { OrbitControls, ScrollControls } from '@react-three/drei'
import React from 'react'
import { Ship } from './models/Ship'

const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={2} damping={0.25} />
      <Ship />
    </>
  )
}

export default Experience