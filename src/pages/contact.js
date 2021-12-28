import React from "react";
import { Layout, Container } from "components/wrappers";
import SectionTitle from "components/shared/SectionTitle";
import ContactForm from "components/utility/ContactForm";
import { content } from "contents/contact";

const Contact = () => {
	return (
		<Layout pageTitle={content.pageTitle}>
			<Container small>
				<div className="px-4">
					<SectionTitle title={content.formTitle} />
					<p>{content.description}</p>
				</div>

				<ContactForm />
			</Container>
		</Layout>
	);
};

export default Contact;
