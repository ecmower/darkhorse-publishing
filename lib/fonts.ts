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
      path: '../public/fonts/FTRegolaNeueTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-RegularItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-SemiboldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Heavy.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-HeavyItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-body',
  display: 'swap',
})

// Use FT Regola Neue Trial as the default sans font as well
export const fontSans = localFont({
  src: [
    {
      path: '../public/fonts/FTRegolaNeueTrial-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/FTRegolaNeueTrial-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
})
