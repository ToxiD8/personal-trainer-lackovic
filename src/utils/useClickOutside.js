import { useEffect } from "react";

export default function useClickOutside(ref, isActive, onClickOutside) {
  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isActive, ref, onClickOutside]);
}
