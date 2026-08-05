import { Introduction } from "./Sections/Introduction/Introduction.jsx";
import { Approach } from "./Sections/Approach/Approach.jsx";
import { Highlights } from "./Sections/Highlights/Highlights.jsx";

export function AboutMe() {
  return (
    <main className="about-me__main container-wrapper">
      <h1 className="behind-the-study__title">
        Detrás de Giovanni Webs Studio
      </h1>

      <div className="about-me__wrapper">
        <Introduction />
        <Approach />
        <Highlights />
      </div>
    </main>
  );
}
