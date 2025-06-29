import { useState, useEffect, useCallback, useRef } from "react";

const useMobileNav = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const headerBarsRef = useRef(null);

  // Show and hide functions
  const showMobileNav = useCallback(() => {
    if (mobileNavRef.current) {
      mobileNavRef.current.style.display = "flex";
      document.body.style.overflowY = "hidden";
    }
  }, []);

  const hideMobileNav = useCallback(() => {
    if (mobileNavRef.current) {
      mobileNavRef.current.style.display = "none";
      document.body.style.overflowY = "auto";
    }
  }, []);

  // Toggle mobile navigation
  const toggleMobileNav = useCallback(() => {
    setIsMobileNavOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isMobileNavOpen) {
      showMobileNav();
    } else {
      hideMobileNav();
    }
  }, [isMobileNavOpen, showMobileNav, hideMobileNav]);

  return { isMobileNavOpen, toggleMobileNav, mobileNavRef, headerBarsRef };
};

export default useMobileNav;
