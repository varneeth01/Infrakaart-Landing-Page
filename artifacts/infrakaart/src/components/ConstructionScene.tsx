import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Grid } from "@react-three/drei";
import * as THREE from "three";

function Building({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[2, 3, 2]} />
      <meshStandardMaterial color="#18181B" roughness={0.8} metalness={0.3} />
    </mesh>
  );
}

function BuildingFrame({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[1.5, 2, 0.1]} />
      <meshStandardMaterial color="#EAB308" roughness={0.5} metalness={0.6} />
    </mesh>
  );
}

function Crane() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.4;
    }
  });

  return (
    <group ref={groupRef} position={[3, 0, -1]}>
      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[0.15, 5, 0.15]} />
        <meshStandardMaterial color="#EAB308" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[1.5, 5, 0]}>
        <boxGeometry args={[3, 0.1, 0.1]} />
        <meshStandardMaterial color="#EAB308" roughness={0.4} metalness={0.8} />
      </mesh>
      <mesh position={[-1, 5, 0]}>
        <boxGeometry args={[1, 0.3, 0.3]} />
        <meshStandardMaterial color="#333" roughness={0.7} metalness={0.5} />
      </mesh>
      <mesh position={[2.5, 4, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 2, 8]} />
        <meshStandardMaterial color="#666" roughness={0.5} metalness={0.9} />
      </mesh>
      <mesh position={[2.5, 3, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.2]} />
        <meshStandardMaterial color="#EAB308" roughness={0.3} metalness={0.9} />
      </mesh>
    </group>
  );
}

function Scaffold({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {[0, 0.8, 1.6].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[1.8, 0.05, 0.05]} />
          <meshStandardMaterial color="#EAB308" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
      {[-0.9, 0.9].map((x, i) => (
        <mesh key={i} position={[x, 0.8, 0]}>
          <boxGeometry args={[0.05, 1.8, 0.05]} />
          <meshStandardMaterial color="#888" metalness={0.7} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#111" roughness={1} metalness={0} />
      </mesh>
      <Grid
        args={[20, 20]}
        position={[0, 0, 0]}
        cellColor="#EAB308"
        sectionColor="#EAB308"
        sectionSize={4}
        cellSize={1}
        fadeDistance={15}
        infiniteGrid={false}
        cellThickness={0.3}
        sectionThickness={0.8}
      />
      <Building position={[-2, 1.5, 0]} />
      <Building position={[0, 2, 0.5]} />
      <Building position={[-2.5, 1, -2]} />
      <BuildingFrame position={[0.5, 2.5, 1.5]} />
      <BuildingFrame position={[-1, 3, 0.5]} />
      <Scaffold position={[0.5, 0, 1.6]} />
      <Crane />
      {([[-4, 0.2, 1], [-3.5, 0.2, 2], [2, 0.2, 2]] as [number,number,number][]).map((pos, i) => (
        <mesh key={i} position={pos}>
          <boxGeometry args={[0.5, 0.4, 0.5]} />
          <meshStandardMaterial color={i === 0 ? "#555" : "#333"} roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function SceneFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#111] to-[#0A0A0A]">
      <div className="text-center opacity-30">
        <div className="text-6xl font-black text-[#EAB308] mb-2">⚡</div>
        <div className="text-xs text-[#A1A1AA] uppercase tracking-widest">3D Construction Scene</div>
      </div>
    </div>
  );
}

export default function ConstructionScene() {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebglOk(!!gl);
    } catch {
      setWebglOk(false);
    }
  }, []);

  if (webglOk === null) return null;
  if (!webglOk) return <SceneFallback />;

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [8, 6, 8], fov: 50 }}
        shadows
        gl={{ antialias: true }}
        onCreated={() => {}}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 5]} intensity={0.8} castShadow color="#ffffff" />
          <pointLight position={[-3, 3, 3]} intensity={0.5} color="#EAB308" />
          <pointLight position={[3, 2, -3]} intensity={0.3} color="#EAB308" />
          <fog attach="fog" args={["#0A0A0A", 12, 25]} />
          <Scene />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 6}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
