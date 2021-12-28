import React from "react";
import * as styles from "./values.module.scss";

const CoreValuesBlock = ({ icon, title, midVal }) => {
	return (
		<div className={`text-center   ${midVal ? styles.midVal : ""} `}>
			<div className={styles.valIcon}>
				<img src={icon} alt="" className="img-fluid" />
			</div>
			<p className={styles.valText}>{title}</p>
		</div>
	);
};

export default CoreValuesBlock;
