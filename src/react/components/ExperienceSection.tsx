import React, { FC } from 'react'

interface IProps {
  title: string
  text: string
  timeline: any[]
}

const ExperienceSection: FC<IProps> = props => {
	const { title, text, timeline } = props

	return (
		<section id="experience-section">
			<div className="container">
				<div className="row">
					<div className="experience">
						<h1 className="headline line white">{title}</h1>
						<p className="text">{text}</p>
						<div className="timeline-container">
							{timeline.map((item, index) => {
								return (
									<div key={index} className="time-section">
										<div className="side">
											<span className="date">{item.date}</span>
											<span className="line"></span>
										</div>
										<p className="event">{item.event}</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ExperienceSection