import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const router = createBrowserRouter(
	createRoutesFromElements(<Route />)
);

const App = () => {
	const pageTitle = `Become a React Dev`;
	const pageSubtitle = `Find the React job that fits your skills and
						needs`;
	return (
		<>
			<Navbar />
			<Hero title={pageTitle} subtitle={pageSubtitle} />
			<HomeCards />
			<JobListings />
			<ViewAllJobs />
		</>
	);
};

export default App;
