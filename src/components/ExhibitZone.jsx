import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ExhibitZone({ playerRef, onEnter, onExit }) {
  const wasInside = useRef(false);

  const centerX = 0;
  const centerZ = -7.8;

  const radius = 2.5;

  useFrame(() => {
    if (!playerRef.current) return;

    const playerPosition = playerRef.current.position;

    const distance = Math.sqrt(
      (playerPosition.x - centerX) ** 2 + (playerPosition.z - centerZ) ** 2,
    );

    const inside = distance < radius;

    if (inside && !wasInside.current) {
      wasInside.current = true;
      onEnter();
    }

    if (!inside && wasInside.current) {
      wasInside.current = false;
      onExit();
    }
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[centerX, 1.5, centerZ]}>
      <ringGeometry args={[2.3, 2.5, 64]} />

      <meshBasicMaterial color='#ff0000' transparent opacity={0.35} />
    </mesh>
  );
}
