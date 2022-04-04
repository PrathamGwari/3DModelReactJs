import React from "react";
import {Canvas, useFrame} from '@react-three/fiber'
import IP13PROOR from './components/IP13PROOR.js'
import {OrbitControls} from '@react-three/drei'

function App() {
  return (
    <>
      <div style={{height: "100vh", display: 'flex', justifyContent: "center", alignItems: "center"}}>
      <div style={{height: "80%", width: "50%", backgroundColor: "black"}}>
      <Canvas>
        <OrbitControls/>
        <directionalLight intensity={0.5} />
        <ambientLight intensity={2}/>

        <IP13PROOR/>
      </Canvas>
      </div>
      </div>
    </>
  );
}

export default App;
