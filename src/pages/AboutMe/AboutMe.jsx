import { Introduction } from "./Sections/Introduction/Introduction.jsx";
import { Approach } from "./Sections/Approach/Approach.jsx";
import { Highlights } from "./Sections/Highlights/Highlights.jsx";

export function AboutMe() {
  return (
    <div className="about-me__main container-wrapper">
      <h1 className="about-me__page-title">
        Detrás de <strong className="text-gradient">Lorium Studio</strong>
      </h1>

      <div className="about-me__wrapper">
        <Introduction />
        <Approach />
        <Highlights />
      </div>
    </div>
  );
}