import { useState, useEffect } from "react";

const useWitdh = () => {
  // save current window width in the state object
  let [width, setWidth] = useState(0);

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return { width, setWidth };
};

export default useWitdh;
