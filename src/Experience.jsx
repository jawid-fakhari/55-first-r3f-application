import React from 'react'
import { Wireframe } from 'three/examples/jsm/Addons.js'

function Experience() {
  return (
    <>
      <mesh>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshBasicMaterial color= "purple" wireframe />
      </mesh>
    </>
  )
}

export default Experience