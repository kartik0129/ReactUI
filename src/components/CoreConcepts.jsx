import { CORE_CONCEPTS } from "../data";
import CoreConcept from "../components/CoreConcept";
export default function CoreConcepts() {
  return (
    <>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          {CORE_CONCEPTS.map((coreItem) => {
            return (
              <CoreConcept
                img={coreItem.image}
                title={coreItem.title}
                desc={coreItem.description}
                key={coreItem.title}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
}
