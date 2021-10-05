import React, { FC } from "react"

// TODO: implement this
interface ISchool {
  name: string
  from: string
  to: string
  region: string
}

interface IProps {
  title: string
  text: string
  schools: ISchool[]
}

const EducationSection: FC<IProps> = props => {
  const { title, text, schools } = props

  /*const schools = [
    {
      name: "Szegedi SzC Gábor Dénes Szakgimnáziuma és Szakközépiskolája",
      from: "2014",
      to: "2019",
      region: "Information Technology"
    },
    {
      name: "Szegedi Tudományegyetem - Természettudományi és Informatikai Kar",
      from: "2019",
      to: "Present",
      region: "Computer Science Engineering"
    }
  ]*/

  return (
    <section id="education-section">
      <div className="container">
        <div className="row education">
          <h1 className="headline line white">{title}</h1>
          <p className="text">{text}</p>
        </div>
        <div className="row">
          {schools.map((item, index) => (
            <div className="col-12">
              <div className="card">
                <p className="date">{`${item.from}-${item.to}`}</p>
                <div>
                  <i className="lni-home"></i>
                  <h4>{item.name}</h4>
                </div>
                <div>
                  <i className="lni-home"></i>
                  <h4>{item.region}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EducationSection
