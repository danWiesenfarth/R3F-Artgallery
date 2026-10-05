import { Clone, useGLTF } from '@react-three/drei';

export default function PillarWide({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/Pillar-Wide.glb');

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/Pillar-Wide.glb');
