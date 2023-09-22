import { useEffect, useState } from "react";

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"down" | "up" | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (
        direction !== scrollDir &&
        (scrollY - lastScrollY > 0.5 || scrollY - lastScrollY < -0.5)
      ) {
        setScrollDir(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDir);

    return () => {
      window.removeEventListener("scroll", updateScrollDir);
    };
  }, [scrollDir]);

  return scrollDir;
}

export default useScrollDirection;
