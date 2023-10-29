import styles from "./Navbar.module.css";

const Navbar = ({ showPfp }) => {
	return (
		<nav className={styles.navbar}>
			<p>
				THE <span>PRODUCT</span> PLATFORM
			</p>
			{showPfp && <div className={styles.profile}></div>}
		</nav>
	);
};

export default Navbar;
