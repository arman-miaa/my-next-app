"use client"
import { useEffect, useState } from "react";

const Counter = ({ storageKey = "counter_value", initial = 0 }) => {
  const [count, setCount] = useState(initial);
  const [isAnimating, setIsAnimating] = useState(false);

  // load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw !== null) setCount(Number(raw));
    } catch (e) {
      // ignore if no localStorage (SSR) or parsing fails
    }
  }, [storageKey]);

  // persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, String(count));
    } catch (e) {
      // ignore
    }
  }, [count, storageKey]);

  const inc = (n = 1) => {
    setCount((c) => {
      const v = c + n;
      triggerAnim();
      return v;
    });
  };
  const dec = (n = 1) => {
    setCount((c) => {
      const v = c - n;
      triggerAnim();
      return v;
    });
  };
  const reset = () => {
    setCount(initial);
    triggerAnim();
  };

  const triggerAnim = () => {
    setIsAnimating(true);
    window.setTimeout(() => setIsAnimating(false), 180);
  };

  return (
    <div className="min-h-screen flex  items-center justify-center">
      <div className="max-w-sm mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Simple Counter
        </h3>

        <div className="flex items-center justify-center mb-4">
          <button
            aria-label="Decrease"
            onClick={() => dec(1)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 active:scale-95 transition"
          >
            −
          </button>

          <div
            className={`mx-4 w-36 h-20 flex items-center justify-center rounded-lg text-2xl font-medium text-gray-900 border border-gray-200 ${
              isAnimating ? "scale-105 shadow-sm" : "scale-100"
            } transition-transform duration-150`}
            role="status"
            aria-live="polite"
          >
            {count}
          </div>

          <button
            aria-label="Increase"
            onClick={() => inc(1)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 hover:bg-gray-50 active:scale-95 transition"
          >
            +
          </button>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => dec(5)}
            className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
          >
            -5
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-3 py-2 rounded-md bg-red-50 text-red-600 border border-red-100 hover:bg-red-100 transition"
          >
            Zero
          </button>
          <button
            onClick={() => inc(5)}
            className="px-3 py-2 rounded-md bg-green-50 text-green-700 border border-green-100 hover:bg-green-100 transition"
          >
            +5
          </button>
          <button
            onClick={reset}
            className="px-3 py-2 rounded-md bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 transition"
          >
            Reset
          </button>
        </div>

        <p className="mt-4 text-xs text-gray-500 text-center">
          Value saved to{" "}
          <code className="bg-gray-100 px-1 rounded">localStorage</code>
        </p>
      </div>
    </div>
  );
};

export default Counter;
