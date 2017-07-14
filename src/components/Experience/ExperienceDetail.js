import React, { Component } from 'react'
import { array, shape, string } from 'prop-types'

import Markdown from 'markdown-it'

import './ExperienceDetail.css'

const md = new Markdown()

class WorkDetail extends Component {
  render () {
    const { jobTitle, company, dates, summary, bullets } = this.props.experience
    return (
      <section className="experience-detail-container">
        <div className="experience-detail-header">
          <h3 className="experience-detail-jobtitle">
            {jobTitle && `${jobTitle}, `} {company}
          </h3>

          <h4 className="experience-detail-dates" dangerouslySetInnerHTML={{ __html: md.renderInline(dates) }} />
        </div>

        <p className="experience-detail-summary" dangerouslySetInnerHTML={{ __html: md.renderInline(summary) }} />

        <ul className="experience-detail-bullets">
          {bullets.map((bullet, i) => {
            return <li key={i} dangerouslySetInnerHTML={{ __html: md.renderInline(bullet) }} />
          })}
        </ul>
      </section>
    )
  }
}

WorkDetail.propTypes = {
  experience: shape({
    jobTitle: string.isRequired,
    company: string.isRequired,
    dates: string.isRequired,
    summary: string.isRequired,
    bullets: array.isRequired
  }).isRequired
}

export default WorkDetail
