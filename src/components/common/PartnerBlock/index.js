import React from "react";
const PartnerBlock = ({ logo }) => {
	return (
		<div className="col">
			<img src={logo} alt={""} className="img-fluid" />
		</div>
	);
};

export default PartnerBlock;
