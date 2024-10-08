import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function Experience() {

  //usiamo useRef hook a referenziare il valore del mesh del cubo
  const cubeRef = useRef()

  //useFrame prende il valore corrente del rotazione sul asse y e aggiunge 0.01
  //nel useFrame basta passare due parameteri state e delta, e quindi non c'è bisogno di fare il calcolo di delta. state ci ritorna lo stato dello mesh
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta * 0.5
  })

  return (
    <>
      <mesh ref={cubeRef} rotation-y={Math.PI * 0.23} position={[2, 0, 0]} scale={1.5}>
        <boxGeometry />
        <meshBasicMaterial color="mediumPurple" wireframe />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience