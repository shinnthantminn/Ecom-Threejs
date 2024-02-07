import { createContext, useEffect, useState } from "react";

export const WindowContext = createContext({});

export const WindowProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Update windowWidth state on window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const value = { windowWidth, setWindowWidth };
  return (
    <WindowContext.Provider value={value}>{children}</WindowContext.Provider>
  );
};
