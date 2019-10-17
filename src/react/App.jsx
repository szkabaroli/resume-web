import React, { Component } from 'react'

import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

import { getScrollTop, debounce } from '../shared/utils.js'
import { getTexts, getExperienceTimeline, getSkills } from '../shared/service.js'

class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			texts: {
				hero: {
					welcome: '',
					role: 'adsf',
					contacts: {
						phone: '',
						email: '',
						address: '',
						birthdate: ''
					}
				},
				about: {
					title: '',
					text: ''
				},
				experience: {
					title: '',
					text: '	'
				},
				skills: {
					title: '',
					text: ''
				},
				education: {
					title: '',
					text: ''
				},
				contact: {
					title: ''
				}
			},
			timeline: {},
			skills: {
				languages: [],
				frameworks: [],
				technologies: []
			},
			schools: {},
			top: true
		}

		this.debounceScroll = debounce(this.handleScroll.bind(this), 0)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.debounceScroll)
	}

	handleScroll(e) {
		this.setState({
			top: getScrollTop() == 0
		})
	}

	async componentWillMount() {
		window.addEventListener('scroll', this.debounceScroll)

		let data = await getTexts()
		this.setState({ texts: data })
		data = await getExperienceTimeline()
		this.setState({ timeline: data })
		data = await getSkills()
		this.setState({ skills: data })
	}

	render() {
		const { texts, top, timeline, skills, schools } = this.state

		return (
			<div className="main" onScroll={this.handleScroll}>
				<NavigationBar top={top} />
				<HeroSection welcome={texts.hero.welcome} role={texts.hero.role} contacts={texts.hero.contacts} />
				<AboutSection title={texts.about.title} text={texts.about.text} />
				<ExperienceSection title={texts.experience.title} text={texts.experience.text} timeline={Object.values(timeline)} />
				<SkillsSection title={texts.skills.title} text={texts.skills.text} skills={skills} />
				<EducationSection title={texts.education.title} text={texts.education.text} schools={Object.values(schools)} />
				<ContactSection title={texts.contact.title} />
				<Footer />
			</div>
		)
	}
}

export default App
