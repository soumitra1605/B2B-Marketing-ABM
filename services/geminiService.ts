
import { GoogleGenAI, Type } from "@google/genai";
import { AbmPlan } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const generateSchema = (domain: string) => ({
  type: Type.OBJECT,
  properties: {
    accountSelection: {
      type: Type.OBJECT,
      properties: {
        industryPainPoints: {
          type: Type.ARRAY,
          description: "Industry pain points relevant to the specific business domain. Formerly 'Selection Criteria'.",
          items: {
            type: Type.OBJECT,
            properties: { name: { type: Type.STRING }, description: { type: Type.STRING } },
            required: ['name', 'description']
          },
        },
        netNewBusiness: {
          type: Type.OBJECT,
          description: "Criteria for acquiring new business accounts.",
          properties: {
            financialMetrics: {
              type: Type.OBJECT,
              properties: {
                targetACV: { type: Type.STRING },
                targetTAM: { type: Type.STRING },
                clvProjection: {
                  type: Type.OBJECT,
                  properties: {
                    calculationDescription: { type: Type.STRING },
                    exampleCalculation: { type: Type.STRING },
                    finalResult: { type: Type.STRING },
                  },
                  required: ['calculationDescription', 'exampleCalculation', 'finalResult']
                },
                paybackPeriod: { type: Type.STRING },
              },
              required: ['targetACV', 'targetTAM', 'clvProjection', 'paybackPeriod']
            },
            qualificationCriteria: {
              type: Type.ARRAY,
              description: "Non-financial metrics for new account qualification.",
              items: {
                type: Type.OBJECT,
                properties: { name: { type: Type.STRING }, description: { type: Type.STRING } },
                required: ['name', 'description']
              }
            },
            fireFramework: {
              type: Type.OBJECT,
              properties: {
                fit: { type: Type.STRING },
                intent: { type: Type.STRING },
                relationship: { type: Type.STRING },
                engagement: { type: Type.STRING },
              },
              required: ['fit', 'intent', 'relationship', 'engagement']
            },
          },
          required: ['financialMetrics', 'qualificationCriteria', 'fireFramework']
        },
        existingAccountGrowth: {
          type: Type.OBJECT,
          description: "Criteria for expanding business within existing accounts.",
          properties: {
            expansionPotentialFactors: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: { name: { type: Type.STRING }, description: { type: Type.STRING }, weightage: { type: Type.STRING } },
                required: ['name', 'description', 'weightage']
              }
            },
            competitiveThreatFactors: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: { name: { type: Type.STRING }, description: { type: Type.STRING }, weightage: { type: Type.STRING } },
                required: ['name', 'description', 'weightage']
              }
            },
            heatmapQuadrants: {
              type: Type.ARRAY,
              description: "A 2x2 matrix categorizing existing accounts.",
              items: {
                type: Type.OBJECT,
                properties: {
                  quadrantName: { type: Type.STRING },
                  label: { type: Type.STRING },
                  actionItems: { type: Type.STRING }
                },
                required: ['quadrantName', 'label', 'actionItems']
              }
            }
          },
          required: ['expansionPotentialFactors', 'competitiveThreatFactors', 'heatmapQuadrants']
        },
        suggestedAccounts: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ['industryPainPoints', 'netNewBusiness', 'existingAccountGrowth', 'suggestedAccounts']
    },
    accountDossiers: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          accountName: { type: Type.STRING, description: "The name of the target account." },
          details: {
            type: Type.ARRAY,
            description: `A list of detailed analysis points. MUST include 'Last 4 Quarters Financial Summary' and 'Major ${domain} Vendors', plus other points relevant to the domain and industry.`,
            items: {
              type: Type.OBJECT,
              properties: {
                point: { type: Type.STRING, description: "The title of the analysis point (e.g., 'Financial Health', 'Current Tech Stack')." },
                description: { type: Type.STRING, description: "The detailed description for the analysis point." },
              },
              required: ['point', 'description'],
            }
          }
        },
        required: ['accountName', 'details']
      },
    },
    abmPlanning: {
      type: Type.OBJECT,
      properties: {
        oneToOne: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            targetChannels: { type: Type.ARRAY, items: { type: Type.STRING } },
            budgetAllocation: { type: Type.STRING },
            metrics: {
              type: Type.OBJECT,
              properties: { revenue: { type: Type.STRING }, reputation: { type: Type.STRING }, relationship: { type: Type.STRING } },
              required: ['revenue', 'reputation', 'relationship']
            },
          },
          required: ['description', 'targetChannels', 'budgetAllocation', 'metrics']
        },
        oneToFew: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            targetChannels: { type: Type.ARRAY, items: { type: Type.STRING } },
            budgetAllocation: { type: Type.STRING },
            metrics: {
              type: Type.OBJECT,
              properties: { revenue: { type: Type.STRING }, reputation: { type: Type.STRING }, relationship: { type: Type.STRING } },
              required: ['revenue', 'reputation', 'relationship']
            },
          },
          required: ['description', 'targetChannels', 'budgetAllocation', 'metrics']
        },
        oneToMany: {
          type: Type.OBJECT,
          properties: {
            description: { type: Type.STRING },
            targetChannels: { type: Type.ARRAY, items: { type: Type.STRING } },
            budgetAllocation: { type: Type.STRING },
            metrics: {
              type: Type.OBJECT,
              properties: { revenue: { type: Type.STRING }, reputation: { type: Type.STRING }, relationship: { type: Type.STRING } },
               required: ['revenue', 'reputation', 'relationship']
            },
          },
          required: ['description', 'targetChannels', 'budgetAllocation', 'metrics']
        },
      },
      required: ['oneToOne', 'oneToFew', 'oneToMany']
    },
    abmTeam: {
      type: Type.OBJECT,
      properties: {
        abmTeamRoles: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: { role: { type: Type.STRING }, responsibilities: { type: Type.STRING } },
            required: ['role', 'responsibilities']
          },
        },
        stakeholderEngagement: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: { stakeholder: { type: Type.STRING }, engagementFormat: { type: Type.STRING }, commonGoals: { type: Type.STRING } },
            required: ['stakeholder', 'engagementFormat', 'commonGoals']
          },
        },
      },
      required: ['abmTeamRoles', 'stakeholderEngagement']
    },
    contentPrompts: {
      type: Type.OBJECT,
      properties: {
        emailPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
        linkedInAdPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
        googleAdPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
        directMailPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
        competitiveDisplacementPrompts: { type: Type.ARRAY, items: { type: Type.STRING } },
      },
      required: ['emailPrompts', 'linkedInAdPrompts', 'googleAdPrompts', 'directMailPrompts', 'competitiveDisplacementPrompts']
    },
    cxoCommunication: {
      type: Type.OBJECT,
      properties: {
        communicationStrategy: { type: Type.STRING },
        keyMetricsForCxo: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: { metric: { type: Type.STRING }, description: { type: Type.STRING } },
            required: ['metric', 'description']
          },
        },
        reportingCadence: { type: Type.STRING },
      },
      required: ['communicationStrategy', 'keyMetricsForCxo', 'reportingCadence']
    },
  },
  required: ['accountSelection', 'accountDossiers', 'abmPlanning', 'abmTeam', 'contentPrompts', 'cxoCommunication']
});


