import { Clone, useGLTF } from '@react-three/drei';

export default function Wall8x8TrimLarge({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/Wall8x8TrimLarge.glb');
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/Wall8x8TrimLarge.glb');
