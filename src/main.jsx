import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Greeting from "./greeting.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Greeting />
	</StrictMode>
);
