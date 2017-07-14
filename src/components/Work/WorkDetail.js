import React, { Component } from 'react'
import { array, shape, string } from 'prop-types'
import Markdown from 'markdown-it'

import './WorkDetail.css'

const md = new Markdown()

class WorkDetail extends Component {
  render () {
    const { jobTitle, company, dates, summary, bullets } = this.props.workData
    return (
      <section className="work-detail-container">
        <div className="work-detail-header">
          <h3 className="work-detail-header-jobtitle">
            {jobTitle && `${jobTitle}, `} {company}
          </h3>

          <h4 className="work-detail-header-dates" dangerouslySetInnerHTML={{ __html: md.renderInline(dates) }} />
        </div>

        <p className="work-detail-summary" dangerouslySetInnerHTML={{ __html: md.renderInline(summary) }} />

        <ul className="work-detail-bullets">
          {bullets.map((bullet, i) => {
            return <li key={i} dangerouslySetInnerHTML={{ __html: md.renderInline(bullet) }} />
          })}
        </ul>
      </section>
    )
  }
}

WorkDetail.propTypes = {
  workData: shape({
    jobTitle: string.isRequired,
    company: string.isRequired,
    dates: string.isRequired,
    summary: string.isRequired,
    bullets: array.isRequired
  }).isRequired
}

export default WorkDetail
