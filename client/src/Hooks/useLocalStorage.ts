import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAppLang } from "../Redux/Slices/StorageSlice";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
  const dispatch = useDispatch();

  const [value, setValue] = useState(() => {
    let currentValue;

    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue;
  });
  
  useEffect(() => {
    dispatch(setAppLang({ key, lang: value }));
  });

  return [value, setValue] as const;
}