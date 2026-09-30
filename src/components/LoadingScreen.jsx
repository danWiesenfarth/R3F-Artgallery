import { useProgress } from '@react-three/drei';

export default function LoadingScreen() {
  const { active, progress } = useProgress();

  if (!active) return null;

  return (
    <div className='loading-screen text-blue-500'>
      <div className='loading-content'>
        <div className='loading-title'>Loading Exhibition...</div>

        <div className='loading-progress h-1.5 rounded'>
          <div
            className='loading-progress-bar bg-blue-500 rounded-xl '
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className='loading-percentage'>{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
