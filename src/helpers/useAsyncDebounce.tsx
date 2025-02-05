import React from "react";
import { useGetLatest } from "react-table";

export function useAsyncDebounce<T extends (state: any[]) => any>(
  defaultFn: T,
  defaultWait: number
): T {
  const debounceRef = React.useRef<{
    promise?: Promise<T>;
    resolve?: (value: T | PromiseLike<T>) => void;
    reject?: (reason?: any) => void;
    timeout?: NodeJS.Timeout;
  }>({});

  // the given state could be props, which change, so we want to always use latest definitions.
  const getDefaultFn = useGetLatest(defaultFn);
  const getDefaultWait = useGetLatest(defaultWait);

  return React.useCallback(
    (async (...state) => {
      // make a promise
      if (!debounceRef.current.promise) {
        debounceRef.current.promise = new Promise((resolve, reject) => {
          debounceRef.current.resolve = resolve;
          debounceRef.current.reject = reject;
        });
      }

      if (debounceRef.current.timeout) {
        clearTimeout(debounceRef.current.timeout);
      }

      debounceRef.current.timeout = setTimeout(async () => {
        // Executing a debounced call--don't let it be canceled.
        delete debounceRef.current.timeout;
        try {
          debounceRef.current.resolve(await getDefaultFn?.()?.(...state));
        } catch (err) {
          debounceRef.current.reject(err);
        } finally {
          delete debounceRef.current.promise;
        }
      }, getDefaultWait());

      return debounceRef.current.promise;
    }) as T,
    [getDefaultFn, getDefaultWait]
  );
}
