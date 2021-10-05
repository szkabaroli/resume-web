import React, { useCallback, useEffect, useState } from "react"

import NavigationBar from "./components/NavigationBar"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ExperienceSection from "./components/ExperienceSection"
import SkillsSection from "./components/SkillsSection"
import EducationSection from "./components/EducationSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

import { getScrollTop, debounce } from "../shared/utils"
import { getTexts, getExperienceTimeline, getSkills, getSchools } from "../shared/service"

const App = () => {
  const [texts, setTexts] = useState({
    hero: {
      welcome: "",
      role: "adsf",
      contacts: {
        phone: "",
        email: "",
        address: "",
        birthdate: ""
      }
    },
    about: {
      title: "",
      text: ""
    },
    experience: {
      title: "",
      text: "	"
    },
    skills: {
      title: "",
      text: ""
    },
    education: {
      title: "",
      text: ""
    },
    contact: {
      title: ""
    }
  })
  const [atTop, setAtTop] = useState(true)
  const [timeline, setTimeline] = useState({})
  const [schools, setSchools] = useState({})
  const [skills, setSkills] = useState({
    languages: [],
    frameworks: [],
    technologies: []
  })

  const handleScroll = useCallback(() => {
    setAtTop(getScrollTop() === 0)
    console.log('sc')
  }, [])

  const debouncedScroll = useCallback(
    debounce(() => {}, 15),
    [handleScroll]
  )

  useEffect(() => {
    window.addEventListener("scroll", debouncedScroll)

    const create = async () => {
      const [texts, timeline, skills, schools] = await Promise.all([
        getTexts(),
        getExperienceTimeline(),
        getSkills(),
        getSchools()
      ])

      setTexts(texts as any)
      setTimeline(timeline)
      setSkills(skills)
      setSchools(schools)
    }

    create()

    return () => window.removeEventListener("scroll", debouncedScroll)
  }, [])

  return (
    <div className="main" onScroll={() => handleScroll()}>
      <NavigationBar atTop={atTop} />
      <HeroSection welcome={texts.hero.welcome} role={texts.hero.role} contacts={texts.hero.contacts} />
      <AboutSection title={texts.about.title} text={texts.about.text} />
      <ExperienceSection
        title={texts.experience.title}
        text={texts.experience.text}
        timeline={Object.values(timeline)}
      />
      <SkillsSection title={texts.skills.title} text={texts.skills.text} skills={skills} />
      <EducationSection title={texts.education.title} text={texts.education.text} schools={Object.values(schools)} />
      <ContactSection title={texts.contact.title} />
      <Footer />
    </div>
  )
}

export default App
