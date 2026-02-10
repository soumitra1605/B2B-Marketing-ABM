
import React from 'react';
import { BUSINESS_DOMAINS, TARGET_INDUSTRIES } from '../constants';
import { BriefcaseIcon, BuildingLibraryIcon, SparklesIcon } from './icons';

interface SelectorPanelProps {
  domain: string;
  setDomain: (domain: string) => void;
  industry: string;
  setIndustry: (industry: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
}

export const SelectorPanel: React.FC<SelectorPanelProps> = ({
  domain,
  setDomain,
  industry,
  setIndustry,
  onGenerate,
  isLoading,
}) => {
  const canGenerate = domain && industry && !isLoading;

  return (
    <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="business-domain" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
            <BriefcaseIcon className="w-5 h-5" />
            Your Business Domain
          </label>
          <select
            id="business-domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
          >
            <option value="">Select a domain...</option>
            {BUSINESS_DOMAINS.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="target-industry" className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
            <BuildingLibraryIcon className="w-5 h-5" />
            Target Industry
          </label>
          <select
            id="target-industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg focus:ring-indigo-500 focus:border-indigo-500 p-2.5"
          >
            <option value="">Select an industry...</option>
            {TARGET_INDUSTRIES.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={onGenerate}
          disabled={!canGenerate}
          className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 w-full md:w-auto"
        >
           {isLoading ? (
             <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
             </>
           ) : (
             <>
              <SparklesIcon className="w-5 h-5" />
              Generate Plan
             </>
           )}
        </button>
      </div>
    </div>
  );
};
