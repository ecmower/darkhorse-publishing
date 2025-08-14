import localFont from 'next/font/local'

// Custom font configurations using your actual font files

export const fontHeading = localFont({
  src: [
    {
      path: '../public/fonts/ABCArizonaSerifVariable-Trial.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
})

export const fontBody = localFont({
  src: [
    {
      path: '../public/fonts/FTRegolaNeueTrial.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
})

// Keep the existing Inter font as fallback
export const fontSans = localFont({
  src: [
    {
      path: '../public/fonts/inter-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/inter-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
