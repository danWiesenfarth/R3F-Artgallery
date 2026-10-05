import { useGLTF, useTexture } from '@react-three/drei';

export default function ImageLandscapeLarge({
  src,
  scale,
  x = 0,
  y = 0,
  z = 0,
  rx = 0,
  ry = 0,
  rz = 0,
}) {
  const { nodes } = useGLTF('/models/ImageLandscapeLarge.glb');
  const texture = useTexture(src);

  return (
    <mesh
      geometry={nodes.PictureLandscapeLarge.geometry}
      position={[x, y, z]}
      rotation={[rx, ry, rz]}
      scale={scale}
    >
      <meshBasicMaterial map={texture} side={2} />
    </mesh>
  );
}

useGLTF.preload('/models/ImageLandscapeLarge.glb');
