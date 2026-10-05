import { useGLTF } from '@react-three/drei';

export default function RoomAWalls() {
  const { scene } = useGLTF('/models/RoomA-Walls.glb');

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
}

useGLTF.preload('/models/RoomA-Walls.glb');
