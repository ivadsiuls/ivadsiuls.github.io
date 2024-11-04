/* quick disclaimer, I'm not a web dev. I don't do this often and probably won't do this again in a long time.
    I have no idea if I'm using react correctly. but if you see some cringe-worthy lines of code... don't blame me!
 */

import './App.css'

import { Canvas } from '@react-three/fiber'
import { Experience } from "./components/Experience"
import { UI } from "./components/UI"
import * as THREE from 'three'

function App() {

  // disable scrolling
  document.body.style.overflow = "hidden"

  window.onscroll = () => window.scroll(0, 0)

  // react app
  return (
      <div className='application'>
          <Canvas
                  gl={{
                      antialias: true,
                      powerPreference: 'high-performance',
                      outputColorSpace: THREE.SRGBColorSpace,
                      toneMapping: THREE.NoToneMapping
                  }}>

              <color attach="background" args={["#171720"]} />
              <Experience />
          </Canvas>
          <UI />
      </div>
  )
}

export default App
