import { useCallback, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { KeyboardControls, Environment } from '@react-three/drei';

import GalleryScene from '../components/Gallery/GalleryScene';
import MobileControls from '../components/Gallery/MobileControls';
import LoadingScreen from '../components/LoadingScreen';
import PostProcessingEffects from '../components/Gallery/PostProcessingEffects';
import { Stats } from '@react-three/drei';
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
          shadows
          dpr
          gl={{
            alpha: true,
            antialias: false,
            powerPreference: 'high-performance',
          }}
          style={{
            background: 'transparent',
          }}
        >
          <Environment
            files='/white_chapel_1k.exr'
            environmentIntensity={0.2}
          />
          <Stats />

          <GalleryScene
            mobileMovement={mobileMovement}
            mobileLook={mobileLook}
          />
          <PostProcessingEffects />
        </Canvas>

        <MobileControls onMove={handleMobileMove} onLook={handleMobileLook} />
        <LoadingScreen />
      </div>
    </KeyboardControls>
  );
}
