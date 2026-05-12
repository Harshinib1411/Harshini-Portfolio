import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

export function FloatingSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) {
      return
    }

    meshRef.current.rotation.x = state.clock.elapsedTime * 0.18
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.32
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.18
  })

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.65, 3]} />
      <meshStandardMaterial
        color="#67e8f9"
        emissive="#0e7490"
        emissiveIntensity={0.45}
        metalness={0.75}
        roughness={0.18}
        wireframe
      />
    </mesh>
  )
}
