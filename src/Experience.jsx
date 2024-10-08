import { extend, useFrame, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/Addons.js"

//extend method, converte una classe Three.js a una versione dichiarativ e la rende disponibile in jsx
//chiamiamo extend sulla OrbitControls, cosi possiamo usare <orbitControls> all'interno di jsx
extend({ OrbitControls })

function Experience() {

  //useThree hook ci da lo stato del canvas "come nel useFrame((state, delta))" ma qui solo una volta che tutto è pronto
  //useThree contiene tutto cio che abbiamo bisogno come camera, WebGLRenderer, clock possiamo usare three.CioCheVogliamo oppure usare distructure e prendere solo cio che ci serve
  const { camera, gl } = useThree()


  //usiamo useRef hook a referenziare il valore del mesh del cubo
  const groupRef = useRef()
  const cubeRef = useRef()

  //useFrame prende il valore corrente del rotazione sul asse y e aggiunge 0.01
  //nel useFrame basta passare due parameteri state e delta, e quindi non c'è bisogno di fare il calcolo di delta. state ci ritorna lo stato dello mesh
  useFrame((state, delta) => {
    // groupRef.current.rotation.y += delta * 0.5
    cubeRef.current.rotation.y += delta * 0.5
  })

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry args={[1, 8, 1]} />
          <meshBasicMaterial color="red" wireframe />
        </mesh>

        <mesh ref={cubeRef} rotation-y={Math.PI * 0.23} position={[2, 0, 0]} scale={1.5}>
          <boxGeometry />
          <meshBasicMaterial color="mediumPurple" wireframe />
        </mesh>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  )
}

export default Experience