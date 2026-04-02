import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ZONES = [
  { pos: [-2, 0.5, 0] as [number,number,number], color: "#EAB308" },
  { pos: [0, 0.8, 0] as [number,number,number], color: "#22c55e" },
  { pos: [2, 0.4, -1] as [number,number,number], color: "#ef4444" },
  { pos: [-1, 0.6, 2] as [number,number,number], color: "#3b82f6" },
];

function WorkerDot({ position, color }: { position: [number,number,number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.05;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.12, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </mesh>
  );
}

function Zone({ pos, color }: { pos: [number,number,number]; color: string }) {
  return (
    <mesh position={pos}>
      <boxGeometry args={[1.4, pos[1] * 2, 1.4]} />
      <meshStandardMaterial color={color} transparent opacity={0.3} roughness={0.5} />
    </mesh>
  );
}

function MiniScene() {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#111" roughness={1} />
      </mesh>
      {ZONES.map((z, i) => (
        <Zone key={i} pos={z.pos} color={z.color} />
      ))}
      {([
        [-2.3, 1.2, 0.3], [-1.7, 1.2, -0.2], [-2, 1.2, 0.7],
        [0.3, 1.7, 0.3], [-0.3, 1.7, -0.2],
        [2.2, 0.9, -0.7],
        [-0.8, 1.2, 2.3], [-1.3, 1.2, 1.8],
      ] as [number,number,number][]).map((pos, i) => (
        <WorkerDot key={i} position={pos} color={ZONES[i % ZONES.length].color} />
      ))}
    </group>
  );
}

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-[#0A0A0A]">
      <div className="text-xs text-[#A1A1AA] opacity-40">3D View</div>
    </div>
  );
}

export default function MiniSiteView() {
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
  if (!webglOk) return <Fallback />;

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 5, 5], fov: 45 }} shadows>
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[0, 4, 0]} intensity={0.8} color="#EAB308" />
          <directionalLight position={[3, 5, 3]} intensity={0.5} />
          <fog attach="fog" args={["#0A0A0A", 10, 20]} />
          <MiniScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
