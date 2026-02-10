
import React from 'react';
import { ChevronDownIcon } from './icons';

interface SectionCardProps {
  title: string;
  icon: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, icon, isOpen, onToggle, children }) => {
  return (
    <div className="border border-gray-700 bg-gray-800/50 rounded-lg overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-gray-800 hover:bg-gray-700/60 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="text-indigo-400">{icon}</span>
          <h2 className="text-lg md:text-xl font-semibold text-gray-100">{title}</h2>
        </div>
        <ChevronDownIcon
          className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        style={{ display: 'grid' }}
      >
        <div className="overflow-hidden">
           <div className="p-4 md:p-6 text-gray-300 border-t border-gray-700">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
