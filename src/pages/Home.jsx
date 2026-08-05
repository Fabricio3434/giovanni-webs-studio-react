import { useState } from "react";

import { Hero } from "../components/sections/Hero/Hero.jsx";
import { Projects } from "../components/sections/Projects/Projects.jsx";
import { CaseStudy } from "../components/sections/CaseStudy/CaseStudyModal.jsx";
import { Contact } from "../components/sections/Contact/Contact.jsx";

import caseStudies from "../data/caseStudies.json";

export function Home() {
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState(null);

  const selectedCaseStudy = caseStudies.find(
    (caseStudy) => caseStudy.id === selectedCaseStudyId,
  );

  return (
    <>
      <main className="main container-wrapper">
        <Hero />
        <Projects onOpenCaseStudy={setSelectedCaseStudyId} />
        <Contact />
      </main>
      <CaseStudy
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudyId(null)}
      />
    </>
  );
}
