import React from "react";

import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Jumbotron from "../components/jumbotron";

const IndexPage = (props) => {
	const sources = [
		props.data.imageOne.childImageSharp.fluid,
		{
			...props.data.imageTwo.childImageSharp.fluid,
			media: '(max-width: 600px)',
		},
	]

	return (
		<Layout>
			<div style={{
				position: 'fixed',
				width: '200%',
				height: '200%',
				top: '-50%',
				left: '-50%',
				zIndex: -10
			}}>
				<Img
					id="bg-image"
					fluid={sources}
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						minWidth: "50%",
						minHeight: "50%",
						margin: 'auto',
						transform: 'scale(.5)'
					}}
				/>
			</div>
			<SEO title="Home" />
			<Jumbotron />
		</Layout>
	);
}

export default IndexPage;

export const desktopBgImage = graphql`
	fragment desktopBgImage on File {
		childImageSharp {
			fluid(maxWidth: 1800) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;

export const pageQuery = graphql`
	query {
		imageOne: file(relativePath: { eq: "dave-at-computer-bw.jpg" }) {
			...desktopBgImage
		}
		imageTwo: file(relativePath: { eq: "dave-at-computer-bw-mobile.jpg" }) {
			...desktopBgImage
		}
		
	}
`;
