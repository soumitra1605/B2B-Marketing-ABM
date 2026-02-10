
import React, { useState } from 'react';
import { AbmPlan, AbmDeploymentModel, HeatmapQuadrant } from '../types';
import { SectionCard } from './SectionCard';
import { jsPDF } from "jspdf";
import {
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon,
  UsersIcon,
  LightBulbIcon,
  ChatBubbleBottomCenterTextIcon,
  ListBulletIcon,
  BanknotesIcon,
  PresentationChartLineIcon,
  ScaleIcon,
  FireIcon,
  ArrowTrendingUpIcon,
  ShieldExclamationIcon,
  ArrowDownTrayIcon,
} from './icons';

interface PlanDisplayProps {
  plan: AbmPlan;
}

const renderDeploymentModel = (title: string, model: AbmDeploymentModel) => (
  <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
    <h4 className="text-xl font-semibold text-indigo-400 mb-3">{title}</h4>
    <p className="mb-4">{model.description}</p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <h5 className="font-semibold text-gray-300 mb-2 flex items-center gap-2"><ListBulletIcon className="w-5 h-5 text-indigo-400" /> Target Channels</h5>
        <ul className="list-disc list-inside space-y-1 text-gray-400">
          {model.targetChannels.map((channel, i) => <li key={i}>{channel}</li>)}
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-gray-300 mb-2 flex items-center gap-2"><BanknotesIcon className="w-5 h-5 text-indigo-400" /> Budget Allocation</h5>
        <p className="text-gray-400">{model.budgetAllocation}</p>
      </div>
    </div>
    <div className="mt-4">
      <h5 className="font-semibold text-gray-300 mb-2 flex items-center gap-2"><PresentationChartLineIcon className="w-5 h-5 text-indigo-400" /> Key Metrics</h5>
      <div className="space-y-2 text-gray-400">
        <p><strong className="text-gray-300">Revenue:</strong> {model.metrics.revenue}</p>
        <p><strong className="text-gray-300">Reputation:</strong> {model.metrics.reputation}</p>
        <p><strong className="text-gray-300">Relationship:</strong> {model.metrics.relationship}</p>
      </div>
    </div>
  </div>
);

const renderQuadrant = (quadrant: HeatmapQuadrant | undefined, bgColor: string, icon: React.ReactNode) => {
    if (!quadrant) return <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 min-h-[160px] flex items-center justify-center text-gray-500">Data not available</div>;
    return (
        <div className={`p-4 rounded-lg border border-gray-600 ${bgColor} flex flex-col`}>
            <div className="flex items-center gap-3 mb-2">
                <span className="text-white">{icon}</span>
                <h5 className="font-bold text-lg text-white">{quadrant.label}</h5>
            </div>
            <p className="text-sm text-gray-300 mb-3 font-medium">{quadrant.quadrantName}</p>
            <p className="text-gray-200 text-sm flex-grow">{quadrant.actionItems}</p>
        </div>
    );
};


