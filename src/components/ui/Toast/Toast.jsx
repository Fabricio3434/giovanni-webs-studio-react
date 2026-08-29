import { useEffect } from "react";

export function Toast({ type, message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast toast--${type}`}>
      {message}
    </div>
  );
}