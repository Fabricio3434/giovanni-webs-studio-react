import { Hero } from "../components/sections/Hero/Hero.jsx";
import { Services } from "../components/sections/Services/Services.jsx";
import { Projects } from "../components/sections/Projects/Projects.jsx";
import { ContactForm } from "../components/sections/ContactForm/ContactForm.jsx";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <ContactForm />
    </>
  );
}
