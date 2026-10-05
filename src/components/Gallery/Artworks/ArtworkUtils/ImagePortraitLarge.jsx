import { useGLTF, useTexture } from '@react-three/drei';

export default function ImagePortraitLarge({
  src,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { nodes } = useGLTF('/models/ImagePortraitLarge.glb');
  const texture = useTexture(src);

  return (
    <mesh
      geometry={nodes.PicturePortraitLarge.geometry}
      position={[x, y, z]}
      rotation={[rx, ry, rz]}
    >
      <meshBasicMaterial map={texture} side={2} />
    </mesh>
  );
}

useGLTF.preload('/models/ImagePortraitLarge.glb');
