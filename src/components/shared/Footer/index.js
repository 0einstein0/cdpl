import React from "react";
import { content } from "contents/home";
import { Container } from "components/wrappers";
import logo from "assets/logos/cdpl-official-logo.svg";
import { FooterBlock } from "components/common";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="container-fluid p-5">
				<Container>
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 justify-content-center">
						{/* Footer Column 1 */}
						<div className="col">
							<FooterBlock icon={logo} blurb={content.footer.column1.blurb} />
						</div>
						<div className="col">
							{/* Footer Column 2 */}
							<FooterBlock
								title={content.footer.column2.title}
								email={content.footer.column2.email}
								phone={content.footer.column2.phone}
							/>
						</div>
						<div className="col">
							{/* Footer Column 3 */}
							<FooterBlock
								title={content.footer.column3.title}
								blurb={content.footer.column3.blurb}
								btnText={content.footer.column3.buttonText}
							/>
						</div>
					</div>
				</Container>
			</div>
		</footer>
	);
};

export default Footer;
