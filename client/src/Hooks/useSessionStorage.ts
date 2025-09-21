import { useState } from "react";

export default function useSessionStorage<T>(key: string, defaultValue: T) {
  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        sessionStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });

  return [value, setValue] as const;
}