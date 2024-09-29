import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";
import Section from "./Sections";

export default function Examples() {
  const [selectedTopic, selectSelectedTopic] = useState();
  //let tabButton = "Please select some button";
  function handleclick(message) {
    selectSelectedTopic(message);
  }
  return (
    <>
      <Section title="Examples" id="examples">
        {/* <h2>Examples</h2> */}
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onclick={() => handleclick("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onclick={() => handleclick("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onclick={() => handleclick("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onclick={() => handleclick("state")}
          >
            State
          </TabButton>
        </menu>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
      </Section>
    </>
  );
}
