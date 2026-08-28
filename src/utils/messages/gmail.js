export function buildEmailParams(formData) {
  const { name, service, stage, projectDetails, contactChoice, customContact } =
    formData;

  return {
    from_name: name,
    service: service,
    stage: stage,
    message: projectDetails,
    contact_detail:
      contactChoice === "custom"
        ? customContact
        : "El mismo gmail desde el que se envía este mensaje",
  };
}
