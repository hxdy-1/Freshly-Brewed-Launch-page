import React, { useState } from "react";
import Navbar from "./Navbar";
import Arrow from "../utils/Arrow";

const Questions = () => {
	const [isPfpVisible, setIsPfpVisible] = useState(true);

	return (
		<>
			<Navbar showPfp={isPfpVisible} />
			<Arrow />
		</>
	);
};

export default Questions;
