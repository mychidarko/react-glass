import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTo(x = 0, y = 0) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(x, y);
  }, [pathname, x, y]);

  return null;
}
