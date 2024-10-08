import { useMemo } from 'react'
import * as THREE from 'three'

//Come creare un costum geometry
//Piu o meno uguale al native three.js
function CustomObject() {

    const verticesCount = 10 * 3

    //useMemo: mandiamo una func al useMemo, lui lo chiama e ricorda il valore, e se il componente viene renderizzato di nuovo allora useMemo ritorna il valore gia preso dalla prima chiamata di func
    const positions = useMemo(() => {

        const positions = new Float32Array(verticesCount * 3)

        for (let i = 0; i < verticesCount * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 3
        }

        return positions
    }, [])
    

    return (
        <>
            <mesh>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={verticesCount}
                        itemSize={3}
                        array={positions}
                    />
                </bufferGeometry>
                <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
            </mesh>
        </>
    )
}

export default CustomObject