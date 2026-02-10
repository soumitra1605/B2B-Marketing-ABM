
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { SelectorPanel } from './components/SelectorPanel';
import { PlanDisplay } from './components/PlanDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { generateAbmPlan } from './services/geminiService';
import { AbmPlan } from './types';
import { TargetIcon } from './components/icons';

const App: React.FC = () => {
  const [domain, setDomain] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [abmPlan, setAbmPlan] = useState<AbmPlan | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleGeneratePlan = useCallback(async () => {
    if (!domain || !industry) return;

    setIsLoading(true);
    setError(null);
    setAbmPlan(null);

    try {
      const plan = await generateAbmPlan(domain, industry);
      setAbmPlan(plan);
    } catch (err) {
      console.error(err);
      setError('Failed to generate the ABM plan. Please check your API key and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [domain, industry]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <SelectorPanel
          domain={domain}
          setDomain={setDomain}
          industry={industry}
          setIndustry={setIndustry}
          onGenerate={handleGeneratePlan}
          isLoading={isLoading}
        />

        {isLoading && <LoadingSpinner />}
        
        {error && (
          <div className="mt-8 text-center bg-red-900/50 border border-red-700 text-red-300 px-4 py-3 rounded-lg" role="alert">
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        {abmPlan && !isLoading && <PlanDisplay plan={abmPlan} />}

        {!abmPlan && !isLoading && !error && (
            <div className="mt-12 text-center text-gray-400">
                <div className="flex justify-center items-center mb-4">
                    <TargetIcon className="w-16 h-16 text-indigo-500" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-300">Welcome to the ABM Genesis Planner</h2>
                <p className="mt-2 max-w-2xl mx-auto">
                    Select your business domain and target industry, then click "Generate Plan" to create a bespoke, AI-driven Account-Based Marketing strategy.
                </p>
            </div>
        )}

      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>Powered by Gemini API. Created for strategic marketing excellence.</p>
      </footer>
    </div>
  );
};

export default App;
