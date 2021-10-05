import React, { FC, useCallback, useState } from "react"
import { scrollTo } from "../../shared/utils"

interface IProps {
  atTop: boolean
}

const NavigationBar: FC<IProps> = ({ atTop }) => {
  const [opened, setOpened] = useState(false)

  const scrollToMobile = useCallback((to: string) => {
    setOpened(false)
    scrollTo(to)
  }, [])

  return (
    <header id="navigation-bar" className={!atTop ? "invert" : null}>
      <div id="sidenav" className={opened ? "opened" : null}>
        <button onClick={() => scrollToMobile("#hero-section")}>Home</button>
        <button onClick={() => scrollToMobile("#about-section")}>About</button>
        <button onClick={() => scrollToMobile("#experience-section")}>Experience</button>
        <button onClick={() => scrollToMobile("#skills-section")}>Skills</button>
        <button onClick={() => scrollToMobile("#education-section")}>Education</button>
        <button onClick={() => scrollToMobile("#contact-section")}>Social</button>
      </div>
      <div className="container">
        <nav className="navigation-inner">
          <a className="brand" onClick={scrollTo.bind(this, "#hero-section")}>
            Szarka-Kovács Roland
          </a>
          <ul className="links">
            <li>
              <button onClick={() => scrollTo("#about-section")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#experience-section")}>Experience</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#skills-section")}>Skills</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#education-section")}>Education</button>
            </li>
            <li>
              <button onClick={() => scrollTo("#contact-section")}>Social</button>
            </li>
          </ul>
          <ul className="social-links">
            <li>
              <a href="https://github.com/szkabaroli" target="_blank">
                <i className={atTop ? "lni-github" : "lni-github-original"}></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/rolandakos.szarkakovacs" target="_blank">
                <i className={atTop ? "lni-facebook" : "lni-facebook-filled"}></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/szarka-kovács-roland-4b7008196" target="_blank">
                <i className={atTop ? "lni-linkedin" : "lni-linkedin-filled"}></i>
              </a>
            </li>
          </ul>

          <div
            className={opened ? "hmb-container opened" : "hmb-container"}
            onClick={() => setOpened(!opened )}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavigationBar
