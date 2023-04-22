import { useEffect, useState } from "react";

const useMediaMatch = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (event: any) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    }
  }, []);

  return isMobile
}

export default useMediaMatch;