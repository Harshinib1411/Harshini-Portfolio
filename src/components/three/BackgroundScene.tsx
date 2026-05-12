import { Canvas } from '@react-three/fiber'
import { FloatingSphere } from './FloatingSphere'

export function BackgroundScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[3, 4, 5]} intensity={1.8} color="#67e8f9" />
        <pointLight position={[-4, -2, 3]} intensity={1.2} color="#f0abfc" />
        <group position={[2.7, 0.2, 0]}>
          <FloatingSphere />
        </group>
      </Canvas>
    </div>
  )
}
