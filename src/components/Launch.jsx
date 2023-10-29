import React, { useEffect } from "react";
import styles from "./Launch.module.css";
import { Link, useNavigate } from "react-router-dom";

const Launch = () => {
	const navigate = useNavigate();

	// automatically navigating to the "/questions" after 5000 milliseconds
	useEffect(() => {
		const delay = 5000;

		const navigateToQuestions = () => {
			navigate("/questions");
		};

		const timerId = setTimeout(navigateToQuestions, delay);

		return () => {
			clearTimeout(timerId);
		};
	}, [navigate]);

	return (
		<main className={styles.container}>
			<div className={styles["card-container"]}>
				<h1>We are Live Now!</h1>
				<p>
					Our new feature is now <span>Live and ready</span> for you
					to explore. Go ahead and give it a try
				</p>
				<button>
					<Link to="/questions">Get Started</Link>
				</button>
			</div>
		</main>
	);
};

export default Launch;
