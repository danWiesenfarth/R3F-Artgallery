import { Clone, useGLTF } from '@react-three/drei';

export default function Window2x2({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/Window2x2.glb');
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/Window2x2.glb');
