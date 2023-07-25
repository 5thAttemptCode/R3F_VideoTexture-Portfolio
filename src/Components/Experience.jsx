import { MeshReflectorMaterial, OrbitControls, PresentationControls, Text, useGLTF, useTexture } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import CameraPosition from '../Helpers/CameraPosition'

export default function Experience() {
  return (
    <>
        {/* <OrbitControls /> */}
        <CameraPosition event="mousedown" />
        <ambientLight intensity={0.1} />
        <spotLight position={[0, 10, 0]} intensity={0.5} />
        <directionalLight position={[-20, 0, -12]} intensity={0.5} />
        <PresentationControls 
          global 
          polar={[-0.2, 0.1]} 
          azimuth={[ -0.5, 0.75]}
          config={{mass: 2, tension: 400}}
          snap={{mass: 4, tension: 400}}
        >
          <group position={[0, -1.5, 0]}>
            <VideoText position={[0, 1.6, -2]}  />
            <Chair rotation-y={3} position={[-1, 0.1, 3]} />
            <Ground />
          </group>
        </PresentationControls>
    </>
  )
}


function VideoText(props) {
  const [ video ] = useState(() => Object.assign(document.createElement('video'), { src: '/Video/video.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])
  return(
    <Text fontSize={3} font="/Font/Font.ttf" {...props}>
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
  const [ floor, normal ] = useTexture(["/Materials/Material.jpg", "/Materials/Normal.jpg"])
  return(
    <mesh rotation-x={-1.6}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial 
        blur={[400, 100]}
        resolution={1024}
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


function Chair(props){
  const { scene } = useGLTF("/Model/Chair.gltf")
  return <primitive object= {scene } {...props} />
}