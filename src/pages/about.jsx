import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>

								<div className="tech-break" style={{ paddingTop: '50px' }}>
									<h3>Technologies</h3>
								</div>
								<div className="technology">
									<div className="tech-title">Typescript</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '75%', background: 'black' }}>75%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">React JS</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '85%', background: 'black' }}>85%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">Vue JS</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '80%', background: 'black' }}>75%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">Angular</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '70%', background: 'black' }}>75%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">Jest</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '70%', background: 'black' }}>75%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">Express JS</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '75%', background: 'black' }}>75%</div>
									</div>
								</div>
								<div className="technology">
									<div className="tech-title">Mongo DB</div>
									<div className="progress">
										<div className="progress-bar" style={{ width: '75%', background: 'black' }}>75%</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
