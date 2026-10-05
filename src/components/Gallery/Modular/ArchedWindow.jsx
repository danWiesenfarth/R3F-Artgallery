import { Clone, useGLTF } from '@react-three/drei';

export default function ArchedWindow({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/ArchedWindow.glb');

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/ArchedWindow.glb');
