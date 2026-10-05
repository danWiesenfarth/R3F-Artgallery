export default function Wall({ position, rotation = [0, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <boxGeometry args={[20, 5, 0.2]} />
      <meshStandardMaterial color='#e8e5df' />
    </mesh>
  );
}
