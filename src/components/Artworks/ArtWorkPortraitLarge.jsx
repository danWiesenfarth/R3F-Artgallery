import FramePortraitLarge from './ArtworkUtils/FramePortraitLarge';
import ImagePortraitLarge from './ArtworkUtils/ImagePortraitLarge';

export default function ArtworkPortraitLarge({
  src,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale,
}) {
  return (
    <group position={position} rotation={rotation} scale={scale}>
      <FramePortraitLarge />
      <ImagePortraitLarge src={src} x={0.045} />
    </group>
  );
}
