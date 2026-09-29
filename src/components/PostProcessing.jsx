import {
  EffectComposer,
  Bloom,
  SMAA,
  SSAO,
  ToneMapping,
  DepthOfField,
  Pixelation,
  Noise,
  Vignette,
} from '@react-three/postprocessing';

export default function PostProcessing() {
  return (
    <EffectComposer enableNormalPass multisampling={4}>
      <SMAA />

      <Pixelation
        granularity={1} // pixel granularity
      />
      <ToneMapping
        adaptive={true} // toggle adaptive luminance map usage
        resolution={256} // texture resolution of the luminance map
        middleGrey={4} // middle grey factor
        maxLuminance={64.0} // maximum luminance
        averageLuminance={5.0} // average luminance
        adaptationRate={1.0} // luminance adaptation rate
      />

      <Bloom
        intensity={0.25}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.7}
        mipmapBlur
      />
      <Noise opacity={0.1} />
      <Vignette eskil={false} offset={0.1} darkness={0.5} />
    </EffectComposer>
  );
}
