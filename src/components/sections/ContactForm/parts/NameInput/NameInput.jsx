export function NameInput({ value, onChange }) {
  return (
    <div className="contact-form__section contact-form__section--name">
      <label className="contact-form__label" htmlFor="name">
        ¿Cómo te gustaría que te llame?
      </label>
      <input
        id="name"
        type="text"
        className="contact-form__input"
        placeholder="Tu nombre"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}