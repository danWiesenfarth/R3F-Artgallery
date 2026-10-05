export default function Vinyl({ isPlaying = false }) {
  return (
    <>
      <svg
        width='128'
        height='128'
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Frame 20'>
          <g id='Group 5'>
            <g id='Ellipse 2' filter='url(#filter0_n_225_2)'>
              <circle cx='64' cy='64' r='48' fill='#212121' />
            </g>
            <circle
              id='Ellipse 1'
              cx='64'
              cy='64'
              r='48'
              fill='url(#paint0_linear_225_2)'
              fill-opacity='0.4'
            />
            <g id='lines'>
              <circle
                id='Ellipse 4'
                cx='64'
                cy='64'
                r='43'
                stroke='#141414'
                stroke-width='2'
              />
              <circle
                id='Ellipse 6'
                cx='64'
                cy='64'
                r='39'
                stroke='#141414'
                stroke-width='2'
              />
              <circle
                id='Ellipse 9'
                cx='64'
                cy='64'
                r='35'
                stroke='#141414'
                stroke-width='2'
              />
              <circle
                id='Ellipse 11'
                cx='64'
                cy='64'
                r='31'
                stroke='#141414'
                stroke-width='2'
              />
              <circle
                id='Ellipse 13'
                cx='64'
                cy='64'
                r='27'
                stroke='#141414'
                stroke-width='2'
              />
              <circle
                id='Ellipse 15'
                cx='64'
                cy='64'
                r='23'
                stroke='#141414'
                stroke-width='2'
              />
            </g>
            <g id='inner' className={isPlaying ? 'vinyl-rotating' : ''}>
              <circle id='Ellipse 2_2' cx='64' cy='64' r='20' fill='#2D69F6' />
              <circle id='Ellipse 7' cx='64' cy='64' r='2' fill='black' />
              <g id='Group'>
                <path
                  id='Vector'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M62.6076 58.48L61.8888 57.2378L63.5 56.3098V51.9257L61.8888 50.9976L62.4661 50L60.5073 50C59.0338 50 57.8015 50.4713 57 51.3612C56.3647 52.0666 56 53.0349 56 54.24C56 56.9657 57.7932 58.48 60.5073 58.48H62.6076ZM60.5557 56.675C58.9806 56.675 57.9386 55.827 57.9386 54.24C57.9386 52.653 58.9806 51.7566 60.5557 51.7566H61.5614V56.675H60.5557Z'
                  fill='white'
                />
                <path
                  id='Vector_2'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M65.3924 58.48L66.1112 57.2378L64.5 56.3098V51.9257L66.1112 50.9976L65.5339 50L67.4927 50C70.1341 50 72 51.5143 72 54.24C72 56.9657 70.2068 58.48 67.4927 58.48H65.3924ZM67.4443 56.675C69.0194 56.675 70.0614 55.827 70.0614 54.24C70.0614 52.653 69.0194 51.7566 67.4443 51.7566H66.4386V56.675H67.4443Z'
                  fill='white'
                />
              </g>
              <g id='Group_2'>
                <path
                  id='Vector_3'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M62.6076 78.48L61.8888 77.2378L63.5 76.3098V71.9257L61.8888 70.9976L62.4661 70L60.5073 70C59.0338 70 57.8015 70.4713 57 71.3612C56.3647 72.0666 56 73.0349 56 74.24C56 76.9657 57.7932 78.48 60.5073 78.48H62.6076ZM60.5557 76.675C58.9806 76.675 57.9386 75.827 57.9386 74.24C57.9386 72.653 58.9806 71.7566 60.5557 71.7566H61.5614V76.675H60.5557Z'
                  fill='white'
                />
                <path
                  id='Vector_4'
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M65.3924 78.48L66.1112 77.2378L64.5 76.3098V71.9257L66.1112 70.9976L65.5339 70L67.4927 70C70.1341 70 72 71.5143 72 74.24C72 76.9657 70.2068 78.48 67.4927 78.48H65.3924ZM67.4443 76.675C69.0194 76.675 70.0614 75.827 70.0614 74.24C70.0614 72.653 69.0194 71.7566 67.4443 71.7566H66.4386V76.675H67.4443Z'
                  fill='white'
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id='filter0_n_225_2'
            x='16'
            y='16'
            width='96'
            height='96'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feTurbulence
              type='fractalNoise'
              baseFrequency='0.5 0.5'
              stitchTiles='stitch'
              numOctaves='3'
              result='noise'
              seed='605'
            />
            <feColorMatrix
              in='noise'
              type='luminanceToAlpha'
              result='alphaNoise'
            />
            <feComponentTransfer in='alphaNoise' result='coloredNoise1'>
              <feFuncA
                type='discrete'
                tableValues='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 '
              />
            </feComponentTransfer>
            <feComposite
              operator='in'
              in2='shape'
              in='coloredNoise1'
              result='noise1Clipped'
            />
            <feFlood flood-color='#141414' result='color1Flood' />
            <feComposite
              operator='in'
              in2='noise1Clipped'
              in='color1Flood'
              result='color1'
            />
            <feMerge result='effect1_noise_225_2'>
              <feMergeNode in='shape' />
              <feMergeNode in='color1' />
            </feMerge>
          </filter>
          <linearGradient
            id='paint0_linear_225_2'
            x1='64'
            y1='16'
            x2='64'
            y2='112'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.341346' stop-color='#282828' />
            <stop offset='0.5' stop-color='white' />
            <stop offset='0.673077' stop-color='#111111' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
