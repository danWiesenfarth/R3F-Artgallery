import { FlyControls } from '@react-three/drei';

export default function DebugCamera() {
  return <FlyControls movementSpeed={8} rollSpeed={0.3} dragToLook />;
}
