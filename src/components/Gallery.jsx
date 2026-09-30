import { useCallback, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Environment } from '@react-three/drei';

import GalleryScene from './GalleryScene';
import MobileControls from './MobileControls';
import LoadingScreen from './LoadingScreen';
import TestScene from './TestScene';

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

  const mobileMovement = useRef({
    x: 0,
    y: 0,
  });

  const mobileLook = useRef({
    x: 0,
    y: 0,
  });

  const handleMobileMove = useCallback((movement) => {
    mobileMovement.current = movement;
  }, []);

  const handleMobileLook = useCallback((look) => {
    mobileLook.current.x += look.x;
    mobileLook.current.y += look.y;
  }, []);

  return (
    <KeyboardControls map={controls}>
      <div className='gallery'>
        <Canvas
          shadows={!window.matchMedia('(pointer: coarse)').matches}
          dpr={
            window.matchMedia('(pointer: coarse)').matches ? [1, 1.5] : [1, 2]
          }
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: 'high-performance',
          }}
          style={{
            background: 'transparent',
          }}
        >
          {/* <Environment
            files='/white_chapel_1k.exr'
            environmentIntensity={0.2}
          />*/}

          <GalleryScene
            mobileMovement={mobileMovement}
            mobileLook={mobileLook}
          />
          {/* <TestScene mobileMovement={mobileMovement} mobileLook={mobileLook} />*/}
        </Canvas>

        <MobileControls onMove={handleMobileMove} onLook={handleMobileLook} />

        <LoadingScreen />
      </div>
    </KeyboardControls>
  );
}
