import { useTexture } from '@react-three/drei';

export default function WindowView({
  src,
  scale,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const texture = useTexture(src);

  return (
    <mesh position={[x, y, z]} rotation={[rx, ry, rz]} scale={scale}>
      <planeGeometry args={[4, 3]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
