import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { ContactShadows } from '@react-three/drei';

import CoordinatePicker from './CoordinatePicker';

import GalleryScene from './GalleryScene';

import PostProcessing from './PostProcessing';
import { FogExp2 } from 'three';

export default function Gallery() {
  const controls = useMemo(
    () => [
      {
        name: 'forward',
        keys: ['KeyW'],
      },
      {
        name: 'backward',
        keys: ['KeyS'],
      },
      {
        name: 'left',
        keys: ['KeyA'],
      },
      {
        name: 'right',
        keys: ['KeyD'],
      },
    ],
    [],
  );

  return (
    <KeyboardControls map={controls}>
      <div className='gallery'>
        <Canvas
          shadows
          gl={{ alpha: true }}
          style={{ background: 'transparent' }}
        >
          {/* <ContactShadows
            position={[0, 4, 0]}
            scale={10}
            blur={2}
            opacity={0.5}
          />*/}
          <Environment
            files='/white_chapel_1k.exr'
            environmentIntensity={0.2}
            background
            backgroundBlurriness={0.6}
          />

          <GalleryScene />
          {/* <CoordinatePicker />*/}
          {/* <PostProcessing />*/}
          {/* <DebugGrid />*/}
        </Canvas>
      </div>
    </KeyboardControls>
  );
}
