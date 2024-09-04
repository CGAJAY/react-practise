import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";

const App = () => {
	const pageTitle = `Become a React Dev`;
	const pageSubtitle = `Find the React job that fits your skills and
						needs`;
	return (
		<>
			<Navbar />
			<Hero title={pageTitle} subtitle={pageSubtitle} />
			<HomeCards />
		</>
	);
};

export default App;
