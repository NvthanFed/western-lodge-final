"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="font-heading font-800 text-8xl text-terracotta-500 mb-4">!</p>
        <h1 className="font-heading font-700 text-2xl text-teal-900 mb-3">
          Something Went Wrong
        </h1>
        <p className="font-body text-sm text-muted mb-8 leading-relaxed">
          An unexpected error occurred. Please try again or contact us if the
          problem persists.
        </p>
        <button
          onClick={reset}
          className="inline-block font-body font-600 text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-xl transition-colors duration-300"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
