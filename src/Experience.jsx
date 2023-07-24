import { MeshReflectorMaterial, OrbitControls, Text, useTexture } from '@react-three/drei'
import React, { useEffect, useState } from 'react'

export default function Experience() {
  return (
    <>
        <OrbitControls />
        <ambientLight intensity={0.8} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <directionalLight position={[-20, 0, -12]} intensity={0.5} />
        <group position={[0, -1.5, 0]}>
          <VideoText position={[0, 1.6, -2]}  />
          <Ground />
        </group>
    </>
  )
}


function VideoText(props) {

  const [ video ] = useState(() => Object.assign(document.createElement('video'), { src: '/video.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])

  return(
    <Text fontSize={3} font="/Font.ttf" {...props}>
      timo
      <meshBasicMaterial toneMapped={false}>
        <videoTexture 
          attach="map" 
          args={[video]} 
        />
      </meshBasicMaterial>
    </Text>
  )
}


function Ground(){
  const [ floor, normal ] = useTexture(["/Material.jpg", "/Normal.jpg"])
  return(
    <mesh rotation-x={-1.5}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial 
        blur={[400, 100]}
        resolution={512}
        mixBlur={1}
        mixStrength={80}
        roughness={floor}
        depthScale={1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#18110e" 
        metalness={0.5}
        normalMap={normal}
        normalScale={[1, 1]} 
      >
      </MeshReflectorMaterial>
    </mesh>
  )
}