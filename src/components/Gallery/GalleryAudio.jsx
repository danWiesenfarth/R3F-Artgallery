import { useRef, useState } from 'react';
import Vinyl from './Vinyl';

export default function GalleryAudio({ visible, mobileVisible }) {
  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function toggleAudio() {
    if (!audio.current) return;

    if (isPlaying) {
      audio.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.error('Could not play audio:', error);
    }
  }

  return (
    <>
      <audio ref={audio} src='/audio/ChasingClouds.mp3' loop preload='auto' />

      {visible && (
        <button
          onClick={toggleAudio}
          className={`
            fixed z-50
            right-6 top-295

            max-md:right-4
            max-md:bottom-auto
            max-md:top-[280px]

            transition-opacity duration-300
            ${
              mobileVisible
                ? 'max-md:pointer-events-auto max-md:opacity-100'
                : 'max-md:pointer-events-none max-md:opacity-0'
            }
          `}
        >
          <Vinyl isPlaying={isPlaying} />
        </button>
      )}
    </>
  );
}
