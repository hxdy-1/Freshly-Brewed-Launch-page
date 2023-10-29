import React, { useEffect, useState } from "react";
import styles from "./Notifier.module.css";
import LoadingSpinner from "../utils/LoadingSpinner";

const Notifier = () => {
	const [email, setEmail] = useState("");
	const [isValid, setIsValid] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleChange = (event) => {
		const newEmail = event.target.value;
		setEmail(newEmail);

		// Check if the email is in the right format
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		setIsValid(emailRegex.test(newEmail));
		// event.target.value = "";
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsSubmitted(true);
		setIsLoading(true);

		// Simulating a delay for checking the email format
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<>
			<p className={styles["text-info"]}>
				Be the first to know! Share your email and We'll notify you when
				it's live
			</p>
			<form className={styles.form} onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					placeholder="Please enter your email id"
				/>
				{isSubmitted && !isLoading && !isValid && <p>invalid email</p>}
				<button
					type="submit"
					disabled={isLoading || !email}
					className={email ? "" : styles["disabled-button"]}
				>
					{isLoading ? (
						<LoadingSpinner />
					) : isSubmitted ? (
						isValid ? (
							"✓"
						) : (
							"✗"
						)
					) : (
						"Notify me"
					)}
				</button>
			</form>
		</>
	);
};

export default Notifier;
