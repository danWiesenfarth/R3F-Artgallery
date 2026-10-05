import { useEffect, useRef, useState } from 'react';
import Vinyl from './Vinyl';

export default function GalleryAudio({ visible }) {
  const audio = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const element = audio.current;

    return () => {
      element?.pause();
    };
  }, []);

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
      <audio ref={audio} src='/audio/APaintedFamily.mp3' loop preload='auto' />

      {visible && (
        <button onClick={toggleAudio} className='fixed bottom-6 right-6 z-50'>
          <Vinyl isPlaying={isPlaying} />
        </button>
      )}
    </>
  );
}
