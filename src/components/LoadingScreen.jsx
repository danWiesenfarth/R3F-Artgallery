import { useEffect, useState } from 'react';
import { useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { active, progress } = useProgress();

  const [displayProgress, setDisplayProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (progress < 100) {
      setDisplayProgress(progress);
      return;
    }

    // Keep the loading screen at 100% for a little longer
    setDisplayProgress(100);

    const timer = setTimeout(() => {
      setReady(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, [progress]);

  if (!active && !ready) return null;
  if (entered) return null;

  return (
    <div className='fixed inset-0 z-[1000] flex items-center justify-center bg-[#e8e5df] px-6 text-blue-500'>
      <div className='w-full max-w-[500px]'>
        <div className='mb-[14px] font-["Departure_Mono"] text-[20px] tracking-[-0.015em] max-sm:text-[16px]'>
          {ready ? 'READY' : 'LOADING...'}
        </div>

        <div className='h-[4px] w-full bg-blue-500/15'>
          <div
            className='h-full bg-blue-500 transition-[width] duration-200 ease-in-out'
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
            className='px-6 py-3 rounded bg-blue-500  text-blue-50 font-bold hover:bg-blue-400 mx-auto mt-8'
          >
            Enter Gallery
          </button>
        )}
      </div>
    </div>
  );
}
