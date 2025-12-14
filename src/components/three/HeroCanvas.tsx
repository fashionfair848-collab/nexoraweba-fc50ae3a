import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";

const HexagonMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const hexagonShape = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const size = 2;
    
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      if (i === 0) {
        shape.moveTo(x, y);
      } else {
        shape.lineTo(x, y);
      }
    }
    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    steps: 1,
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 3,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={0.8}>
        <extrudeGeometry args={[hexagonShape, extrudeSettings]} />
        <MeshDistortMaterial
          color="#3B82F6"
          emissive="#60a5fa"
          emissiveIntensity={0.2}
          metalness={0.7}
          roughness={0.3}
          distort={0.2}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const Particles = ({ isDark }: { isDark: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 150;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.03}
        color={isDark ? "#60a5fa" : "#3B82F6"}
        transparent
        opacity={isDark ? 0.6 : 0.4}
        sizeAttenuation
      />
    </points>
  );
};

const HeroCanvas = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.4 : 0.6} />
        <directionalLight position={[5, 5, 5]} intensity={isDark ? 1 : 0.8} color="#3B82F6" />
        <directionalLight position={[-5, -5, 5]} intensity={0.5} color="#60a5fa" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />
        
        <HexagonMesh />
        <Particles isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
