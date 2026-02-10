
export interface SelectionCriterion {
  name: string;
  description: string;
}

// --- NEW TYPES FOR NET NEW BUSINESS ---
export interface FinancialMetricsNewAcquisition {
  targetACV: string;
  targetTAM: string;
  clvProjection: {
    calculationDescription: string;
    exampleCalculation: string;
    finalResult: string;
  };
  paybackPeriod: string;
}

export interface NonFinancialQualification {
  name: string;
  description: string;
}

export interface FireFramework {
  fit: string;
  intent: string;
  relationship: string;
  engagement: string;
}

export interface NetNewBusiness {
  financialMetrics: FinancialMetricsNewAcquisition;
  qualificationCriteria: NonFinancialQualification[];
  fireFramework: FireFramework;
}


// --- NEW TYPES FOR EXISTING ACCOUNT GROWTH ---
export interface WeightedFactor {
  name: string;
  description: string;
  weightage: string;
}

export interface HeatmapQuadrant {
  quadrantName: string;
  label: string;
  actionItems: string;
}

export interface ExistingAccountGrowth {
  expansionPotentialFactors: WeightedFactor[];
  competitiveThreatFactors: WeightedFactor[];
  heatmapQuadrants: HeatmapQuadrant[];
}


// --- UPDATED ACCOUNT SELECTION ---
export interface AccountSelection {
  industryPainPoints: SelectionCriterion[]; // Renamed from selectionCriteria
  netNewBusiness: NetNewBusiness;
  existingAccountGrowth: ExistingAccountGrowth;
  suggestedAccounts: string[];
}


export interface DossierDetail {
  point: string;
  description: string;
}

export interface AccountDossier {
  accountName: string;
  details: DossierDetail[];
}


export interface AbmDeploymentModel {
  description: string;
  targetChannels: string[];
  budgetAllocation: string;
  metrics: {
    revenue: string;
    reputation: string;
    relationship: string;
  };
}

export interface AbmPlanning {
  oneToOne: AbmDeploymentModel;
  oneToFew: AbmDeploymentModel;
  oneToMany: AbmDeploymentModel;
}

export interface TeamRole {
  role: string;
  responsibilities: string;
}

export interface StakeholderEngagement {
  stakeholder: string;
  engagementFormat: string;
  commonGoals: string;
}

export interface AbmTeam {
  abmTeamRoles: TeamRole[];
  stakeholderEngagement: StakeholderEngagement[];
}

export interface ContentPrompts {
  emailPrompts: string[];
  linkedInAdPrompts: string[];
  googleAdPrompts: string[];
  directMailPrompts: string[];
  competitiveDisplacementPrompts: string[];
}

export interface CxoCommunication {
  communicationStrategy: string;
  keyMetricsForCxo: {
    metric: string;
    description: string;
  }[];
  reportingCadence: string;
}

export interface AbmPlan {
  accountSelection: AccountSelection;
  accountDossiers: AccountDossier[];
  abmPlanning: AbmPlanning;
  abmTeam: AbmTeam;
  contentPrompts: ContentPrompts;
  cxoCommunication: CxoCommunication;
}
