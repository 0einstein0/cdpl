import React, { useState } from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from "assets/logos/cdpl-official-logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	const [show, setShow] = useState(false);

	return (
		<nav className="navbar sticky-top navbar-expand-md">
			<div className="container">
				<AnchorLink className="navbar-brand" to="/">
					<img src={logo} alt="cdpl-logo" id="logo" />
				</AnchorLink>
				<button
					className="navbar-toggler navbar-toggler-right"
					type="button"
					name="mobile-hamburger"
					aria-label="mobile-hamburger"
					onClick={() => setShow(!show)}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
				<div className={`collapse navbar-collapse ${show && "show"}`} id="venrup-nav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<AnchorLink to="/" className="nav-link active" aria-current="page">
								Home
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink to="#about" className="nav-link">
								About
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink to="#our-network" className="nav-link">
								Network
							</AnchorLink>
						</li>
						<li className="nav-item">
							<AnchorLink to="#our-partners" className="nav-link">
								Partners
							</AnchorLink>
						</li>

						<li className="nav-item">
							<AnchorLink to="/contact" className="nav-link">
								Contact Us
							</AnchorLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
