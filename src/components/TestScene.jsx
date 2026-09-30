import { useRef, useState } from 'react';
import { OrbitControls } from '@react-three/drei';

import { deg180, deg90 } from '../utility/angles';

import Player from './Player';
import CameraController from './CameraController';

import Floor8x8 from './Modular/Floor8x8';
import PillarWide from './Modular/PillarWide';
import ArtworkPortraitLarge from './Artworks/ArtWorkPortraitLarge';
import Wall8x8TrimLarge from './Modular/Wall8x8TrimLarge';
import ArtworkLandscapeLarge from './Artworks/ArtworkLandscapeLarge';
import ArchedWindow from './Modular/ArchedWindow';
import Bench from './Modular/Bench';
import Ceiling from './Ceiling';
import FirstPersonCamera from './FirstPersonCamera';

import { galleryColliders } from '../utility/galleryColliders';
import CollisionDebug from './CollisionDebug';

export default function TestScene({ mobileMovement, mobileLook }) {
  const playerRef = useRef();
  const controlsRef = useRef();

  const [focused, setFocused] = useState(false);

  return (
    <>
      {/* <color attach='background' args={['#62C9E0']} />*/}
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[2, 8, 8]}
        intensity={1.5}
        castShadow

        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}

        shadow-bias={-0.0005}
        shadow-normalBias={0.02}

        shadow-camera-near={0.1}
        shadow-camera-far={50}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <Floor8x8 />
      <Player
        ref={playerRef}
        focused={focused}
        obstacles={galleryColliders}
        mobileMovement={mobileMovement}
      />

      <FirstPersonCamera playerRef={playerRef} mobileLook={mobileLook} />
      <CameraController
        focused={focused}
        playerRef={playerRef}
        controlsRef={controlsRef}
        obstacles={galleryColliders}
      />
    </>
  );
}
