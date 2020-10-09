import React, { useState, useEffect } from "react";

// Colabs
import ColabOne from "../ColabOne/ColabOne";
import ColabTwo from "../ColabTwo/ColabTwo";
import ColabThree from "../ColabThree/ColabThree";
import ColabFour from "../ColabFour/ColabFour";

function Colabs(props) {
	return (
		<div>
			<ColabOne />
			<ColabTwo />
			<ColabThree />
			<ColabFour />
		</div>
	);
}

export default Colabs;
