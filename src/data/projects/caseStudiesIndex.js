import caseStudiesWebDev from "./WebDeveloper/caseStudiesWebDev.json";

export const allCaseStudies = [...caseStudiesWebDev];

export function getCaseStudyById(id) {
  return allCaseStudies.find((caseStudy) => caseStudy.id === id);
}