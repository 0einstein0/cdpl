import React from "react";

const Container = ({ small, children }) => {
	return (
		<div>
			<div className={small ? " col-md-10 col-lg-8 col-xl-5 mx-auto my-5" : "col-md-10 mx-auto"}>
				{children}
			</div>
		</div>
	);
};

export default Container;
