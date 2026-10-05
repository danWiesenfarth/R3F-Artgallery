export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 16]} />
      <meshStandardMaterial color='#d8d5cf' />
    </mesh>
  );
}
