import React from "react";
import * as styles from "./partner.module.scss";

const PartnerBlock = ({ logo }) => {
	return (
		<div className="col">
			<img src={logo} alt={""} className="img-fluid " className={styles.partnerImg} />
		</div>
	);
};

export default PartnerBlock;
