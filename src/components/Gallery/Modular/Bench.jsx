import { Clone, useGLTF } from '@react-three/drei';

export default function Bench({
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
  sx = 1,
  sy = 1,
  sz = 1,
  scale,
}) {
  const { scene } = useGLTF('/models/bench.glb');

  return (
    <Clone
      object={scene}
      position={[x, y, z]}
      rotation={[rx, ry, rz]}
      scale={[sx, sy, sz]}
    />
  );
}

useGLTF.preload('/models/bench.glb');
