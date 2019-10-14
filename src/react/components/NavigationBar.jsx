import React from 'react'
import { scrollTo } from '../../shared/utils.js'

const NavigationBar = props => {
	const { top } = props

	return (
		<header id="navigation-bar" className={!top ? 'invert' : null}>
			<div className="container">
				<nav className="row navigation-inner">
					<a className="brand" onClick={scrollTo.bind(this, '#hero-section')}>
						Szarka-Kovács Roland
					</a>
					<ul className="links">
						<li>
							<button onClick={scrollTo.bind(this, '#about-section')}>About</button>
						</li>
						<li>
							<button onClick={scrollTo.bind(this, '#experience-section')}>Experience</button>
						</li>
						<li>
							<button onClick={scrollTo.bind(this, '#skills-section')}>Skills</button>
						</li>
						<li>
							<button onClick={scrollTo.bind(this, '#education-section')}>Education</button>
						</li>
						<li>
							<button onClick={scrollTo.bind(this, '#contact-section')}>Social</button>
						</li>
					</ul>
					<ul className="social-links">
						<li>
							<a href="https://github.com/szkabaroli" target="_blank">
								<i className={top ? 'lni-github' : 'lni-github-original'}></i>
							</a>
						</li>
						<li>
							<a href="https://www.facebook.com/rolandakos.szarkakovacs" target="_blank">
								<i className={top ? 'lni-facebook' : 'lni-facebook-filled'}></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/szarka-kovács-roland-4b7008196" target="_blank">
								<i className={top ? 'lni-linkedin' : 'lni-linkedin-filled'}></i>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default NavigationBar
