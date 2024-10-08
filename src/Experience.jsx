import React from 'react'
import { Wireframe } from 'three/examples/jsm/Addons.js'

function Experience() {
  return (
    <>
      <mesh rotation-y={Math.PI * 0.23} position={[2,0,0]} scale={1.5}>
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <boxGeometry/>
        <meshBasicMaterial color="purple" wireframe />
      </mesh>
    </>
  )
}

export default Experience