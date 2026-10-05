import FrameLandscapeWide from './ArtworkUtils/FrameLandscapeWide';
import ImageLandscapeWide from './ArtworkUtils/ImageLandscapeWide';

export default function ArtworkLandscapeSmall({
  src,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  return (
    <group position={position} rotation={rotation}>
      <FrameLandscapeWide />
      <ImageLandscapeWide src={src} x={0.05} />
    </group>
  );
}
