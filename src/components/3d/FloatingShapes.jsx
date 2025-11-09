import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

const Shape = ({ position, color, geometry }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4) / 2;
      meshRef.current.rotation.y = Math.sin(time / 2) / 2;
      meshRef.current.position.y = position[1] + Math.sin(time) / 10;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      {geometry}
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0}
        metalness={0.8}
      />
    </mesh>
  );
};

export const FloatingShapes = () => {
  return (
    <group>
      {/* Icosahedron */}
      <Shape
        position={[-2, 0, 0]}
        color="#3b82f6"
        geometry={<icosahedronGeometry args={[1, 0]} />}
      />

      {/* Torus Knot */}
      <Shape
        position={[2, 0, 0]}
        color="#8b5cf6"
        geometry={<torusKnotGeometry args={[0.6, 0.25, 100, 16]} />}
      />

      {/* Octahedron */}
      <Shape
        position={[0, -1.5, -1]}
        color="#ec4899"
        geometry={<octahedronGeometry args={[0.8, 0]} />}
      />
    </group>
  );
};