export const PlanDisplay: React.FC<PlanDisplayProps> = ({ plan }) => {
  const [openSection, setOpenSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };
  
  const { netNewBusiness, existingAccountGrowth, industryPainPoints, suggestedAccounts } = plan.accountSelection;

  const findQuadrant = (label: string) => {
    return existingAccountGrowth.heatmapQuadrants.find(q => q.label === label);
  };

  const growthChampions = findQuadrant('Growth Champions');
  const battlegroundAccounts = findQuadrant('Battleground Accounts');
  const maintenanceZone = findQuadrant('Maintenance Zone');
  const retentionCritical = findQuadrant('Retention Critical');

  const handleExportPdf = () => {
    const doc = new jsPDF();
    let y = 20;
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const contentWidth = pageWidth - margin * 2;

    // Helper function to add text with auto-wrapping
    const addText = (text: string, fontSize: number = 10, isBold: boolean = false, color: [number, number, number] = [0, 0, 0]) => {
        doc.setFontSize(fontSize);
        doc.setFont("helvetica", isBold ? "bold" : "normal");
        doc.setTextColor(color[0], color[1], color[2]);
        
        const lines = doc.splitTextToSize(text, contentWidth);
        if (y + lines.length * fontSize * 0.5 > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = 20;
        }
        doc.text(lines, margin, y);
        y += lines.length * fontSize * 0.45 + 2;
    };

    const addSpace = (amount: number = 5) => {
        y += amount;
    }

    // Title
    addText("ABM Genesis Strategic Plan", 24, true, [79, 70, 229]); // Indigo
    addSpace(10);
    addText(`Generated on: ${new Date().toLocaleDateString()}`, 10, false, [100, 100, 100]);
    addSpace(15);

    // 1. Account Selection
    addText("1. Account Selection Strategy", 16, true, [79, 70, 229]);
    addSpace(5);
    
    addText("Suggested Target Accounts:", 12, true);
    addText(suggestedAccounts.join(", "));
    addSpace(5);

    addText("Industry Pain Points:", 12, true);
    industryPainPoints.forEach(p => {
        addText(`• ${p.name}: ${p.description}`);
    });
    addSpace(10);

    // Net New Business
    addText("Net New Business Strategy", 14, true);
    addSpace();
    addText("Financial Metrics:", 11, true);
    addText(`Target ACV: ${netNewBusiness.financialMetrics.targetACV}`);
    addText(`Target TAM: ${netNewBusiness.financialMetrics.targetTAM}`);
    addText(`Payback Period: ${netNewBusiness.financialMetrics.paybackPeriod}`);
    addText(`CLV Projection: ${netNewBusiness.financialMetrics.clvProjection.finalResult}`);
    addSpace(5);

    addText("FIRE Framework:", 11, true);
    addText(`Fit: ${netNewBusiness.fireFramework.fit}`);
    addText(`Intent: ${netNewBusiness.fireFramework.intent}`);
    addText(`Relationship: ${netNewBusiness.fireFramework.relationship}`);
    addText(`Engagement: ${netNewBusiness.fireFramework.engagement}`);
    addSpace(10);

    // Existing Growth
    addText("Existing Account Growth Strategy", 14, true);
    addSpace();
    addText("Heatmap Actions:", 11, true);
    existingAccountGrowth.heatmapQuadrants.forEach(q => {
        addText(`• ${q.label} (${q.quadrantName}): ${q.actionItems}`);
    });
    addSpace(10);

    // 2. Dossiers
    addText("2. Account Dossiers", 16, true, [79, 70, 229]);
    addSpace(5);
    plan.accountDossiers.forEach(d => {
        addText(d.accountName, 12, true);
        d.details.forEach(det => {
            addText(`${det.point}: ${det.description}`);
        });
        addSpace(5);
    });
    addSpace(10);

    // 3. ABM Planning
    addText("3. ABM Planning Models", 16, true, [79, 70, 229]);
    addSpace(5);
    const models = [
        { title: "1:1", data: plan.abmPlanning.oneToOne },
        { title: "1:Few", data: plan.abmPlanning.oneToFew },
        { title: "1:Many", data: plan.abmPlanning.oneToMany }
    ];
    
    models.forEach(m => {
        addText(m.title, 12, true);
        addText(m.data.description);
        addText(`Channels: ${m.data.targetChannels.join(', ')}`);
        addText(`Budget: ${m.data.budgetAllocation}`);
        addSpace(3);
    });
    addSpace(10);

    // 4. Team
    addText("4. Team & Stakeholders", 16, true, [79, 70, 229]);
    addSpace(5);
    addText("Team Roles:", 12, true);
    plan.abmTeam.abmTeamRoles.forEach(r => {
        addText(`• ${r.role}: ${r.responsibilities}`);
    });
    addSpace(5);
    addText("Stakeholders:", 12, true);
    plan.abmTeam.stakeholderEngagement.forEach(s => {
        addText(`• ${s.stakeholder} (${s.engagementFormat}): ${s.commonGoals}`);
    });
    addSpace(10);

    // 5. Content
    addText("5. Content Prompts", 16, true, [79, 70, 229]);
    addSpace(5);
    const prompts = [
        { name: "Email", list: plan.contentPrompts.emailPrompts },
        { name: "LinkedIn Ads", list: plan.contentPrompts.linkedInAdPrompts },
        { name: "Competitive Displacement", list: plan.contentPrompts.competitiveDisplacementPrompts }
    ];
    prompts.forEach(p => {
        addText(`${p.name}:`, 11, true);
        p.list.slice(0, 3).forEach(item => addText(`- ${item}`));
        addSpace(2);
    });

    doc.save("abm-genesis-plan.pdf");
  };

  const sections = [
    {
      title: 'Account Selection Strategy',
      icon: <UserGroupIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-8">
          {/* Suggested Accounts and Pain Points */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">Suggested Target Accounts</h3>
              <div className="flex flex-wrap gap-2">
                {suggestedAccounts.map((acc) => (
                  <span key={acc} className="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">{acc}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">Industry Pain Points</h3>
              <ul className="space-y-2">
                {industryPainPoints.map((c, i) => <li key={i}><strong className="text-gray-300">{c.name}:</strong> <span className="text-gray-400">{c.description}</span></li>)}
              </ul>
            </div>
          </div>
          
          {/* Net New Business */}
          <div className="pt-6 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Net New Business Strategy</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Financial Metrics for New Acquisition</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/50 p-3 rounded-lg"><strong className="text-gray-300 block">Target ACV:</strong> {netNewBusiness.financialMetrics.targetACV}</div>
                    <div className="bg-gray-800/50 p-3 rounded-lg"><strong className="text-gray-300 block">Target TAM:</strong> {netNewBusiness.financialMetrics.targetTAM}</div>
                    <div className="bg-gray-800/50 p-3 rounded-lg"><strong className="text-gray-300 block">Payback Period:</strong> {netNewBusiness.financialMetrics.paybackPeriod}</div>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg mt-4 border border-gray-700">
                    <h4 className="font-semibold text-gray-300 mb-2">Customer Lifetime Value (CLV) Projection</h4>
                    <div className="text-gray-400 space-y-3 text-sm">
                        <p>{netNewBusiness.financialMetrics.clvProjection.calculationDescription}</p>
                        <pre className="bg-gray-900 p-3 rounded-md text-sm text-cyan-300 whitespace-pre-wrap font-mono">{netNewBusiness.financialMetrics.clvProjection.exampleCalculation}</pre>
                        <p className="font-bold text-gray-200">{netNewBusiness.financialMetrics.clvProjection.finalResult}</p>
                    </div>
                </div>
              </div>
               <div>
                 <h3 className="text-xl font-semibold text-indigo-400 mb-3">Beyond Financial Metrics - Qualification</h3>
                 <ul className="space-y-3">
                   {netNewBusiness.qualificationCriteria.map((c, i) => <li key={i}><strong className="text-gray-300">{c.name}:</strong> <span className="text-gray-400">{c.description}</span></li>)}
                 </ul>
               </div>
               <div>
                 <h3 className="text-xl font-semibold text-indigo-400 mb-3">FIRE Framework Implementation</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800/50 p-4 rounded-lg"><strong className="text-gray-300 block mb-1">Fit:</strong> {netNewBusiness.fireFramework.fit}</div>
                    <div className="bg-gray-800/50 p-4 rounded-lg"><strong className="text-gray-300 block mb-1">Intent:</strong> {netNewBusiness.fireFramework.intent}</div>
                    <div className="bg-gray-800/50 p-4 rounded-lg"><strong className="text-gray-300 block mb-1">Relationship:</strong> {netNewBusiness.fireFramework.relationship}</div>
                    <div className="bg-gray-800/50 p-4 rounded-lg"><strong className="text-gray-300 block mb-1">Engagement:</strong> {netNewBusiness.fireFramework.engagement}</div>
                 </div>
               </div>
            </div>
          </div>
          
          {/* Existing Account Growth */}
          <div className="pt-6 border-t border-gray-700">
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Existing Account Growth Strategy</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Expansion Potential Factors</h3>
                <ul className="space-y-3">
                  {existingAccountGrowth.expansionPotentialFactors.map((f, i) => <li key={i} className="bg-gray-800/50 p-3 rounded-lg"><strong className="text-gray-300">{f.name} ({f.weightage})</strong><p className="text-gray-400 text-sm">{f.description}</p></li>)}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-3">Competitive Threat Factors</h3>
                 <ul className="space-y-3">
                  {existingAccountGrowth.competitiveThreatFactors.map((f, i) => <li key={i} className="bg-gray-800/50 p-3 rounded-lg"><strong className="text-gray-300">{f.name} ({f.weightage})</strong><p className="text-gray-400 text-sm">{f.description}</p></li>)}
                </ul>
              </div>
            </div>
            <div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4 text-center">Account Growth Heatmap</h3>
                <div className="relative p-4 pt-10 pl-12">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 flex items-center gap-2 font-semibold text-gray-400">Expansion Potential <ArrowTrendingUpIcon className="w-4 h-4 rotate-90" /></div>
                  <div className="absolute -bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-2 font-semibold text-gray-400">Competitive Threat <ArrowTrendingUpIcon className="w-4 h-4"/></div>
                   <div className="absolute top-0 left-12 font-medium text-gray-500">Low</div>
                   <div className="absolute top-0 right-4 font-medium text-gray-500">High</div>
                   <div className="absolute top-10 right-0 -rotate-90 font-medium text-gray-500 origin-bottom-right">Low</div>
                   <div className="absolute bottom-4 right-0 -rotate-90 font-medium text-gray-500 origin-bottom-right">High</div>

                  <div className="grid grid-cols-2 grid-rows-2 gap-4 border-l border-t border-gray-700/50">
                    {renderQuadrant(growthChampions, 'bg-green-500/10', <ArrowTrendingUpIcon className="w-6 h-6"/>)}
                    {renderQuadrant(battlegroundAccounts, 'bg-red-500/10', <FireIcon className="w-6 h-6"/>)}
                    {renderQuadrant(maintenanceZone, 'bg-blue-500/10', <ScaleIcon className="w-6 h-6"/>)}
                    {renderQuadrant(retentionCritical, 'bg-yellow-500/10', <ShieldExclamationIcon className="w-6 h-6"/>)}
                  </div>
                </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Account Dossiers',
      icon: <DocumentTextIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          {plan.accountDossiers.map((dossier, i) => (
            <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-indigo-400 mb-3">{dossier.accountName}</h3>
               <div className="space-y-3">
                {dossier.details.map((detail, j) => (
                  <div key={j}>
                    <strong className="block text-gray-300">{detail.point}</strong>
                    <p className="text-gray-400">{detail.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    {
      title: 'ABM Planning',
      icon: <ChartBarIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          {renderDeploymentModel("1:1 (One-to-One)", plan.abmPlanning.oneToOne)}
          {renderDeploymentModel("1:Few (One-to-Few)", plan.abmPlanning.oneToFew)}
          {renderDeploymentModel("1:Many (One-to-Many)", plan.abmPlanning.oneToMany)}
        </div>
      )
    },
    {
      title: 'ABM Team & Stakeholders',
      icon: <UsersIcon className="w-6 h-6" />,
      content: (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">ABM Team Roles</h3>
            <div className="space-y-4">
              {plan.abmTeam.abmTeamRoles.map((role, i) => (
                <div key={i}><strong className="block text-gray-300">{role.role}</strong><p className="text-gray-400">{role.responsibilities}</p></div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-3">Stakeholder Engagement</h3>
             <div className="space-y-4">
              {plan.abmTeam.stakeholderEngagement.map((stakeholder, i) => (
                <div key={i}>
                  <strong className="block text-gray-300">{stakeholder.stakeholder}</strong>
                  <p className="text-gray-400"><strong className="text-gray-300/80">Format:</strong> {stakeholder.engagementFormat}</p>
                  <p className="text-gray-400"><strong className="text-gray-300/80">Goals:</strong> {stakeholder.commonGoals}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      title: 'Content Generation Prompts',
      icon: <LightBulbIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">Email Prompts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.contentPrompts.emailPrompts.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">LinkedIn Ad Prompts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.contentPrompts.linkedInAdPrompts.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">Google Ad Prompts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.contentPrompts.googleAdPrompts.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">Direct Mail Prompts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.contentPrompts.directMailPrompts.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
           <div>
            <h3 className="text-lg font-semibold text-indigo-400 mb-2">Competitive Displacement Prompts</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.contentPrompts.competitiveDisplacementPrompts.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'CXO Communication',
      icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />,
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Communication Strategy</h3>
            <p className="text-gray-400">{plan.cxoCommunication.communicationStrategy}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Key Metrics for CXOs</h3>
            <ul className="space-y-3">
              {plan.cxoCommunication.keyMetricsForCxo.map((m, i) => <li key={i}><strong className="text-gray-300">{m.metric}:</strong> <span className="text-gray-400">{m.description}</span></li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Reporting Cadence</h3>
            <p className="text-gray-400">{plan.cxoCommunication.reportingCadence}</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="mt-8 space-y-4">
      <div className="flex justify-end">
        <button
          onClick={handleExportPdf}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
        >
          <ArrowDownTrayIcon className="w-4 h-4" />
          Export Plan to PDF
        </button>
      </div>
      {sections.map((section, index) => (
        <SectionCard
          key={index}
          title={section.title}
          icon={section.icon}
          isOpen={openSection === index}
          onToggle={() => toggleSection(index)}
        >
          {section.content}
        </SectionCard>
      ))}
    </div>
  );
};