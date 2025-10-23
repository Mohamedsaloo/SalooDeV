import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value
 * Useful for search inputs to reduce number of requests
 */
export default function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
