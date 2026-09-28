import {
  EffectComposer,
  Bloom,
  SMAA,
  SSAO,
  ToneMapping,
  DepthOfField,
  Pixelation,
} from '@react-three/postprocessing';

export default function PostProcessing() {
  return (
    <EffectComposer enableNormalPass multisampling={4}>
      <SMAA />

      {/* <Pixelation
        granularity={2} // pixel granularity
      />*/}
      {/* <ToneMapping
        adaptive={true} // toggle adaptive luminance map usage
        resolution={256} // texture resolution of the luminance map
        middleGrey={0.6} // middle grey factor
        maxLuminance={16.0} // maximum luminance
        averageLuminance={1.0} // average luminance
        adaptationRate={1.0} // luminance adaptation rate
      />*/}
      {/* <DepthOfField
        focusDistance={0.1}
        focalLength={0.02}
        bokehScale={3}
        height={480}
      />*/}

      <Bloom
        intensity={0.35}
        luminanceThreshold={0.6}
        luminanceSmoothing={0.7}
        mipmapBlur
      />
    </EffectComposer>
  );
}
