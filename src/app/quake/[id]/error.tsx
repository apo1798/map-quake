'use client';

import Button from '@/src/components/ui/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>發生錯誤</h2>
      <Button
        onClick={

          () => reset()
        }
      >
        重新載入頁面
      </Button>
    </div>
  );
}
