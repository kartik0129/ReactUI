import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [selectedTopic, selectSelectedTopic] = useState();
  //let tabButton = "Please select some button";
  function handleclick(message) {
    selectSelectedTopic(message);
  }
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
            <TabButton onclick={() => handleclick("components")}>
              Components
            </TabButton>
            <TabButton onclick={() => handleclick("jsx")}>JSX</TabButton>
            <TabButton onclick={() => handleclick("props")}>Props</TabButton>
            <TabButton onclick={() => handleclick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            {!selectedTopic ? <p>Please select a topic</p> : null}

            {selectedTopic ? (
              <div>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
              </div>
            ) : null}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