export const generateAbmPlan = async (domain: string, industry: string): Promise<AbmPlan> => {
  const prompt = `
    As a world-class ABM strategist, create a comprehensive, detailed, and actionable Account-Based Marketing (ABM) plan.
    The company providing the solution is in the **${domain}** business domain.
    The target market is the **${industry}** industry.
    Generate the plan with specific, realistic, and insightful details for each section. The plan must cover all aspects requested in the JSON schema. For 'suggestedAccounts', invent 3 plausible company names that would exist in the target industry.

    **For the 'accountSelection' section, you must adhere to the following structure:**

    1.  **industryPainPoints**: This was previously "Selection Criteria". Describe pain points relevant to the ${industry} industry that your ${domain} solution can solve.

    2.  **netNewBusiness**:
        *   **financialMetrics**:
            *   targetACV: State '$300K-$500K initial deals with 3-5 year expansion potential to $1M+'.
            *   targetTAM: State 'Companies with $1B+ revenue and procurement spend exceeding $500M annually'.
            *   clvProjection: Provide a detailed breakdown.
                *   calculationDescription: Explain the steps: 'Step 1: Calculate Expected Annual Revenue (Formula: Expected ACV = Industry Benchmark × Company Size Multiplier × Procurement Spend Factor). Step 2: Apply Retention & Expansion Proxies (Use industry benchmarks adjusted for risk factors). Step 3: Calculate 3-Year Projected CLV (Simple Formula: CLV = Year 1 Revenue × Retention Rate × (1 + Expansion Rate)^Years).'.
                *   exampleCalculation: Provide a concrete example with imaginary numbers, following the steps, like: 'Base Industry ACV: $400K... Expected ACV = $400K × 1.2 × 1.1 = $528K... Year 1: $528K × 0.88 = $465K... Total 3-Year CLV: $1,474K'.
                *   finalResult: State the final projected CLV: 'This prospect has a projected CLV of $1.47M over 3 years before any direct interaction.'.
            *   paybackPeriod: State 'Target 18-24 months given longer sales cycles and relationship building requirements'.
        *   **qualificationCriteria**: List and describe the following criteria: 'Digital Transformation Readiness', 'Competitive Displacement Opportunities', 'Regulatory Compliance Drivers', 'M&A Activity Indicators', 'Executive Leadership Changes', and 'Buyer Journey Mapping Overlay'.
        *   **fireFramework**: Define Fit, Intent, Relationship, and Engagement for acquiring new accounts based on the FIRE framework:
            *   Fit: Generate a 'Fit' description customized for the ${domain} and ${industry}. It should describe ideal customer attributes like operations scale, specific requirements, and business structure.
            *   Intent: 'Active RFP processes, procurement conference attendance, transformation content consumption'.
            *   Relationship: "Alumni networks from existing clients of our company (invent a plausible fictional company name relevant to the ${domain} domain), industry association connections".
            *   Engagement: 'Website behavior analysis, content download patterns, webinar participation rates'.

    3.  **existingAccountGrowth**:
        *   **expansionPotentialFactors**: List all 5 factors with their exact weightages: 'Whitespace Analysis (30%)', 'Category Depth (20%)', 'Adjacent Tech Stack Integration (15%)', 'Share of Wallet (25%)', 'Organization Maturity (10%)'.
        *   **competitiveThreatFactors**: List all 4 factors with their exact weightages: 'Renewal Risk Indicators (20%)', 'Dissatisfaction Signals (25%)', 'Competitor Engagements (30%)', 'Pricing or TCO Sensitivity (25%)'.
        *   **heatmapQuadrants**: Define the 4 quadrants exactly as specified below:
            *   Quadrant 1: quadrantName 'High Potential / High Threat', label 'Battleground Accounts', actionItems 'Double down on CXO engagement, roadmap showcases, ROI defence, and rapid expansion'.
            *   Quadrant 2: quadrantName 'Low Threat / High Potential', label 'Growth Champions', actionItems 'Prioritize expansion campaigns, module upsell, executive business reviews'.
            *   Quadrant 3: quadrantName 'High Threat / Low Potential', label 'Retention Critical', actionItems 'Monitor health scores, pre-empt churn risk, offer value reinforcement content'.
            *   Quadrant 4: quadrantName 'Low Threat / Low Potential', label 'Maintenance Zone', actionItems 'Minimal investment; maintain with automated touchpoints and basic advocacy programs'.

    **Crucially, for the 'accountDossiers' section (this remains the same):**
    1. For each suggested account, you MUST generate a list of detailed analysis 'points'.
    2. **Two of these points must ALWAYS be:**
        - A point titled "Last 4 Quarters Financial Summary" with a description summarizing their P&L, cash flow, and balance sheet performance over the last year. Use plausible but fictional financial data.
        - A point titled "Major ${domain} Vendors" with a description listing their current major vendors or service providers relevant to the ${domain} domain.
    3. **In addition to the two mandatory points above**, generate another 3-4 points that are highly relevant and specific to the intersection of the '${domain}' business domain and the '${industry}' target industry.

    Flesh out every single field with expert-level knowledge. The response must be a valid JSON object that strictly adheres to the provided schema.
  `;
  
  const schema = generateSchema(domain);

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: 'application/json',
      responseSchema: schema,
    },
  });

  const jsonText = response.text;
  const parsedPlan: AbmPlan = JSON.parse(jsonText);
  return parsedPlan;
};
