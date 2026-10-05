import { deg90 } from '../../../utility/angles';
import FramePortraitLarge from './ArtworkUtils/FramePortraitLarge';
import ImageLandscapeLarge from './ArtworkUtils/ImageLandscapeWide';

export default function ArtworkLandscapeLarge({
  src,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <FramePortraitLarge rx={deg90} />
      <ImageLandscapeLarge src={src} x={-0.03} />
    </group>
  );
}
