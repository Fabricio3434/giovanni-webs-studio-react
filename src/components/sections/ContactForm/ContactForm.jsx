import { useState } from "react";

import { FormHeader } from "./parts/FormHeader/FormHeader.jsx";
import { ServiceSelector } from "./parts/ServiceSelector/ServiceSelector.jsx";
import { ProjectDetails } from "./parts/ProjectDetails/ProjectDetails.jsx";
import { StageSelector } from "./parts/StageSelector/StageSelector.jsx";
import { NameInput } from "./parts/NameInput/NameInput.jsx";
import { ContactMethodSelector } from "./parts/ContactMethodSelector/ContactMethodSelector.jsx";
import { SubmitButton } from "./parts/SubmitButton/SubmitButton.jsx";

const initialFormData = {
  service: null,
  projectDetails: "",
  stage: null,
  name: "",
  contactMethod: null,
  contactChoice: "default",
  customContact: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);

  function updateField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSelectContactMethod(socialName) {
    setFormData((prev) => ({
      ...prev,
      contactMethod: socialName,
      contactChoice: "default",
      customContact: "",
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: armar mensaje de WhatsApp o enviar con EmailJS según formData.contactMethod
    console.log(formData);

    setFormData(initialFormData); // resetea todo el formulario
  }

  return (
    <section className="contact-form reveal-on-scroll">
      <form onSubmit={handleSubmit}>
        <FormHeader />

        <ServiceSelector
          selectedService={formData.service}
          onSelect={(value) => updateField("service", value)}
        />

        <ProjectDetails
          value={formData.projectDetails}
          onChange={(value) => updateField("projectDetails", value)}
        />

        <StageSelector
          selectedStage={formData.stage}
          onSelect={(value) => updateField("stage", value)}
        />

        <NameInput
          value={formData.name}
          onChange={(value) => updateField("name", value)}
        />

        <ContactMethodSelector
          selectedMethod={formData.contactMethod}
          contactChoice={formData.contactChoice}
          customContact={formData.customContact}
          onSelectMethod={handleSelectContactMethod}
          onSelectChoice={(value) => updateField("contactChoice", value)}
          onCustomChange={(value) => updateField("customContact", value)}
        />

        <SubmitButton />
      </form>
    </section>
  );
}
