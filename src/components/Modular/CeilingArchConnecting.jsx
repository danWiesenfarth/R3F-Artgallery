import { Clone, useGLTF } from '@react-three/drei';

export default function CeilingArchConnecting({ x = 0, y = 8, z = 0 }) {
  const { scene } = useGLTF('/models/ArchwayConnecting.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <Clone object={scene} scale={1} position={[x, y, z]} />;
}

useGLTF.preload('/models/ArchwayConnecting.glb');
