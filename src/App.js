import "../src/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DigitalTransformationPage from "./pages/DigitalTransformationPage";
import EcommerceDevelopmentPage from "./pages/EcommerceDevelopmentPage";
import CustomSoftwarePage from "./pages/CustomSoftwarePage";
import WebsiteDesignPage from "./pages/WebsiteDesignPage";
import WorkPage from "./pages/WorkPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="/digital-transformation"
					element={<DigitalTransformationPage />}
				/>
				<Route
					path="/ecommerce-development"
					element={<EcommerceDevelopmentPage />}
				/>
				<Route
					path="/custom-software"
					element={<CustomSoftwarePage />}
				/>
				<Route
					path="/website-design-development"
					element={<WebsiteDesignPage />}
				/>
				<Route
					path="/work"
					element={<WorkPage />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
