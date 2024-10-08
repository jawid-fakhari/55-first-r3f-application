import { useFrame } from "@react-three/fiber"

function Experience() {
  useFrame(() => {
    console.log('tick');
  })
  
  return (
    <>
      <mesh rotation-y={Math.PI * 0.23} position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumPurple" wireframe="false" />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience