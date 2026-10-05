import {
  EffectComposer,
  Bloom,
  ToneMapping,
  Vignette,
} from '@react-three/postprocessing';

export default function PostProcessingEffects() {
  return (
    <EffectComposer enableNormalPass>
      <ToneMapping
        adaptive
        resolution={256}
        middleGrey={4}
        maxLuminance={64}
        averageLuminance={5}
        adaptationRate={1}
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
