import React from "react";
import "scss/main.scss";
import { Layout, Container, Section } from "components/wrappers";
import { TeamBlock, PartnerBlock, CoreValuesBlock } from "components/common";
import { content } from "contents/home";
import { HeroHeading, SectionTitle } from "components/shared";
import ButtonPrimary from "components/common/ButtonPrimary";
import networkMap from "assets/images/distributors-network-map.png";
import truck from "assets/images/truck-mockup.png";

const IndexPage = () => {
	return (
		<Layout footer>
			{/* Hero */}
			<Section bgImg>
				<div className="hero pb-5">
					<Container>
						<HeroHeading
							title={
								<>
									Grow Your Business With Our <span className="clrText">Distribution</span> Network
								</>
							}
						/>
						<p>{content.hero.description}</p>
						<ButtonPrimary title={content.hero.buttonText} />
					</Container>
				</div>
			</Section>

			{/* About */}
			<Section id="about">
				<Container>
					<SectionTitle
						title={
							<>
								Who <span className="clrText">We</span> Are
							</>
						}
					/>
					<div className={"row"}>
						<div className="col-md-6">
							<p>{content.about.descPara1}</p>
							<p>{content.about.descPara2}</p>
						</div>

						<img className="img-fluids col-md-6 truckImg" alt="truckImg" src={truck} />
					</div>
				</Container>
			</Section>

			{/* Our Values */}
			<Section title={content.values.sectionTitle}>
				<Container>
					<div className={"row row-cols-md-3 row-cols-2 row-cols-lg-3 padding-0  py-5"}>
						{content.values.coreValues.map((value, index) => {
							const valueIcon = require(`../assets/images/${value.icon}.svg`).default;
							if (index === 2) {
								return <CoreValuesBlock icon={valueIcon} title={value.title} key={index} midVal />;
							} else {
								return <CoreValuesBlock icon={valueIcon} title={value.title} key={index} />;
							}
						})}
					</div>
				</Container>
			</Section>

			{/* Our Network */}
			<Section
				id="our-network"
				title={
					<>
						Our <span class="clrText">Distribution</span> Network
					</>
				}
			>
				<Container>
					<div className="text-center">
						<img className="img-fluid netImg" alt="networkImage" src={networkMap} />
					</div>
				</Container>
			</Section>

			{/* Our Partners */}
			<Section id="our-partners" clr title={content.partner.sectionTitle}>
				<Container>
					<div className={"text-center row row-cols-4 padding-0 mx-5 "}>
						{content.partner.partners.map((partner, index) => {
							const partnerLogo = require(`../assets/logos/${partner.logo}.png`).default;
							return <PartnerBlock logo={partnerLogo} key={index} />;
						})}
					</div>
				</Container>
			</Section>

			{/* Our Team */}
			<Section title={content.team.sectionTitle}>
				<Container>
					<div className={"row row-cols-1 row-cols-sm-1 row-cols-md-3 row-cols-lg-3 paddingTeam "}>
						{content.team.members.map((member, index) => {
							const memberPortrait = require(`../assets/images/${member.portrait}.png`).default;
							return (
								<TeamBlock
									portrait={memberPortrait}
									name={member.name}
									designation={member.designation}
									key={index}
								/>
							);
						})}
					</div>
				</Container>
			</Section>
		</Layout>
	);
};

export default IndexPage;
