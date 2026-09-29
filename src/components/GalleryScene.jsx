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
import Bench from './Modular/Bench';
import Floor8x8Marble from './Modular/Floor8x8Marble';

export default function GalleryScene() {
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

      <Wall8x8TrimLarge x={-8} z={-15.8} />
      <Wall8x8TrimLarge x={-8} z={-23.8} />
      <Wall8x8TrimLarge x={8} z={-24} ry={deg180} />
      <Wall8x8TrimLarge x={8} z={-32} ry={deg180} />
      <Wall8x8TrimLarge x={-8} z={8} />
      <Wall8x8TrimLarge x={-8} />
      <Wall8x8TrimLarge x={8} z={-16} ry={deg180} />
      <Wall8x8TrimLarge x={-8} z={8} />
      <PillarWide ry={deg90} z={2} />
      <PillarWide ry={deg90} z={-6} />
      {/* RIGHT*/}
      <CeilingArch y={4} ry={deg90} z={-12} x={-16} />
      <Wall8x8TrimLarge x={-8.2} z={-8} y={0} ry={deg90} />
      {/* <Wall8x8TrimLarge x={-16.2} z={-8} y={0} ry={deg90} />*/}
      {/* <Wall8x8TrimLarge x={-24.2} z={-7.8} y={0} ry={deg180} />
      <Wall8x8TrimLarge x={-24.2} z={-15.8} y={0} ry={-deg90} />*/}
      <Wall8x8TrimLarge x={-16.2} z={-15.8} y={0} ry={-deg90} />
      {/* <Wall8x8TrimLarge x={-32.2} z={-15.8} y={0} ry={-deg90} />*/}
      <Wall8x8TrimLarge x={-16} z={-8} y={0} ry={0} />
      {/* <Wall8x8TrimLarge x={-32} z={-0} y={0} ry={0} />*/}
      <Floor8x8 x={-16} y={0} z={-8} />
      {/* <Floor8x8 x={-24} y={0} z={-8} />
      <Floor8x8 x={-32} y={0} z={-8} />
      <Floor8x8 x={-32} y={0} z={0} />*/}

      {/* LEFT*/}

      <Wall8x8TrimLarge x={8} z={0} ry={deg180} />
      <Wall8x8TrimLarge x={8} z={-8} ry={deg180} />
      <ArchedWindow y={4} x={4} />
      <ArchedWindow y={4} x={-4} />
      <CeilingArchEnd x={-4} y={4} />
      <CeilingArchEnd x={4} y={4} />
      <CeilingArchConnecting y={4} x={-8} z={-12} />
      <ArtworkPortraitLarge
        src={'antarctica/dw_penguin_2.jpg'}
        position={[-8, 3.2, 6]}
        rotation={[0, 0, 0]}
      />

      <ArtworkPortraitLarge
        src={'antarctica/tk_stone_1.jpg'}
        position={[-8, 3.2, 4]}
        rotation={[0, 0, 0]}
        scale={1}
      />

      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/Port_Lockroy.jpg'}
        position={[-8, 3.2, 0]}
        rotation={[0, 0, 0]}
      />

      <ArtworkPortraitLarge
        src={'antarctica/dw_penguin_1.jpg'}
        position={[-0.28, 1.8, 3.5]}
        rotation={[0, deg180, 0]}
        scale={0.8}
      />
      <ArtworkLandscapeLarge
        src={'antarctica/tk_dorian_pingu_3.jpg'}
        position={[-0.28, 1.8, 1]}
        rotation={[0, deg180, 0]}
        scale={1.25}
      />
      <ArtworkLandscapeLarge
        src={'antarctica/tk_iceberg_3.jpg'}
        position={[-0.28, 1.8, -6.1]}
        rotation={[0, deg180, 0]}
        scale={1.6}
      />
      <ArtworkLandscapeLarge
        src={'africa/ansecocos3.jpg'}
        position={[-0.28, 1.8, -18.6]}
        rotation={[0, deg180, 0]}
        scale={1.6}
      />

      <ArtworkPortraitLarge
        src={'africa/catamaran1.jpg'}
        position={[-0.28, 1.8, -15.8]}
        rotation={[0, deg180, 0]}
        scale={0.8}
      />
      <ArtworkLandscapeLarge
        src={'africa/camps_bay3.jpg'}
        position={[-0.28, 1.8, -26]}
        rotation={[0, deg180, 0]}
        scale={1.8}
      />
      <ArtworkLandscapeLarge
        src={'africa/tk_cape_town_1.jpg'}
        position={[0.28, 1.75, -26]}
        rotation={[0, 0, 0]}
        scale={1.8}
      />
      <ArtworkPortraitLarge
        src={'africa/sourcedargent1.jpg'}
        position={[0.28, 1.75, -19.7]}
        rotation={[0, 0, 0]}
        scale={1.2}
      />
      <ArtworkPortraitLarge
        src={'africa/female_lion_1.jpg'}
        position={[0.28, 2.25, -17.8]}
        rotation={[0, 0, 0]}
        scale={0.8}
      />
      <ArtworkPortraitLarge
        src={'africa/male_lion_2.jpg'}
        position={[0.28, 2.25, -16.2]}
        rotation={[0, 0, 0]}
        scale={0.8}
      />
      <ArtworkLandscapeLarge
        src={'antarctica/tk_penguin_2.jpg'}
        position={[0.28, 1.8, -6.1]}
        rotation={[0, 0, 0]}
        scale={1.6}
      />
      <ArtworkLandscapeLarge
        src={'antarctica/tk_seal_1.jpg'}
        position={[0.28, 1.8, 1.4]}
        rotation={[0, 0, 0]}
        scale={1.6}
      />

      <ArtworkPortraitLarge
        src={'antarctica/dw_penguin_3.jpg'}
        position={[0.28, 2.55, 4.2]}
        rotation={[0, 0, 0]}
        scale={0.5}
      />
      <ArtworkPortraitLarge
        src={'antarctica/dw_base_1.jpg'}
        position={[0.28, 1.1, 4.2]}
        rotation={[0, 0, 0]}
        scale={0.5}
      />

      <ArtworkPortraitLarge
        src={'antarctica/dw_epic_penguin_6.jpg'}
        position={[-8, 3.2, -4]}
        rotation={[0, 0, 0]}
        scale={1.3}
      />
      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/tk_brown_1.jpg'}
        position={[8, 3.2, 4]}
        rotation={[0, deg180, 0]}
      />

      <ArtworkPortraitLarge
        scale={1.3}
        src={'antarctica/dw_whalersbay_1.jpg'}
        position={[8, 3.2, -0.5]}
        rotation={[0, deg180, 0]}
      />
      <ArtworkLandscapeLarge
        scale={2}
        src={'antarctica/tk_whalersbay_1.jpg'}
        position={[8, 3.2, -5]}
        rotation={[0, deg180, 0]}
      />

      <ArtworkLandscapeLarge
        scale={2}
        src={'asia/sevencommandos3.jpg'}
        position={[8, 3.2, -14]}
        rotation={[0, deg180, 0]}
      />
      <ArtworkPortraitLarge
        scale={0.8}
        src={'asia/balloon5.jpg'}
        position={[8, 3.8, -19.4]}
        rotation={[0, deg180, 0]}
      />
      <ArtworkPortraitLarge
        scale={1}
        src={'americas/mexico_road.jpg'}
        position={[8, 2.8, -17.7]}
        rotation={[0, deg180, 0]}
      />
      <ArtworkLandscapeLarge
        scale={1.5}
        src={'asia/balloon2.jpg'}
        position={[8, 3.2, -22.4]}
        rotation={[0, deg180, 0]}
      />

      <ArtworkLandscapeLarge
        scale={2}
        src={'africa/anna_badewanne.jpg'}
        position={[8, 3.2, -27.5]}
        rotation={[0, deg180, 0]}
      />

      <ArtworkLandscapeLarge
        src={'africa/male_lion_1.jpg'}
        position={[-8, 3.2, -18.5]}
        rotation={[0, 0, 0]}
        scale={1.75}
      />
      <ArtworkLandscapeLarge
        src={'africa/cheetah.jpg'}
        position={[-8, 3.2, -28.5]}
        rotation={[0, 0, 0]}
        scale={1.5}
      />

      <ArtworkPortraitLarge
        src={'africa/dune45_birdsview.jpg'}
        position={[-8, 3.2, -22.2]}
        rotation={[0, 0, 0]}
        scale={1.2}
      />
      <ArtworkPortraitLarge
        src={'africa/giraffe_1.jpg'}
        position={[-8, 3.2, -24.8]}
        rotation={[0, 0, 0]}
        scale={1.2}
      />
      {/* <ArtworkPortraitLarge
        src={'dw_epic_penguin_6.jpg'}
        position={[-8, 2.5, 0]}
        rotation={[0, 0, 0]}
      />*/}
      {/* //FRONT*/}
      <Floor8x8 x={-8} y={0} z={-16} />
      <Floor8x8 x={-0} y={0} z={-16} />
      <Floor8x8 x={-0} y={0} z={-24} />
      <Floor8x8 x={-8} y={0} z={-24} />
      <CeilingArchEnd x={-4} y={4} z={-24} ry={deg180} />
      <CeilingArchEnd x={4} y={4} z={-24} ry={deg180} />
      <CeilingArchEnd x={4} y={4} />
      <ArchedWindow y={4} x={4} z={-40} />
      <ArchedWindow y={4} x={-4} z={-40} />
      <ArchedWindow y={4} x={-4} />
      <PillarWide ry={deg90} z={-18} />
      <PillarWide ry={deg90} z={-26} />
      <Floor8x8 x={-8} y={0} z={-8} />
      <Floor8x8 x={0} y={0} z={-8} />
      <Floor8x8 x={0} y={0} z={0} />
      <Floor8x8 x={0} y={0} z={8} />
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

      <Bench y={0} x={4} sz={1.15} sx={1.5} sy={1.25} z={-7} ry={deg90} />
      <Bench y={0} x={4} sz={1.15} sx={1.5} sy={1.25} z={1.5} ry={deg90} />
      <Bench y={0} x={-4} sz={1.15} sx={1.5} sy={1.25} z={-7} ry={deg90} />
      <Bench y={0} x={-4} sz={1.15} sx={1.5} sy={1.25} z={1.5} ry={deg90} />
      <Bench y={0} x={4} sz={1.15} sx={1.5} sy={1.25} z={-19} ry={deg90} />
      <Bench y={0} x={4} sz={1.15} sx={1.5} sy={1.25} z={-27} ry={deg90} />
      <Bench y={0} x={-4} sz={1.15} sx={1.5} sy={1.25} z={-19} ry={deg90} />
      <Bench y={0} x={-4} sz={1.15} sx={1.5} sy={1.25} z={-27} ry={deg90} />

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
