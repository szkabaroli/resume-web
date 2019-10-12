import React from 'react'
import NavigationBar from './components/NavigationBar'
import HeroSection from './components/HeroSection'
import styles from './App.scss'

console.log(styles)

const App = () => {
	return (
		<div>
			<NavigationBar />
			<HeroSection />
		</div>
	)
}

export default App