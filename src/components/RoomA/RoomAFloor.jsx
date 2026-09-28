import { useGLTF } from '@react-three/drei';

export default function RoomAFloor() {
  const { scene } = useGLTF('/models/RoomA-Floor.glb');

  return <primitive object={scene} scale={1.5} position={[0, -0, 0]} />;
}

useGLTF.preload('/models/RoomA-Floor.glb');
