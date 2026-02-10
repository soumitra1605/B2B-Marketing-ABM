
import React from 'react';

type IconProps = {
  className?: string;
};

export const TargetIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.02 12.02 0 0 0-5.84-7.38v4.82m5.84 2.56a6 6 0 0 0-7.38-5.84m-2.56 5.84a12.023 12.023 0 0 1 7.38 5.84m-7.38-5.84a6 6 0 0 1 5.84-7.38m-5.84 7.38a12.023 12.023 0 0 0-5.84 7.38m5.84-7.38a6 6 0 0 0-7.38-5.84m7.38 5.84a12.02 12.02 0 0 1-7.38-5.84" />
    </svg>
);

export const BriefcaseIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.99a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 2.25-2.25h12.02c1.24 0 2.25 1.01 2.25 2.25Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.36V4.89a2.25 2.25 0 0 0-2.25-2.25h-3.52a2.25 2.25 0 0 0-2.25 2.25v1.47m10.5 0v-1.47a2.25 2.25 0 0 0-2.25-2.25h-3.52a2.25 2.25 0 0 0-2.25 2.25v1.47" />
  </svg>
);

export const BuildingLibraryIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>
);

export const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

export const UserGroupIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.96a3.75 3.75 0 0 1 7.5 0v.008m-7.5 0a3.75 3.75 0 0 0-7.5 0v.008m7.5 0v.008c0 1.02.39 1.96.984 2.72m-3.984-2.72a3.75 3.75 0 0 0-7.5 0v.008c0 1.02.39 1.96.984 2.72M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
);
export const DocumentTextIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
);
export const ChartBarIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>
);
export const UsersIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-2.253M15 19.128v-3.873M15 19.128A9.37 9.37 0 0 1 12 21a9.37 9.37 0 0 1-3-5.872M15 19.128A9.37 9.37 0 0 0 12 21a9.37 9.37 0 0 0-3-1.872M12 9a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM12 15a2.25 2.25 0 0 1-2.25-2.25V9a2.25 2.25 0 0 1 4.5 0v3.75A2.25 2.25 0 0 1 12 15ZM3 8.25a9 9 0 0 1 18 0v1.063c0 .415-.18.815-.495 1.096L16.5 15.75a9 9 0 0 1-1.428 1.047M3 8.25L7.5 12.75M3 8.25a9 9 0 0 0 18 0M3 8.25v1.063c0 .415.18.815.495 1.096L7.5 15.75a9 9 0 0 0 1.428 1.047" /></svg>
);
export const LightBulbIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.354a15.055 15.055 0 0 1-3 0M12.75 6.462A6.024 6.024 0 0 0 12 6.375a6.024 6.024 0 0 0-.75.087m.75.087a6.025 6.025 0 0 1 3.585 3.585m0 0A9.033 9.033 0 0 1 18 12a9.033 9.033 0 0 1-2.33 5.86m-3.585-3.585A6.025 6.025 0 0 0 12.063 9a6.025 6.025 0 0 0-3.585 3.585m0 0A9.033 9.033 0 0 0 6 12a9.033 9.033 0 0 0 2.33 5.86m3.585-3.585a6.024 6.024 0 0 1-.75.087m.75-.087a6.024 6.024 0 0 0 .75.087" /></svg>
);
export const ChatBubbleBottomCenterTextIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .81-.332c1.15-.102 2.283-.245 3.4-.437 1.093-.19 2.16-.46 3.163-.795a1.86 1.86 0 0 0 .97-.872c.494-.901.59-1.932.494-2.954a10.537 10.537 0 0 0-2.313-5.022c-1.12-1.28-2.6-2.185-4.166-2.584C12.536 5.145 11.27 5 10 5c-2.39 0-4.57.48-6.44 1.313a10.548 10.548 0 0 0-3.235 3.442c-.52.962-.805 2.05-.805 3.169Z" /></svg>
);
export const ListBulletIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 5.25h.007v.008H4.125v-.008Zm0 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm0 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
);
export const BanknotesIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V6.375m18 11.25v-1.5a1.125 1.125 0 0 0-1.125-1.125h-1.5m-1.5 0v.375c0 .621.504 1.125 1.125 1.125h.375m-1.5-1.5H5.625c-.621 0-1.125.504-1.125 1.125v1.5m12-1.5v-1.5a1.125 1.125 0 0 0-1.125-1.125h-1.5m-1.5 0h.375c.621 0 1.125.504 1.125 1.125v1.5" /></svg>
);
export const PresentationChartLineIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h.009v.008h-.009v-.008Zm17.25 0h.009v.008h-.009v-.008Zm-5.625-8.25h.009v.008h-.009v-.008Zm-4.5 0h.009v.008h-.009v-.008Zm-4.5 0h.009v.008h-.009v-.008Zm-2.25-4.5h13.5a1.125 1.125 0 0 1 1.125 1.125v1.125a1.125 1.125 0 0 1-1.125 1.125h-13.5a1.125 1.125 0 0 1-1.125-1.125V7.875a1.125 1.125 0 0 1 1.125-1.125Z" /></svg>
);
export const ScaleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52a26.285 26.285 0 0 1-3 .52m0 0a26.285 26.285 0 0 0-3 .52m3 .52c-1.01.143-2.01.317-3 .52m0 0c-2.291.31-4.545.47-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52c-1.01.143-2.01.317-3 .52m0 0c-1.472 0-2.882.265-4.185.75m16.5 0a48.416 48.416 0 0 1-16.5 0m16.5 0c1.01.143 2.01.317 3 .52m-3 .52c-1.01.143-2.01.317-3 .52m0 0c-2.291.31-4.545.47-6.75.47m-6.75-.47a48.416 48.416 0 0 1-3-.52m3 .52c-1.01.143-2.01.317-3 .52" /></svg>
);
export const FireIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.608a8.287 8.287 0 0 0 3 7.184 8.287 8.287 0 0 0 3-7.184 8.287 8.287 0 0 0-2.638-4.394Z" /></svg>
);
export const ArrowTrendingUpIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 18 9-9 4.5 4.5L21.75 6" /></svg>
);
export const ShieldExclamationIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>
);
export const ArrowDownTrayIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
);