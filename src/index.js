import { createRoot } from "react-dom/client";
// ** The App component
import App from "./App";
// ** Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById("root"));

root.render(<App />);
