import React, { Component } from 'react'
import { array, shape, string } from 'prop-types'

import Typography from 'material-ui/Typography'

import './WorkDetail.css'

class WorkDetail extends Component {
  render () {
    const { jobTitle, company, dates, summary, bullets } = this.props.workData
    return (
      <section className="work-detail-container">
        <div className="work-detail-header">
          <h3 className="work-detail-header-jobtitle">
            {jobTitle && `${jobTitle}, `} {company}
          </h3>
          <h4 className="work-detail-header-dates">
            {dates}
          </h4>
        </div>

        <p className="work-detail-summary">
          {summary}
        </p>

        <ul>
          {bullets.map((b, i) => {
            return (
              <li key={i}>
                {b}
              </li>
            )
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
