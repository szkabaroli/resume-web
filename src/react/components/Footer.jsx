import React from 'react'

const Footer = props => {
	const currentYear = new Date().getFullYear()

	return (
		<footer id="footer">
			<p>© {currentYear} Szarka-Kovács Roland. All rights reserved</p>
		</footer>
	)
}

export default Footer
