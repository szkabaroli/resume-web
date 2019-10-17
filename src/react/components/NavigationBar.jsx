import React, {Component} from 'react'
import { scrollTo } from '../../shared/utils.js'

/* #sidenav(:class="{'opened' : opened}")
			+mobile-link("Home")(@click="scrollTo('#hero-section'); opened = !opened")
			+mobile-link("About")(@click="scrollTo('#about-section'); opened = !opened")
			+mobile-link("Experience")(@click="scrollTo('#experience-section'); opened = !opened")
			+mobile-link("Skills")(@click="scrollTo('#skills-section'); opened = !opened")
			+mobile-link("Education")(@click="scrollTo('#education-section'); opened = !opened")
			+mobile-link("Social")(@click="scrollTo('#contact-section'); opened = !opened") */

class NavigationBar extends Component {

	constructor(props) {
		super(props)

		this.state = {
			opened: false
		}
	}

	scrollToMobile(to) {
		this.setState({
			opened: false
		})
		scrollTo(to)
	}

	render() {
		const { top } = this.props
		const { opened } = this.state

		return (
			<header id="navigation-bar" className={!top ? 'invert' : null}>
				<div id="sidenav" className={opened ? 'opened' : null}>
					<button onClick={this.scrollToMobile.bind(this, '#hero-section')}>Home</button>
					<button onClick={this.scrollToMobile.bind(this, '#about-section')}>About</button>
					<button onClick={this.scrollToMobile.bind(this, '#experience-section')}>Experience</button>
					<button onClick={this.scrollToMobile.bind(this, '#skills-section')}>Skills</button>
					<button onClick={this.scrollToMobile.bind(this, '#education-section')}>Education</button>
					<button onClick={this.scrollToMobile.bind(this, '#contact-section')}>Social</button>
				</div>
				<div className="container">
					<nav className="navigation-inner">
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
	
						<div className={opened ? 'hmb-container opened' : 'hmb-container'} onClick={() => { this.setState({opened: !opened}) }}>
							<div className="bar"></div>
							<div className="bar"></div>
							<div className="bar"></div>
						</div>
					</nav>
				</div>
			</header>
		)
	}
	
}

export default NavigationBar
