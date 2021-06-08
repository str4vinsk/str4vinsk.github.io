import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container } from "./styles";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqvgdjo");
  if (state.succeeded) {
    return <h2>Email sended!!</h2>;
  }
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          placeholder="Your e-mail..."
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea id="message" placeholder="Your message..." name="message" />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          SUBMIT
        </button>
      </form>
    </Container>
  );
}

export default ContactForm;
