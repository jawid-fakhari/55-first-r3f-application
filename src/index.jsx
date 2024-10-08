import { Canvas } from '@react-three/fiber'
import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    zoom: 100,
    fov: 45,
    near: 0.1,
    far: 200,
    position: [3, 2, 6]
}

root.render(
    <Canvas orthographic camera={cameraSettings}>
        <Experience />
    </Canvas>
)