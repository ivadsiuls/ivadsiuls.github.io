import { Environment, OrbitControls } from '@react-three/drei'
// import { NameObject } from './NameObject'
import DotScreenShader from './DotScreenShader.tsx'

export function Experience() {
    return (
        <>
            <OrbitControls enableZoom={false} enableRotate={false}/>
            <Environment preset="sunset" />
            <DotScreenShader />
        </>
    )
}