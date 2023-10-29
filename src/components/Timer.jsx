import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = ({ onExpire }) => {
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(10);
	const [hasExpired, setHasExpired] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			if (hours === 0 && minutes === 0 && seconds === 0) {
				// setHasExpired(true);
				clearInterval(interval);
				onExpire(hasExpired);
			} else if (seconds === 0) {
				if (minutes === 0) {
					setHours(hours - 1);
					setMinutes(59);
				} else {
					setMinutes(minutes - 1);
				}
				setSeconds(59);
			} else {
				setSeconds(seconds - 1);
			}
		}, 1000);

		return () => clearInterval(interval);
	}, [hours, minutes, seconds]);

	return (
		<div className={styles.container}>
			<div>
				<h4>{hours < 10 ? `0${hours}` : hours}</h4>
				<p>hours</p>
			</div>
			<span>:</span>
			<div>
				<h4>{minutes < 10 ? `0${minutes}` : minutes}</h4>
				<p>minutes</p>
			</div>
			<span>:</span>
			<div>
				<h4>{seconds < 10 ? `0${seconds}` : seconds}</h4>
				<p>seconds</p>
			</div>
		</div>
	);
};

export default Timer;
