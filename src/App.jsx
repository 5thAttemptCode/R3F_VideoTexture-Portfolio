import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Experience'

export default function App() {
  return (
    <Canvas gl={{ alpha: false }} camera={{ position: [0, 0, 20], fov: 15 }}>
      <Experience />
    </Canvas>
  )
}

