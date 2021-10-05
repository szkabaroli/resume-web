import React, { FC } from 'react'

const Footer: FC = props => {
	const currentYear = new Date().getFullYear()

	return (
		<footer id="footer">
			<p>© {currentYear} Szarka-Kovács Roland. All rights reserved</p>
		</footer>
	)
}

export default Footer
