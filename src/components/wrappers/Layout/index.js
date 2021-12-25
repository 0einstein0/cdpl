import React from "react";
import { Footer, Header } from "components/shared";

import "scss/main.scss";

const Layout = ({ pageTitle, children, footer }) => {
	return (
		<>
			<div className="layout">
				<Header />
				<div className="main-content">{children}</div>
				{footer ? <Footer /> : ""}
			</div>
		</>
	);
};

export default Layout;
