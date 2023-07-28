import { MeshReflectorMaterial, PresentationControls, Text, useGLTF, useTexture } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import CameraPosition from '../Helpers/CameraPosition'


export default function Experience() {
  return (
    <>
        <CameraPosition event="mousedown" />
        <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[7, 7, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-7, 20, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <PresentationControls 
        global 
        polar={[-0.2, 0.1]} 
        azimuth={[ -0.5, 0.75]}
        config={{mass: 2, tension: 400}}
        snap={{mass: 4, tension: 400}}
      >
        <group position={[0, -1.5, 0]}>
          <VideoText position={[0, 1.06, -2]}  />
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
  const [ floor, normal] = useTexture(["/Materials/Material4.jpg", "/Materials/Normal4.jpg"])

  return(
    <mesh rotation-x={-Math.PI * 0.5} castShadow receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial 
        blur={[400, 100]}
        resolution={1024}
        mixBlur={30}
        mixStrength={80}
        roughness={floor}
        depthScale={1}
        minDepthThreshold={0.7}
        maxDepthThreshold={1}
        depthToBlurRatioBias={0.25}
        color= {[0.015, 0.015, 0.015]}
        metalness={0}
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