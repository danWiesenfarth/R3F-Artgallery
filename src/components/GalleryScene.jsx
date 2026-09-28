import { useRef, useState } from 'react';
import { OrbitControls, SpotLight } from '@react-three/drei';

import { deg180, deg270, deg90 } from '../utility/angles';

import Player from './Player';
import CameraController from './CameraController';
import Floor8x8 from './Modular/Floor8x8';
import Wall8x8 from './Modular/Wall8x8';
import PillarWide from './Modular/PillarWide';

import ArtworkLandscapeSmall from './Artworks/ArtworkLandscapeSmall';
import ArtworkPortraitLarge from './Artworks/ArtWorkPortraitLarge';
import WallDoorway from './Modular/WallDoorway';
import Ceiling8x8Skylight from './Modular/Ceiling8x8Skylight';
import Window2x2 from './Modular/Window2x2';
import PillarFancy from './Modular/PillarFancy';
import Archway from './Modular/Archway';

import Wall8x8TrimLarge from './Modular/Wall8x8TrimLarge';
import CeilingArch from './Modular/CeilingArch';
import ImageLandscapeLarge from './Artworks/ArtworkUtils/ImageLandscapeWide';
import ArtworkLandscapeLarge from './Artworks/ArtworkLandscapeLarge';
import CeilingArchEnd from './Modular/CeilingArchEnd';
import ArchedWindow from './Modular/ArchedWindow';
import CeilingArchConnecting from './Modular/CeilingArchConnecting';
import WindowView from './shared/WindowView';

export default function GalleryScene() {
  const playerRef = useRef();
  const controlsRef = useRef();

  const [focused, setFocused] = useState(false);

  return (
    <>
      {/* <color attach='background' args={['#62C9E0']} />*/}

      <ambientLight intensity={0.4} />

      <directionalLight
        position={[4, 8, 4]}
        intensity={1}
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

      {/* <WindowView
        src={'/antarctica/Port_Lockroy.jpg'}
        ry={deg180}
        z={24}
        y={4}
        scale={12}
      />*/}

      <Wall8x8TrimLarge x={-8} />
      <Wall8x8TrimLarge x={-8} z={8} />
      <PillarWide ry={deg90} z={2} />
      <PillarWide ry={deg90} z={-6} />

      {/* RIGHT*/}
      <CeilingArch y={4} ry={deg90} z={-12} x={-16} />
      <Wall8x8TrimLarge x={-8.2} z={-8} y={0} ry={deg90} />
      <Wall8x8TrimLarge x={-16.2} z={-8} y={0} ry={deg90} />
      <Wall8x8TrimLarge x={-24.2} z={-7.8} y={0} ry={deg180} />
      <Wall8x8TrimLarge x={-24.2} z={-15.8} y={0} ry={-deg90} />
      <Wall8x8TrimLarge x={-16.2} z={-15.8} y={0} ry={-deg90} />
      <Floor8x8 x={-16} y={0} z={-8} />
      <Floor8x8 x={-24} y={0} z={-8} />
      <Floor8x8 x={-32} y={0} z={-8} />
      <Floor8x8 x={-32} y={0} z={0} />
      <Floor8x8 x={-32} y={0} z={8} />

      <Wall8x8TrimLarge x={8} z={0} ry={deg180} />
      <Wall8x8TrimLarge x={8} z={-8} ry={deg180} />

      {/* <PillarFancy z={-7.25} />*/}
      <ArchedWindow y={4} x={4} />
      <ArchedWindow y={4} x={-4} />
      <CeilingArchEnd x={-4} y={4} />
      <CeilingArchEnd x={4} y={4} />
      <CeilingArchConnecting y={4} x={-8} z={-12} />

      <ArtworkPortraitLarge
        src={'antarctica/dw_penguin_2.jpg'}
        position={[-8, 2.8, 6]}
        rotation={[0, 0, 0]}
      />
      <ArtworkPortraitLarge
        src={'antarctica/tk_stone_1.jpg'}
        position={[-8, 2.8, 4]}
        rotation={[0, 0, 0]}
        scale={1}
      />
      <ArtworkPortraitLarge
        src={'antarctica/dw_epic_penguin_6.jpg'}
        position={[-8, 2.8, -5]}
        rotation={[0, 0, 0]}
        scale={1.5}
      />

      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/Port_Lockroy.jpg'}
        position={[-8, 2.8, 0]}
        rotation={[0, 0, 0]}
      />
      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/tk_whalersbay_1.jpg'}
        position={[8, 2.8, 3.5]}
        rotation={[0, deg180, 0]}
      />
      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/tk_whalersbay_1.jpg'}
        position={[8, 2.8, -3.5]}
        rotation={[0, deg180, 0]}
      />
      {/* <ArtworkPortraitLarge
        src={'dw_epic_penguin_6.jpg'}
        position={[-8, 2.5, 0]}
        rotation={[0, 0, 0]}
      />*/}

      <Floor8x8 x={-8} y={0} z={-8} />
      <Floor8x8 x={0} y={0} z={-8} />
      <Floor8x8 x={0} y={0} z={0} />
      <Floor8x8 x={0} y={0} z={8} />
      <Floor8x8 x={-8} y={0} z={8} />
      <Floor8x8 x={-8} y={0} z={0} />
      {/*
      <Ceiling8x8Skylight z={-16} x={-8} />

      <Window2x2 y={4} z={-13} />*/}

      {/*
      <Exhibit />

      <ExhibitZone
        playerRef={playerRef}
        onEnter={() => setFocused(true)}
        onExit={() => setFocused(false)}
      />*/}

      <Player ref={playerRef} controlsRef={controlsRef} />

      <CameraController
        focused={focused}
        playerRef={playerRef}
        controlsRef={controlsRef}
      />

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 1.8}
        minDistance={3}
        maxDistance={3}

        enabled={!focused}
      />
    </>
  );
}
