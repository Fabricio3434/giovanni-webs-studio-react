export function SubmitButton({ disabled }) {
  return (
    <button type="submit" className="contact-form__submit"  disabled={disabled}>
      Enviar consulta →
    </button>
  );
}