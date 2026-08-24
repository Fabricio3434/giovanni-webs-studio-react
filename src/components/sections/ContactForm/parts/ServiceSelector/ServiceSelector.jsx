import { useState } from "react";
import { services } from "../../../../../data/services.js";

const MAX_VISIBLE_SERVICES = 6;

export function ServiceSelector({ selectedService, onSelect }) {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  const hasOverflow = services.length > MAX_VISIBLE_SERVICES;
  const visibleServices = hasOverflow
    ? services.slice(0, MAX_VISIBLE_SERVICES - 1)
    : services;
  const overflowServices = hasOverflow
    ? services.slice(MAX_VISIBLE_SERVICES - 1)
    : [];

  return (
    <div className="contact-form__section contact-form__section--services">
      <p className="contact-form__label">¿Qué servicio necesitás?</p>

      <div className="contact-form__options contact-form__options--services">
        {visibleServices.map((item) => (
          <button
            key={item.service}
            type="button"
            className={`contact-form__option ${
              selectedService === item.service
                ? "contact-form__option--selected"
                : ""
            }`}
            onClick={() => onSelect(item.service)}
          >
            {typeof item.icon === "function" && (
              <item.icon
                className="contact-form__option-icon"
                aria-hidden="true"
              />
            )}
            {item.service}
          </button>
        ))}

        {hasOverflow && (
          <button
            type="button"
            className="contact-form__option"
            onClick={() => setIsServicesModalOpen(true)}
          >
            Otro
          </button>
        )}
      </div>

      {/* TODO: modal con `overflowServices` cuando isServicesModalOpen sea true */}
    </div>
  );
}