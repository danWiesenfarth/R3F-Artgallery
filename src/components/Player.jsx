'use no memo';

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useKeyboardControls } from '@react-three/drei';
import * as THREE from 'three';

import { checkCollision } from '../utility/collision';

const Player = forwardRef(function Player(
  { focused, obstacles = [], mobileMovement },
  ref,
) {
  const player = useRef();

  useImperativeHandle(ref, () => player.current);

  const [, getKeys] = useKeyboardControls();

  const speed = 5;
  const radius = 0.4;

  useFrame((state, delta) => {
    if (!player.current || focused) return;

    const { forward, backward, left, right } = getKeys();

    let inputX = right - left;
    let inputY = forward - backward;

    // Mobile joystick
    if (mobileMovement.current.x !== 0 || mobileMovement.current.y !== 0) {
      inputX = mobileMovement.current.x;
      inputY = -mobileMovement.current.y;
    }

    const movement = new THREE.Vector3();

    // Camera forward
    const forwardDirection = new THREE.Vector3(0, 0, -1).applyQuaternion(
      state.camera.quaternion,
    );

    forwardDirection.y = 0;
    forwardDirection.normalize();

    // Camera right
    const rightDirection = new THREE.Vector3(1, 0, 0).applyQuaternion(
      state.camera.quaternion,
    );

    rightDirection.y = 0;
    rightDirection.normalize();

    if (inputY !== 0) {
      movement.add(forwardDirection.clone().multiplyScalar(inputY));
    }

    if (inputX !== 0) {
      movement.add(rightDirection.clone().multiplyScalar(inputX));
    }

    if (movement.length() === 0) return;

    movement.normalize();
    movement.multiplyScalar(speed * delta);

    // X collision
    const nextPosition = player.current.position.clone();

    nextPosition.x += movement.x;

    if (!checkCollision(nextPosition, radius, obstacles)) {
      player.current.position.x = nextPosition.x;
    }

    // Z collision
    nextPosition.z = player.current.position.z + movement.z;

    if (!checkCollision(nextPosition, radius, obstacles)) {
      player.current.position.z = nextPosition.z;
    }
  });

  return <group ref={player} position={[-12, 0.875, -12]} />;
});

export default Player;
