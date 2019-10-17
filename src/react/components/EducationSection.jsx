import React from 'react'

const EducationSection = props => {
	const { title, text } = props

	const schools = [
		{ name: 'Szegedi SzC Gábor Dénes Szakgimnáziuma és Szakközépiskolája', from: '2014', to: '2019', region: 'Information Technology' },
		{ name: 'Szegedi Tudományegyetem - Természettudományi és Informatikai Kar', from: '2019', to: 'Present', region: 'Computer Science Engineering' },
	]

	return (
		<section id="education-section">
			<div className="container">
				<div className="row education">
					<h1 className="headline line white">{title}</h1>
					<p className="text">{text}</p>
				</div>
				<div className="row">
					{schools.map((item, index) => (
						<div className="col-12">
							<div className="card">
								<p className="date">{`${item.from}-${item.to}`}</p>
								<div>
									<i className="lni-home"></i>
									<h4>{item.name}</h4>
								</div>
								<div>
									<i className="lni-home"></i>
									<h4>{item.region}</h4>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default EducationSection

/* section#education-section
		.container
			.row.education
				h1.headline.line.white Education
				p While completing my IT studies I got to know different technologies.
					| This position has given me key employability skills while also allowing me to experience working in a professional and fast-paced work environment.
			.row
				.col-12(v-for="school in schools")
					.card
						p.date {{`${school.from}-${school.to}`}}
						div 
							i(class="lni-home") 
							h4 {{school.name}}
						div 
							i(class="lni-graduation") 
							h4 {{school.region}} */
