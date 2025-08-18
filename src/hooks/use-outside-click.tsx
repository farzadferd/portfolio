// src/hooks/use-outside-click.tsx
import { useEffect } from 'react';

type EventType = MouseEvent | TouchEvent;

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: (event: EventType) => void
) {
  useEffect(() => {
    const handleClick = (event: EventType) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [ref, callback]);
}

