import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Edges } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "@/hooks/use-theme";

// Create the "N" shape geometry matching the logo
const NLetterMesh = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
    color: "#3B82F6",
    linewidth: 3,
  }), []);

  // N shape points matching the logo
  const nPoints = useMemo(() => {
    const points = [];
    // Left vertical line
    points.push(new THREE.Vector3(-0.5, -0.8, 0));
    points.push(new THREE.Vector3(-0.5, 0.8, 0));
    // Diagonal to bottom right
    points.push(new THREE.Vector3(0, 0.4, 0));
    points.push(new THREE.Vector3(0, -0.4, 0));
    // Right vertical line
    points.push(new THREE.Vector3(0.5, -0.1, 0));
    points.push(new THREE.Vector3(0.5, 0.8, 0));
    return points;
  }, []);

  return (
    <group ref={meshRef} scale={1.2}>
      {/* Left stroke */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([-0.5, -0.8, 0, -0.5, 0.8, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B82F6" linewidth={2} />
      </line>
      
      {/* Middle diagonal with connection */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0, 0.4, 0, 0, -0.4, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B82F6" linewidth={2} />
      </line>
      
      {/* Right stroke */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={2}
            array={new Float32Array([0.5, -0.1, 0, 0.5, 0.8, 0])}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#3B82F6" linewidth={2} />
      </line>
    </group>
  );
};

const HexagonMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  
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
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.08,
    bevelOffset: 0,
    bevelSegments: 2,
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.15) * 0.03;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Main hexagon - transparent with glowing edges */}
        <mesh ref={meshRef} scale={0.7}>
          <extrudeGeometry args={[hexagonShape, extrudeSettings]} />
          <meshPhysicalMaterial
            color="#3B82F6"
            transparent
            opacity={0.1}
            metalness={0.9}
            roughness={0.1}
            transmission={0.6}
            thickness={0.5}
          />
          <Edges
            scale={1}
            threshold={15}
            color="#3B82F6"
          />
        </mesh>
        
        {/* Inner N letter */}
        <group position={[0, 0, 0.3]}>
          <NLetterInner />
        </group>
      </group>
    </Float>
  );
};

// 3D representation of the N letter from the logo
const NLetterInner = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  // Create tube geometry for smooth strokes
  const createStrokePath = (points: THREE.Vector3[]) => {
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0);
  };

  return (
    <group ref={groupRef} scale={0.8}>
      {/* Left vertical stroke */}
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[0.12, 1.3, 0.12]} />
        <meshStandardMaterial 
          color="#3B82F6" 
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Middle vertical stroke */}
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[0.12, 0.7, 0.12]} />
        <meshStandardMaterial 
          color="#3B82F6"
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Right vertical stroke */}
      <mesh position={[0.4, 0.15, 0]}>
        <boxGeometry args={[0.12, 0.9, 0.12]} />
        <meshStandardMaterial 
          color="#3B82F6"
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Connecting lines - diagonal feel */}
      <mesh position={[-0.2, 0.55, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.35, 0.1]} />
        <meshStandardMaterial 
          color="#3B82F6"
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      <mesh position={[0.2, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.1, 0.35, 0.1]} />
        <meshStandardMaterial 
          color="#3B82F6"
          emissive="#60a5fa"
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

const Particles = ({ isDark }: { isDark: boolean }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.008;
    }
  });

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        size={0.025}
        color={isDark ? "#60a5fa" : "#3B82F6"}
        transparent
        opacity={isDark ? 0.7 : 0.5}
        sizeAttenuation
      />
    </points>
  );
};

// Floating small hexagons in background
const FloatingHexagons = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  const hexPositions = useMemo(() => [
    { pos: [-4, 2, -3], scale: 0.15, speed: 0.8 },
    { pos: [4, -2, -4], scale: 0.12, speed: 1.2 },
    { pos: [-3, -3, -2], scale: 0.1, speed: 0.6 },
    { pos: [3, 3, -3], scale: 0.08, speed: 1.0 },
    { pos: [0, 4, -5], scale: 0.18, speed: 0.5 },
  ], []);

  const hexShape = useMemo(() => {
    const shape = new THREE.Shape();
    const sides = 6;
    const size = 1;
    for (let i = 0; i < sides; i++) {
      const angle = (i / sides) * Math.PI * 2 - Math.PI / 2;
      const x = Math.cos(angle) * size;
      const y = Math.sin(angle) * size;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const speed = hexPositions[i]?.speed || 1;
        child.rotation.z = state.clock.elapsedTime * 0.2 * speed;
        child.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.002;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {hexPositions.map((hex, i) => (
        <mesh key={i} position={hex.pos as [number, number, number]} scale={hex.scale}>
          <shapeGeometry args={[hexShape]} />
          <meshBasicMaterial 
            color="#3B82F6" 
            transparent 
            opacity={isDark ? 0.3 : 0.2}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
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
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <directionalLight position={[5, 5, 5]} intensity={isDark ? 0.8 : 0.6} color="#3B82F6" />
        <directionalLight position={[-5, -5, 5]} intensity={0.4} color="#60a5fa" />
        <pointLight position={[0, 0, 4]} intensity={0.6} color="#3B82F6" />
        <pointLight position={[0, 2, 2]} intensity={0.3} color="#ffffff" />
        
        <HexagonMesh />
        <Particles isDark={isDark} />
        <FloatingHexagons isDark={isDark} />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
