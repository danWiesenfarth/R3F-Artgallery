import { Clone, useGLTF } from '@react-three/drei';

export default function Floor8x8({ x = 0, y = 0, z = 0 }) {
  const { scene } = useGLTF('/models/Floor8x8.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      console.log(child.name);
      console.log(child.material);
      console.log('roughness:', child.material.roughness);
      console.log('roughnessMap:', child.material.roughnessMap);
      console.log('metalness:', child.material.metalness);
      console.log('metalnessMap:', child.material.metalnessMap);
    }
  });

  return <Clone object={scene} scale={1} position={[x, y, z]} />;
}

useGLTF.preload('/models/Floor8x8.glb');
