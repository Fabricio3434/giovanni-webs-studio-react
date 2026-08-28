const WHATSAPP_NUMBER = "5493834368435"; // reemplazar con el número real

export function buildWhatsAppMessage(formData) {
  const {
    name,
    service,
    stage,
    projectDetails,
    contactMethod,
    contactChoice,
    customContact,
  } = formData;

  let message = `Hola! Soy ${name}.\n\n`;
  message += `Quiero consultar sobre: ${service}\n`;
  message += `Etapa del proyecto: ${stage}\n\n`;
  message += `${projectDetails}\n\n`;
  message += `Prefiero que me contacten por: ${contactMethod}\n`;

  if (contactChoice === "custom" && customContact) {
    message += `${contactMethod}: ${customContact}\n`;
  }

  return message;
}

export function getWhatsAppUrl(formData) {
  const message = buildWhatsAppMessage(formData);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
