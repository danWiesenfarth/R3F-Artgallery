import {
  EffectComposer,
  Bloom,
  ToneMapping,
  Vignette,
  SMAA,
} from '@react-three/postprocessing';
import { Fog } from 'three';

export default function PostProcessingEffects() {
  return (
    <EffectComposer enableNormalPass>
      <SMAA />
      <ToneMapping
        adaptive
        resolution={256}
        middleGrey={4}
        maxLuminance={64}
        averageLuminance={5}
        adaptationRate={1}
        s
      />

      <Bloom
        intensity={1.55}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.7}
        mipmapBlur
      />

      <Vignette eskil={false} offset={0.1} darkness={0.8} />
    </EffectComposer>
  );
}
