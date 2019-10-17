import React from 'react'
import { download } from '../../shared/utils.js';

const AboutSection = props => {
	const { title, text } = props

	return (
		<section id="about-section">
			<div className="about">
				<h1 className="headline line">{title}</h1>
				<p className="text">{text}</p>
				<button onClick={download.bind(this, '/docs/resume.pdf', 'resume.pdf')} className="btn download">
					<i className="lni-download"></i>
					<p> Download CV</p>
				</button>
			</div>
		</section>
	)
}

export default AboutSection