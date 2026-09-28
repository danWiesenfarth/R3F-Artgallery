import { Clone, useGLTF } from '@react-three/drei';

export default function PillarFancy({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { scene } = useGLTF('/models/PillarFancy.glb');

  return <Clone object={scene} position={[x, y, z]} rotation={[rx, ry, rz]} />;
}

useGLTF.preload('/models/PillarFancy.glb');
