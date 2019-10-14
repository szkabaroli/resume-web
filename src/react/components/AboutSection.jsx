import React from 'react'

const AboutSection = props => {
	const { title, text } = props

	return (
		<section id="about-section">
			<div className="container">
				<div className="row about">
					<h1 className="headline line">{title}</h1>
					<p className="text">{text}</p>
					<button className="btn download">
						<i className="lni-download"></i>
						<p> Download CV</p>
					</button>
				</div>
			</div>
		</section>
	)
}

export default AboutSection