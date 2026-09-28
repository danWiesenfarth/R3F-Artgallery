import { animate, scrambleText } from 'animejs';

export default function Header() {
  function handleMouseEnter(event) {
    animate(event.currentTarget, {
      innerHTML: scrambleText({
        chars: 'braille',
      }),
      duration: 500,
    });
  }

  return (
    <header className='absolute top-6 z-10 left-1/2 -translate-x-1/2 cursor-pointer py-4 px-8 rounded-[200px]'>
      <menu>
        <ul className='flex gap-4 text-blue-500 text-xl text-center justify-center items-center'>
          <li
            className='w-[125px] px-4 py-2 rounded-4xl hover:bg-blue-500/50 hover:border-t-blue-500   hover:text-blue-50'
            onMouseEnter={handleMouseEnter}
          >
            Explore
          </li>
          <li
            className='w-[125px] px-4 py-2 rounded-4xl hover:bg-blue-500 hover:text-blue-50'
            onMouseEnter={handleMouseEnter}
          >
            Works
          </li>
          <li
            className='w-[125px] px-4 py-2 rounded-4xl hover:bg-blue-500 hover:text-blue-50'
            onMouseEnter={handleMouseEnter}
          >
            About
          </li>
        </ul>
      </menu>
    </header>
  );
}
