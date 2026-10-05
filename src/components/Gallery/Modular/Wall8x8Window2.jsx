import { Clone, useGLTF } from '@react-three/drei';

export default function Wall8x8Window2({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/Wall8x8-Window2.glb');

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/Wall8x8-Window2.glb');
