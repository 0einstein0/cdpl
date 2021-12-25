import * as styles from "./team-block.module.scss";

import React from "react";
const TeamBlock = ({ portrait, name, designation }) => {
	return (
		<div className="col">
			<img src={portrait} alt={""} className="img-fluid" />
			<h5 className="mt-3 mb-0">{name}</h5>
			<p className={styles.textDesig}>{designation}</p>
		</div>
	);
};

export default TeamBlock;
