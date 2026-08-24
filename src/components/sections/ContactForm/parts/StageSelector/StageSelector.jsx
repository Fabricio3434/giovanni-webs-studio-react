import { stages } from "../../../../../data/stage.js";

export function StageSelector({ selectedStage, onSelect }) {
  return (
    <div className="contact-form__section contact-form__section--stage">
      <p className="contact-form__label">¿En qué etapa está tu proyecto?</p>

      <div className="contact-form__options contact-form__options--stages">
        {stages.map((item) => (
          <button
            key={item.stage}
            type="button"
            className={`contact-form__option ${
              selectedStage === item.stage
                ? "contact-form__option--selected"
                : ""
            }`}
            onClick={() => onSelect(item.stage)}
          >
            {typeof item.icon === "function" && (
              <item.icon
                className="contact-form__option-icon"
                aria-hidden="true"
              />
            )}
            {item.stage}
          </button>
        ))}
      </div>
    </div>
  );
}
