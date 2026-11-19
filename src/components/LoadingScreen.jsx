import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { active, progress } = useProgress();

  const [displayProgress, setDisplayProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);
  const [started, setStarted] = useState(false);

  // Remember that loading has started
  useEffect(() => {
    if (active || progress > 0) {
      setStarted(true);
    }
  }, [active, progress]);

  // Smoothly interpolate progress
  useEffect(() => {
    let animationFrame;

    const animate = () => {
      setDisplayProgress((current) => {
        const difference = progress - current;

        if (Math.abs(difference) < 0.1) {
          return progress;
        }

        return current + difference * 0.08;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [progress]);

  // Wait until loading is complete
  useEffect(() => {
    if (!started || active || progress < 100) return;

    const timer = setTimeout(() => {
      setDisplayProgress(100);
      setReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [active, progress, started]);

  if (!started || entered) return null;

  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-[#e8e5df] px-6 text-blue-500'>
      <div className='w-full max-w-[500px]'>
        <div className='mb-[14px] font-["Departure_Mono"] text-[20px] tracking-[-0.015em] max-sm:text-[16px]'>
          {ready ? 'READY' : 'LOADING...'}
        </div>

        <div className='h-[4px] w-full bg-blue-500/15'>
          <div
            className='h-full bg-blue-500 transition-[width] duration-100 ease-linear'
            style={{ width: `${displayProgress}%` }}
          />
        </div>

        <div className='mt-[8px] flex items-center justify-between font-["Departure_Mono"] text-[20px] max-sm:text-[14px]'>
          <span>{Math.round(displayProgress)}%</span>
        </div>

        {ready && (
          <button
            type='button'
            onClick={() => setEntered(true)}
            className='mx-auto mt-4 rounded bg-blue-500 px-6 py-3 font-bold text-blue-50 hover:bg-blue-400'
          >
            Enter Gallery
          </button>
        )}
      </div>
    </div>
  );
}
