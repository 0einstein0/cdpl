import React from "react";
import * as styles from "./values.module.scss";

const CoreValuesBlock = ({ icon, title }) => {
	return (
		<div className="text-center mdiv">
			<div className={styles.valIcon}>
				<img src={icon} alt="" className="img-fluid" />
			</div>
			<h4>{title}</h4>
		</div>
	);
};

export default CoreValuesBlock;
