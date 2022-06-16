import { Slide } from "./Slide";
import { Section1 } from "./Section1Home";
import { Section2 } from "./Section2Home";

function Home() {
  return (
    <>
      <section className="w-full h-height-slide">
        <Slide/>
      </section>

      <section className="pt-10 w-full border-t-2 border-orange-600 bg-section-1 bg-cover">
        <Section1/>
      </section>

      <section className="border-t-2 border-orange-600 w-full bg-section1 bg-cover">
        <Section2/>
      </section>
    </>
  );
}

export default Home;
