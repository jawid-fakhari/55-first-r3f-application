import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

//Come creare un costum geometry
//Piu o meno uguale al native three.js
function CustomObject() {
    const geometryRef = useRef()

    const verticesCount = 10 * 3

    //useMemo: mandiamo una func al useMemo, lui lo chiama e ricorda il valore, e se il componente viene renderizzato di nuovo allora useMemo ritorna il valore gia preso dalla prima chiamata di func
    const positions = useMemo(() => {

        const positions = new Float32Array(verticesCount * 3)

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3
        }

        return positions
    }, [])

    useEffect(() => {
        geometryRef.current.computeVertexNormals()
    }, [])

    return (
        <>
            <mesh>
                <bufferGeometry ref={geometryRef}>
                    <bufferAttribute
                        attach="attributes-position"
                        count={verticesCount}
                        itemSize={3}
                        array={positions}
                    />
                </bufferGeometry>
                <meshStandardMaterial color="blue" side={THREE.DoubleSide} />
            </mesh>
        </>
    )
}

export default CustomObject