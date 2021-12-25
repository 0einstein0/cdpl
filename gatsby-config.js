module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Crystal Distributors",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-root-import",
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -20,
				duration: 200,
			},
		},
	],
};
