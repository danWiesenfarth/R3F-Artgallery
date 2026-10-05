'use no memo';

import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { deg90 } from '../../utility/angles';

export default function FirstPersonCamera({ playerRef, mobileLook }) {
  const { camera, gl } = useThree();

  const yaw = useRef(-deg90);
  const pitch = useRef(0);

  const mouseDown = useRef(false);

  const bobTime = useRef(0);
  const bobAmount = useRef(0);

  useEffect(() => {
    const canvas = gl.domElement;

    function handleMouseDown(event) {
      if (event.button === 0) {
        mouseDown.current = true;
      }
    }

    function handleMouseUp(event) {
      if (event.button === 0) {
        mouseDown.current = false;
      }
    }

    function handleMouseMove(event) {
      if (!mouseDown.current) return;

      yaw.current -= event.movementX * 0.002;
      pitch.current -= event.movementY * 0.002;

      pitch.current = THREE.MathUtils.clamp(
        pitch.current,
        -Math.PI / 2.2,
        Math.PI / 2.2,
      );
    }

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [gl]);

  useFrame((state, delta) => {
    if (!playerRef.current) return;

    // Mobile camera look
    const look = mobileLook.current;

    yaw.current -= look.x * 0.004;
    pitch.current -= look.y * 0.004;

    look.x = 0;
    look.y = 0;

    pitch.current = THREE.MathUtils.clamp(
      pitch.current,
      -Math.PI / 2.2,
      Math.PI / 2.2,
    );

    const player = playerRef.current;

    // Camera position
    const baseY = player.position.y + 0.8;

    camera.position.set(player.position.x, baseY, player.position.z);

    // Camera rotation
    camera.rotation.order = 'YXZ';

    camera.rotation.y = yaw.current;
    camera.rotation.x = pitch.current;

    // Detect movement
    const previousX = player.userData.previousX;
    const previousZ = player.userData.previousZ;

    const isMoving =
      previousX !== undefined &&
      previousZ !== undefined &&
      (Math.abs(player.position.x - previousX) > 0.0001 ||
        Math.abs(player.position.z - previousZ) > 0.0001);

    player.userData.previousX = player.position.x;
    player.userData.previousZ = player.position.z;

    // Head bob
    const targetBob = isMoving ? 1 : 0;

    bobAmount.current = THREE.MathUtils.lerp(
      bobAmount.current,
      targetBob,
      8 * delta,
    );

    if (bobAmount.current > 0.001) {
      bobTime.current += delta * 9;

      const bobX = Math.cos(bobTime.current * 0.5) * 0.045 * bobAmount.current;

      const bobY = Math.sin(bobTime.current) * 0.095 * bobAmount.current;

      camera.position.x += bobX;
      camera.position.y += bobY;
    }
  });

  return null;
}
