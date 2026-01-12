import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Initialize i18n before rendering - this must be imported before App
import "./i18n/config";

createRoot(document.getElementById("root")!).render(<App />);
