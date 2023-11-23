'use client';

// import { SocialIcons } from '@/app/@types';
// import { useTheme } from 'next-themes';
// import Image from 'next/image';

// function ThemedImage({ themeImage }: { themeImage: SocialIcons }) {
//   const { resolvedTheme } = useTheme();
//   let src;

//   switch (resolvedTheme) {
//     case 'light':
//       src = themeImage.src;
//       break;
//     case 'dark':
//       src = themeImage.imageDark;
//       break;
//     default:
//       src =
//         'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
//       break;
//   }

//   return <Image src={src} alt={themeImage.title} width={32} height={32} />;
// }

// export default ThemedImage;

import { SocialIcons, Stack } from '@/app/@types';
import { useTheme } from 'next-themes';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';

function ThemedImage({ themeImage }: { themeImage: SocialIcons | Stack }) {
  const { resolvedTheme } = useTheme();
  const [src, setSrc] = useState<string | StaticImageData>(
    'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  );
  useEffect(() => {
    switch (resolvedTheme) {
      case 'light':
        setSrc(themeImage.image);
        break;
      case 'dark':
        setSrc(themeImage.imageDark);
        break;
      default:
        src;
        break;
    }
  }, [resolvedTheme]);

  return <Image src={src} alt={themeImage.title} width={42} height={42} />;
}

export default ThemedImage;
