import { Clone, useGLTF } from '@react-three/drei';

export default function Ceiling8x8Skylight({ x = 0, y = 4, z = 0 }) {
  const { scene } = useGLTF('/models/CeilingRoomA.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <Clone object={scene} scale={1} position={[x, y, z]} />;
}

useGLTF.preload('/models/CeilingRoomA.glb');
