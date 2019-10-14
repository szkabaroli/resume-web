import React, { Component } from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'

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
					text: ''
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
			skills: {},
			top: true
		}

		this.debounceScroll = debounce(this.handleScroll.bind(this), 0)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.debounceScroll)
	}

	handleScroll(e) {
		console.log('fdsa')
		this.setState({
			top: getScrollTop() == 0
		})
	}

	async componentDidMount() {
		window.addEventListener('scroll', this.debounceScroll)
		let data = await getTexts()
		this.setState({ texts: data })
		data = await getExperienceTimeline()
		this.setState({ timeline: data })
		data = await getSkills()
		this.setState({ skills: data })
	}

	render() {
		const { texts, top, timeline } = this.state

		return (
			<div onScroll={this.handleScroll}>
				<NavigationBar top={top} />
				<HeroSection welcome={texts.hero.welcome} role={texts.hero.role} contacts={texts.hero.contacts} />
				<AboutSection title={texts.about.title} text={texts.about.text} />
				<ExperienceSection title={texts.experience.title} text={texts.experience.text} timeline={timeline} />
			</div>
		)
	}
}

export default App
