import React from 'react'

const HeroSection = props => {
	const { welcome, role, contacts } = props

	return (
		<section id="hero-section">
			<div className="container-fluid">
				<div className="row">
					<div className="profile">
						<div className="me" style={{ backgroundImage: 'url("/images/me.png")' }}></div>
						<div className="details">
							<h1>{welcome}</h1>
							<p>{role}</p>
							<div className="hr-line"></div>
							<ul>
								<li>
									<i className="lni-phone-handset"></i>
									<p> Phone: <a href={`tel:${contacts.phone}`}>{contacts.phone}</a></p>
								</li>
								<li>
									<i className="lni-envelope"></i>
									<p>
										Email: <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
									</p>
								</li>
								<li>
									<i className="lni-apartment"></i>
									<p> Address: {contacts.address}</p>
								</li>
								<li>
									<i className="lni-calendar"></i>
									<p> Date of Birth: {contacts.birthdate}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
