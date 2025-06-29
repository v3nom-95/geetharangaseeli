import { useEffect } from 'react';

export function usePageTransition(setShowTransition) {
  useEffect(() => {
    let timeout;
    const handleBeforeUnload = () => {
      setShowTransition(true);
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      if (timeout) clearTimeout(timeout);
    };
  }, [setShowTransition]);
}
