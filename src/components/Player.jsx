import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

const Player = forwardRef(function Player({ controlsRef, focused }, ref) {
  const player = useRef();

  useImperativeHandle(ref, () => player.current);

  const [, getKeys] = useKeyboardControls();

  const speed = 8;

  useFrame((state, delta) => {
    if (!player.current) return;

    const { forward, backward, left, right } = getKeys();

    const movement = new THREE.Vector3();

    if (focused) {
      /*
       * When focused, movement uses the player's
       * own rotation instead of the camera.
       */

      const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
        player.current.quaternion,
      );

      const rightDirection = new THREE.Vector3(1, 0, 0).applyQuaternion(
        player.current.quaternion,
      );

      if (forward) {
        movement.add(forwardDirection);
      }

      if (backward) {
        movement.sub(forwardDirection);
      }

      if (right) {
        movement.add(rightDirection);
      }

      if (left) {
        movement.sub(rightDirection);
      }
    } else {
      /*
       * Normal third-person movement.
       * Movement follows the camera direction.
       */

      const direction = new THREE.Vector3();

      direction
        .subVectors(state.camera.position, player.current.position)
        .normalize();

      direction.y = 0;
      direction.normalize();

      const forwardDirection = direction.clone().negate();

      const rightDirection = new THREE.Vector3()
        .crossVectors(forwardDirection, new THREE.Vector3(0, 1, 0))
        .normalize();

      if (forward) {
        movement.add(forwardDirection);
      }

      if (backward) {
        movement.sub(forwardDirection);
      }

      if (right) {
        movement.add(rightDirection);
      }

      if (left) {
        movement.sub(rightDirection);
      }
    }

    if (movement.length() > 0) {
      movement.normalize();
      movement.multiplyScalar(speed * delta);

      player.current.position.add(movement);

      /*
       * Rotate the player toward movement direction.
       */
      const angle = Math.atan2(movement.x, movement.z);

      player.current.rotation.y = THREE.MathUtils.lerp(
        player.current.rotation.y,
        angle,
        0.15,
      );
    }

    /*
     * Keep OrbitControls focused on the player.
     */
    if (!focused && controlsRef.current) {
      const target = player.current.position.clone();

      target.y += 1;

      controlsRef.current.target.lerp(target, 0.1);

      controlsRef.current.update();
    }
  });

  return (
    <mesh ref={player} position={[0, 0.875, -8]} castShadow>
      <boxGeometry args={[0, 1.75, 0]} />

      <meshStandardMaterial color='#222222' />
    </mesh>
  );
});

export default Player;
