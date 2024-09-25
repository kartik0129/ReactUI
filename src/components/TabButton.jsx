export default function TabButton({ children,onclick }) {
    
    return (
        <li><button onClick={onclick}>{children}</button></li>
    );
}