import { useEffect, useState } from "react";

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 20) {
        setScrollPos(position)
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollPos;
}

export default useScrollPosition;