export default function TabButton({ children, onclick, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onclick}>
        {children}
      </button>
    </li>
  );
}
