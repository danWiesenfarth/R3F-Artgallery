import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function CameraController({ focused, playerRef, controlsRef }) {
  const { camera } = useThree();

  useFrame(() => {
    if (!playerRef.current) return;

    const player = playerRef.current;

    if (focused) {
      const artworkCameraPosition = new THREE.Vector3(0, 2, -3);
      const artworkLookAt = new THREE.Vector3(0, 1.7, -7.5);

      camera.position.lerp(artworkCameraPosition, 0.05);
      camera.lookAt(artworkLookAt);

      return;
    }

    const playerPosition = player.position;

    // OrbitControls target follows the player
    if (controlsRef.current) {
      controlsRef.current.target.lerp(
        new THREE.Vector3(
          playerPosition.x,
          playerPosition.y + 0.25,
          playerPosition.z,
        ),
        0.6,
      );

      controlsRef.current.update();
    }
  });
}
