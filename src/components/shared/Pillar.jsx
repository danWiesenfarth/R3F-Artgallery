import { useGLTF } from '@react-three/drei';

export default function Pillar() {
  const { scene } = useGLTF('/models/RoomA-Pillar.glb');

  return <primitive object={scene} scale={1.5} position={[0, -0, 0]} />;
}

useGLTF.preload('/models/RoomA-Pillar.glb');
