import { Canvas } from '@react-three/fiber'
import React from 'react'
import Experience from './Components/Experience'
import Info from './Components/Info'

export default function App() {
  return (
    <>
      <Canvas 
        gl={{ alpha: false }} 
        camera={{ position: [16.74, 8.31, 12.68], fov: 15 }}
      >
        <Experience />
      </Canvas>
      <Info />
    </>
  )
}

