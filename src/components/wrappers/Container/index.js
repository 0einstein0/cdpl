import React from "react";

const Container = ({ small, children }) => {
	return (
		<div>
			<div
				className={small ? " col-md-10 col-lg-8 col-xl-5 mx-auto my-5" : "col-md-11 px-2 my-2 mx-5"}
			>
				{children}
			</div>
		</div>
	);
};

export default Container;
