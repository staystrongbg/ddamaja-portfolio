'use client';

import { useTheme } from 'next-themes';
import Glow from './Glow';
import { useEffect, useState } from 'react';

function BigImageGlow() {
  const { resolvedTheme } = useTheme();
  const [dark, setDark] = useState(true);
  useEffect(() => {
    switch (resolvedTheme) {
      case 'dark':
        setDark(true);
        break;
      case 'light':
        setDark(false);
        break;
      default:
        dark;
        break;
    }
  }, [resolvedTheme]);

  return (
    <>
      {dark ? (
        <Glow
          rotate="-rotate-12"
          background="bg-gradient-to-r from-[#181123] via-cyan-800 to-[#181123]"
          height="h-[95%]"
          width="w-[95%]"
        />
      ) : (
        <Glow
          rotate="-rotate-12"
          height="h-[95%]"
          width="w-[95%]"
          background="bg-gradient-to-r from-yellow-200 to-cyan-100"
        />
      )}
    </>
  );
}
export default BigImageGlow;
