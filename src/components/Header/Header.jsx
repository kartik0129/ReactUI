import reactImg from "../../assets/react-core-concepts.png";
import './Header.css'

const readDescriptions = ["Core", "Important", "Complex"];
function randomValue() {
  const integer = Math.floor(Math.random() * 3);
  return readDescriptions[integer];
}

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomValue()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
