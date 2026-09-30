export default function CollisionDebug({ obstacles }) {
  return (
    <>
      {obstacles.map((obstacle, index) => {
        const width = obstacle.maxX - obstacle.minX;
        const depth = obstacle.maxZ - obstacle.minZ;

        const x = (obstacle.minX + obstacle.maxX) / 2;
        const z = (obstacle.minZ + obstacle.maxZ) / 2;

        return (
          <mesh key={index} position={[x, 1, z]}>
            <boxGeometry args={[width, 2, depth]} />

            <meshBasicMaterial
              color='red'
              transparent
              opacity={0.35}
              wireframe
            />
          </mesh>
        );
      })}
    </>
  );
}
