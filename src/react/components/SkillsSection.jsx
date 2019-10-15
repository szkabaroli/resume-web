import React from 'react'

const SkillsSection = props => {
	const { title, text, skills } = props

	return (
		<section id="skills-section">
			<div className="container">
				<div className="row skills">
					<h1 className="headline line">{title}</h1>
					<p>{text}</p>
				</div>
				<div className="row">
					<h2 className="s-headline">Languages</h2>
				</div>
				<div className="row">
					{skills.languages.map((item, index) => (
						<div key={index} className="col-12 col-sm-6 col-lg-4">
							<div className="aspect-wrapper">
								<div className="skill-card">
									<img src={item.image} />
									<p>{item.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<h2 className="s-headline">Frameworks & Libraries</h2>
				</div>
				<div className="row">
					{skills.frameworks.map((item, index) => (
						<div key={index} className="col-12 col-sm-6 col-lg-4">
							<div className="aspect-wrapper">
								<div className="skill-card">
									<img src={item.image} />
									<p>{item.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="row">
					<h2 className="s-headline">Technologies</h2>
				</div>
				<div className="row">
					{skills.technologies.map((item, index) => (
						<div key={index} className="col-12 col-sm-6 col-lg-4">
							<div className="aspect-wrapper">
								<div className="skill-card">
									<img src={item.image} />
									<p>{item.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default SkillsSection