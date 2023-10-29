import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Notifier from "../components/Notifier";
import Timer from "../components/Timer";
import Launch from "../components/Launch";

const LaunchPage = () => {
	const [isTimerVisible, setIsTimerVisible] = useState(false);
	const [isLaunched, setIsLaunched] = useState(false);

	console.log(isLaunched);

	setTimeout(() => {
		setIsTimerVisible(true);
	}, 3000);

	const handleExpiration = (hasExpired) => {
		console.log(hasExpired);
		setIsLaunched(true);
		console.log(isLaunched);
	};

	console.log(isLaunched);
	return (
		<>
			<Navbar />
			{!isLaunched && (
				<main>
					<Header />
					{isTimerVisible && <Timer onExpire={handleExpiration} />}
					<Notifier />
				</main>
			)}
			{isLaunched && <Launch />}
		</>
	);
};

export default LaunchPage;
