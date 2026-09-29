import { useState } from 'react';
import { Html } from '@react-three/drei';

export default function CoordinatePicker() {
  const [position, setPosition] = useState(null);

  function handleClick(e) {
    e.stopPropagation();

    setPosition({
      x: e.point.x,
      y: e.point.y,
      z: e.point.z,
    });

    console.log({
      x: e.point.x,
      y: e.point.y,
      z: e.point.z,
    });
  }

  return (
    <>
      {/* Invisible raycast surface */}
      <mesh
        position={[0, 1, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={handleClick}
      >
        <planeGeometry args={[100, 100]} />

        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Click marker */}
      {position && (
        <>
          <mesh position={[position.x, 0.1, position.z]}>
            <sphereGeometry args={[0.12, 16, 16]} />

            <meshBasicMaterial color='red' />
          </mesh>

          {/* Coordinate label */}
          <Html position={[position.x, 0.4, position.z]}>
            <div
              style={{
                padding: '6px 10px',
                background: 'black',
                color: 'white',
                borderRadius: '4px',
                fontFamily: 'monospace',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
            >
              x: {position.x.toFixed(2)}
              <br />
              y: {position.y.toFixed(2)}
              <br />
              z: {position.z.toFixed(2)}
            </div>
          </Html>
        </>
      )}
    </>
  );
}
