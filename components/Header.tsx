
import React from 'react';
import { TargetIcon } from './icons';

export const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-20 border-b border-gray-700">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center gap-3">
        <TargetIcon className="h-8 w-8 text-indigo-400" />
        <h1 className="text-2xl font-bold text-white tracking-tight">
          ABM Genesis Planner
        </h1>
      </div>
    </header>
  );
};
