// File: src/hooks/useLocalStorage.ts

import { useState, useEffect } from "react";

// Helper function with generic type
const getStoredValue = <T>(key: string, defaultValue: T): T => {
  const savedItem = localStorage.getItem(key);
  if (savedItem) {
    return JSON.parse(savedItem);
  }
  return defaultValue;
};

// Custom hook using generics
export const useLocalStorage = <T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() =>
    getStoredValue(key, defaultValue),
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
