import React, { FC } from "react"

interface IProps {
  title: string
}

const ContactSection: FC<IProps> = ({ title }) => {
  return (
    <section id="contact-section">
      <div className="container">
        <div className="row contact">
          <h1 className="headline line">{title}</h1>
        </div>
        <div className="row">
          <div className="social-links">
            <a href="https://github.com/szkabaroli" target="_blank" className="btn github">
              <i className="lni-github"></i>
              <p> Github</p>
            </a>
            <a href="https://www.facebook.com/rolandakos.szarkakovacs" target="_blank" className="btn facebook">
              <i className="lni-facebook"></i>
              <p> Facebook</p>
            </a>
            <a
              href="https://www.linkedin.com/in/szarka-kovács-roland-4b7008196"
              target="_blank"
              className="btn linkedin"
            >
              <i className="lni-linkedin"></i>
              <p> LinkedIn</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
