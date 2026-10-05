import { useState } from 'react';
import { animate, scrambleText } from 'animejs';
import { Link } from 'react-router-dom';
import GalleryAudio from './Gallery/GalleryAudio';

export default function Header({ showUI }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMouseEnter(event) {
    animate(event.currentTarget, {
      innerHTML: scrambleText({
        chars: 'braille',
      }),
      duration: 500,
    });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className='absolute top-6 left-1/2 z-[100] w-full -translate-x-1/2 px-4 sm:px-8'>
      <div className='flex items-start justify-between'>
        {/* Logo */}
        <Link to='/' onClick={closeMenu}>
          <svg
            className='h-auto w-[100px] sm:w-[140px] md:w-[160px]'
            width='156'
            height='75'
            viewBox='0 0 156 75'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_109_79)'>
              <mask
                id='mask0_109_79'
                style={{ maskType: 'luminance' }}
                maskUnits='userSpaceOnUse'
                x='28'
                y='0'
                width='100'
                height='53'
              >
                <path d='M128 0H28V53H128V0Z' fill='white' />
              </mask>

              <g mask='url(#mask0_109_79)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M69.2978 53L64.8048 45.2363L74.875 39.4361V12.0356L64.8048 6.23529L68.4133 0L56.1705 5.33896e-07C46.9609 9.35511e-07 39.2596 2.94544 34.25 8.50772C30.2797 12.916 28 18.9679 28 26.5C28 43.5358 39.2076 53 56.1705 53H69.2978ZM56.4733 41.7186C46.6289 41.7186 40.1163 36.4186 40.1163 26.5C40.1163 16.5814 46.6289 10.9786 56.4733 10.9786H62.7587V41.7186H56.4733Z'
                  fill='#2D69F6'
                />

                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M86.7022 53L91.1952 45.2363L81.125 39.4361V12.0356L91.1952 6.23529L87.5867 0L99.8295 1.60169e-06C116.338 3.76143e-06 128 9.46429 128 26.5C128 43.5358 116.792 53 99.8295 53H86.7022ZM99.5267 41.7186C109.371 41.7186 115.884 36.4186 115.884 26.5C115.884 16.5814 109.371 10.9786 99.5267 10.9786H93.2412V41.7186H99.5267Z'
                  fill='#2D69F6'
                />
              </g>
            </g>

            <path
              d='M4.8 70.625C6.945 70.625 8.205 69.275 8.205 67.25C8.205 65.225 6.945 63.815 4.8 63.815H3.15V70.625H4.8ZM10.215 67.25C10.215 70.61 8.055 72.5 4.845 72.5H1.14V62H4.845C7.965 62 10.215 63.875 10.215 67.25ZM16.6286 62L20.3786 72.5H18.5786L17.8286 70.31H12.9836L12.2186 72.5H10.4186L14.1686 62H16.6286ZM13.5686 68.675H17.2436L15.5336 63.815H15.2636L13.5686 68.675ZM29.4025 68.675V62H31.4125V72.5H28.3075L23.8225 63.815H23.5525C23.5525 63.815 23.6725 64.7 23.6725 65.765V72.5H21.6625V62H24.7675L29.2675 70.685H29.5225C29.5225 70.685 29.4025 69.77 29.4025 68.675ZM37.3488 70.625C39.4938 70.625 40.7538 69.275 40.7538 67.25C40.7538 65.225 39.4938 63.815 37.3488 63.815H35.6988V70.625H37.3488ZM42.7638 67.25C42.7638 70.61 40.6038 72.5 37.3938 72.5H33.6888V62H37.3938C40.5138 62 42.7638 63.875 42.7638 67.25ZM51.1754 62V63.815H46.4654V66.26H50.6804V68.03H46.4654V70.685H51.1754V72.5H44.4554V62H51.1754ZM60.5827 69.38C60.5827 70.895 59.4127 72.68 56.5327 72.68C53.6677 72.68 52.4977 70.865 52.4977 69.35H54.5077C54.5077 70.04 55.0927 70.865 56.5477 70.865C57.9877 70.865 58.5727 70.07 58.5727 69.38C58.5727 68.435 57.0277 68.255 56.1277 68.09C54.5977 67.805 52.5577 67.22 52.5577 64.97C52.5577 63.515 53.6977 61.82 56.5477 61.82C59.3977 61.82 60.5527 63.515 60.5527 64.97C60.5527 64.985 60.5527 65 60.5527 65.045H58.5427C58.5427 65 58.5427 64.985 58.5427 64.97C58.5427 64.37 57.9877 63.635 56.5477 63.635C55.1377 63.635 54.5677 64.37 54.5677 64.97C54.5677 65.75 55.2727 66.11 56.5177 66.305C58.4377 66.59 60.5827 67.13 60.5827 69.38ZM62.3412 62H64.3512V72.5H62.3412V62ZM76.0082 67.265V72.5H74.1782V72.095C74.1782 71.15 74.7482 69.575 74.9282 69.065H74.6582C74.5382 69.83 73.7732 72.68 70.4732 72.68C68.6132 72.68 66.0482 71.3 66.0482 67.265C66.0482 64.61 67.4732 61.82 71.1932 61.82C74.6432 61.82 75.7232 64.415 75.9782 65.195H73.8182C73.5932 64.715 72.8132 63.635 71.1782 63.635C68.9582 63.635 68.0582 65.585 68.0582 67.235C68.0582 68.915 68.9432 70.85 71.1632 70.865C72.8132 70.85 73.878 69.56 73.878 68.435C73.878 68.24 73.7132 68.075 73.5182 68.075H70.9982V66.26H75.0032C75.5732 66.26 76.0082 66.695 76.0082 67.265ZM85.6378 68.675V62H87.6478V72.5H84.5428L80.0578 63.815H79.7878C79.7878 63.815 79.9078 64.7 79.9078 65.765V72.5H77.8978V62H81.0028L85.5028 70.685H85.7578C85.7578 70.685 85.6378 69.77 85.6378 68.675ZM97.3795 69.38C97.3795 70.895 96.2095 72.68 93.3295 72.68C90.4645 72.68 89.2945 70.865 89.2945 69.35H91.3045C91.3045 70.04 91.8895 70.865 93.3445 70.865C94.7845 70.865 95.3695 70.07 95.3695 69.38C95.3695 68.435 93.8245 68.255 92.9245 68.09C91.3945 67.805 89.3545 67.22 89.3545 64.97C89.3545 63.515 90.4945 61.82 93.3445 61.82C96.1945 61.82 97.3495 63.515 97.3495 64.97C97.3495 64.985 97.3495 65 97.3495 65.045H95.3395C95.3395 65 95.3395 64.985 95.3395 64.97C95.3395 64.37 94.7845 63.635 93.3445 63.635C91.9345 63.635 91.3645 64.37 91.3645 64.97C91.3645 65.75 92.0695 66.11 93.3145 66.305C95.2347 66.59 97.3795 67.13 97.3795 69.38ZM102.798 70.625C104.943 70.625 106.203 69.275 106.203 67.25C106.203 65.225 104.943 63.815 102.798 63.815H101.148V70.625H102.798ZM108.213 67.25C108.213 70.61 106.053 72.5 102.843 72.5H99.138V62H102.843C105.963 62 108.213 63.875 108.213 67.25ZM109.905 62H111.915V72.5H109.905V62ZM123.572 67.265V72.5H121.742V72.095C121.742 71.15 122.312 69.575 122.492 69.065H122.222C122.102 69.83 121.337 72.68 118.037 72.68C116.177 72.68 113.612 71.3 113.612 67.265C113.612 64.61 115.037 61.82 118.757 61.82C122.207 61.82 123.287 64.415 123.542 65.195H121.382C121.157 64.715 120.377 63.635 118.742 63.635C116.522 63.635 115.622 65.585 115.622 67.235C115.622 68.915 116.507 70.85 118.727 70.865C120.377 70.85 121.442 69.56 121.442 68.435C121.442 68.24 121.277 68.075 121.082 68.075H118.562V66.26H122.567C123.137 66.26 123.572 66.695 123.572 67.265ZM125.461 62H127.471V72.5H125.461V62ZM136.923 62V63.815H133.908V72.5H131.898V63.815H128.883V62H136.923ZM142.517 62L146.267 72.5H144.467L143.717 70.31H138.872L138.107 72.5H136.307L140.057 62H142.517ZM139.457 68.675H143.132L141.422 63.815H141.152L139.457 68.675ZM149.561 62V70.685H154.301V72.5H147.551V62H149.561Z'
              fill='#005ADA'
            />

            <defs>
              <clipPath id='clip0_109_79'>
                <rect
                  width='100'
                  height='53'
                  fill='white'
                  transform='translate(28)'
                />
              </clipPath>
            </defs>
          </svg>
        </Link>

        {/* Desktop navigation */}
        <nav className='hidden md:block'>
          <ul className='flex items-center justify-center gap-4 text-center text-xl text-blue-500'>
            <li>
              <Link
                to='/'
                onMouseEnter={handleMouseEnter}
                className='block w-[125px] rounded-4xl px-4 py-2 hover:bg-blue-500 hover:text-blue-50'
              >
                Explore
              </Link>
            </li>

            <li>
              <Link
                to='/work'
                onMouseEnter={handleMouseEnter}
                className='block w-[125px] rounded-4xl px-4 py-2 hover:bg-blue-500 hover:text-blue-50'
              >
                Works
              </Link>
            </li>

            <li>
              <Link
                to='/about'
                onMouseEnter={handleMouseEnter}
                className='block w-[125px] rounded-4xl px-4 py-2 hover:bg-blue-500/50 hover:text-blue-50'
              >
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile burger */}
        <button
          type='button'
          onClick={() => setMenuOpen((prev) => !prev)}
          className='relative z-[101] flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 md:hidden'
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className='relative block h-4 w-5'>
            <span
              className={`absolute left-0 top-0 h-[2px] w-5 bg-white transition-transform duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />

            <span
              className={`absolute left-0 top-[7px] h-[2px] w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`absolute left-0 top-[14px] h-[2px] w-5 bg-white transition-transform duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-16 right-4 left-4 overflow-hidden rounded-3xl bg-blue-500 transition-all duration-300 md:hidden ${
          menuOpen
            ? 'pointer-events-auto max-h-[500px] opacity-100'
            : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className='p-3 flex flex-col items-end text-right'>
          <Link
            to='/'
            onClick={closeMenu}
            className='block rounded-2xl px-5 py-4 text-xl text-white'
          >
            Explore
          </Link>

          <Link
            to='/work'
            onClick={closeMenu}
            className='block rounded-2xl px-5 py-4 text-xl text-white'
          >
            Works
          </Link>

          <Link
            to='/about'
            onClick={closeMenu}
            className='block rounded-2xl px-5 py-4 text-xl text-white'
          >
            About
          </Link>

          {/* Audio / vinyl */}
        </nav>
      </div>
      <GalleryAudio visible={showUI} mobileVisible={menuOpen} />
    </header>
  );
}
