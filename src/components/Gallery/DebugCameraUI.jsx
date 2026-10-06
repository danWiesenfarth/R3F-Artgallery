import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect, useState } from 'react';

const RAD_TO_DEG = 180 / Math.PI;
const DEG_TO_RAD = Math.PI / 180;

export default function DebugCameraUI() {
  const { camera } = useThree();

  const [values, setValues] = useState({
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
    pitch: camera.rotation.x * RAD_TO_DEG,
    yaw: camera.rotation.y * RAD_TO_DEG,
    roll: camera.rotation.z * RAD_TO_DEG,
    fov: camera.fov,
  });

  // Keep UI synchronized with FlyControls
  useEffect(() => {
    let frame;

    function update() {
      setValues({
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        pitch: camera.rotation.x * RAD_TO_DEG,
        yaw: camera.rotation.y * RAD_TO_DEG,
        roll: camera.rotation.z * RAD_TO_DEG,
        fov: camera.fov,
      });

      frame = requestAnimationFrame(update);
    }

    frame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frame);
  }, [camera]);

  function updateCamera(key, value) {
    const number = Number(value);

    if (Number.isNaN(number)) return;

    setValues((prev) => ({
      ...prev,
      [key]: number,
    }));

    if (key === 'x') camera.position.x = number;
    if (key === 'y') camera.position.y = number;
    if (key === 'z') camera.position.z = number;

    if (key === 'pitch') {
      camera.rotation.x = number * DEG_TO_RAD;
    }

    if (key === 'yaw') {
      camera.rotation.y = number * DEG_TO_RAD;
    }

    if (key === 'roll') {
      camera.rotation.z = number * DEG_TO_RAD;
    }

    if (key === 'fov') {
      camera.fov = number;
      camera.updateProjectionMatrix();
    }
  }

  function copyCamera() {
    const output = `position={[${camera.position.x.toFixed(3)}, ${camera.position.y.toFixed(3)}, ${camera.position.z.toFixed(3)}]}
rotation={[${camera.rotation.x.toFixed(3)}, ${camera.rotation.y.toFixed(3)}, ${camera.rotation.z.toFixed(3)}]}
fov={${camera.fov.toFixed(1)}}`;

    navigator.clipboard.writeText(output);
  }

  function resetCamera() {
    camera.position.set(0, 1.7, 5);

    camera.rotation.set(0, 0, 0);

    camera.fov = 50;
    camera.updateProjectionMatrix();
  }

  function Input({ label, value, min, max, step = 0.1, onChange }) {
    return (
      <label className='flex items-center justify-between gap-3'>
        <span className='text-xs text-white/50'>{label}</span>

        <input
          type='number'
          value={Number(value).toFixed(step < 1 ? 2 : 0)}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(event.target.value)}
          className='w-20 rounded bg-white/10 px-2 py-1 text-right text-xs text-white outline-none focus:bg-white/20'
        />
      </label>
    );
  }

  return (
    <Html fullscreen>
      <div className='pointer-events-none fixed inset-0'>
        <div className='pointer-events-auto absolute right-4 top-4 w-64 rounded-2xl bg-black/70 p-4 font-mono text-white shadow-xl backdrop-blur-md'>
          <div className='mb-4 flex items-center justify-between'>
            <span className='text-xs uppercase tracking-[0.15em] text-white/50'>
              Debug Camera
            </span>

            <button
              onClick={resetCamera}
              className='text-xs text-white/40 transition hover:text-white'
            >
              Reset
            </button>
          </div>

          <div className='space-y-2'>
            <div className='mb-2 text-[10px] uppercase tracking-wider text-white/30'>
              Position
            </div>

            <Input
              label='X'
              value={values.x}
              min={-100}
              max={100}
              onChange={(value) => updateCamera('x', value)}
            />

            <Input
              label='Y'
              value={values.y}
              min={-100}
              max={100}
              onChange={(value) => updateCamera('y', value)}
            />

            <Input
              label='Z'
              value={values.z}
              min={-100}
              max={100}
              onChange={(value) => updateCamera('z', value)}
            />
          </div>

          <div className='my-4 h-px bg-white/10' />

          <div className='space-y-2'>
            <div className='mb-2 text-[10px] uppercase tracking-wider text-white/30'>
              Rotation
            </div>

            <Input
              label='Pitch'
              value={values.pitch}
              min={-180}
              max={180}
              step={1}
              onChange={(value) => updateCamera('pitch', value)}
            />

            <Input
              label='Yaw'
              value={values.yaw}
              min={-180}
              max={180}
              step={1}
              onChange={(value) => updateCamera('yaw', value)}
            />

            <Input
              label='Roll'
              value={values.roll}
              min={-180}
              max={180}
              step={1}
              onChange={(value) => updateCamera('roll', value)}
            />
          </div>

          <div className='my-4 h-px bg-white/10' />

          <div className='space-y-2'>
            <div className='mb-2 text-[10px] uppercase tracking-wider text-white/30'>
              Lens
            </div>

            <Input
              label='FOV'
              value={values.fov}
              min={10}
              max={120}
              step={1}
              onChange={(value) => updateCamera('fov', value)}
            />
          </div>

          <div className='mt-4 grid grid-cols-2 gap-2'>
            <button
              onClick={copyCamera}
              className='rounded-lg bg-white/10 px-3 py-2 text-[10px] uppercase tracking-wider text-white/60 transition hover:bg-white/20 hover:text-white'
            >
              Copy
            </button>

            <button
              onClick={resetCamera}
              className='rounded-lg bg-white/10 px-3 py-2 text-[10px] uppercase tracking-wider text-white/60 transition hover:bg-white/20 hover:text-white'
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </Html>
  );
}
