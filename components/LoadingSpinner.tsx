
import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center justify-center text-center">
        <div className="relative">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.636-6.364l.707.707M19.071 19.071l-.707-.707M12 21v-1"></path>
                </svg>
            </div>
        </div>
      <p className="mt-4 text-lg font-semibold text-gray-300">Generating your strategic plan...</p>
      <p className="text-gray-400">The AI is crafting your comprehensive ABM strategy. Please wait a moment.</p>
    </div>
  );
};
