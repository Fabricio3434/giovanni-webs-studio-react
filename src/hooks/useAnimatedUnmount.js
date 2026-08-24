import { useEffect, useState } from "react";

export function useAnimatedUnmount(isOpen, duration = 500) {
  const [shouldRender, setShouldRender] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const schedule = (callback, delay = 0) => {
      const timeoutId = window.setTimeout(callback, delay);
      return timeoutId;
    };

    if (isOpen) {
      const timeoutId = schedule(() => {
        setShouldRender(true);
        setIsClosing(false);
      });

      return () => window.clearTimeout(timeoutId);
    }

    const closingTimeoutId = schedule(() => {
      setIsClosing(true);
    });

    const unmountTimeoutId = schedule(() => {
      setShouldRender(false);
      setIsClosing(false);
    }, duration);

    return () => {
      window.clearTimeout(closingTimeoutId);
      window.clearTimeout(unmountTimeoutId);
    };
  }, [duration, isOpen]);

  return { shouldRender, isClosing };
}
