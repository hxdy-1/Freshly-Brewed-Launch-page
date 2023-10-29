import React from "react";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<h1>
				<span></span> Launching New Module Soon!
			</h1>
			<p>
				Exciting things are in the works! We're currently{" "}
				<span>Crafting a new feature for you.</span> Keep an eye out for
				updates – We're working to make it available soon!
			</p>
			<h3>get ready for the reveal!</h3>
		</header>
	);
};

export default Header;
