import React from 'react'

const ExperienceSection = props => {
	const { title, text, timeline } = props

	return (
		<section id="experience-section">
			<div className="container">
				<div className="row experience">
					<h1 className="headline line white"></h1>
					<p className="text"></p>
					<div className="timeline-container">
						{timeline.map(item => {
							return (
								<div className="time-section">
									<div className="side">
										<span className="date">{item.date}</span>
										<span className="line"></span>
									</div>
									<p className="title">{item.event}</p>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExperienceSection

/* .container
			.row
				.experience
					h1.headline.line.white My Experience
					p.description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					.container
						.time-section(v-for="item in timeline")
							div.side
								span.date {{item.date}}
								span.line
							p.title {{item.event}} */
