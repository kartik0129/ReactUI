import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  function handleclick() {}
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              img={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              desc={CORE_CONCEPTS[0].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              desc={CORE_CONCEPTS[1].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              desc={CORE_CONCEPTS[2].description}
            />
            <CoreConcept
              img={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              desc={CORE_CONCEPTS[3].description}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={handleclick}>Components</TabButton>
            <TabButton onClick={handleclick}>JSX</TabButton>
            <TabButton onclick={handleclick}>Props</TabButton>
            <TabButton onclick={handleclick}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
