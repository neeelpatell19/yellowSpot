import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// The Meta Pixel base script (index.html) already fires the PageView for the
// first load. This tracks subsequent client-side route changes, which a
// single-page app would otherwise never report to Meta.
const MetaPixelTracker = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelTracker;
