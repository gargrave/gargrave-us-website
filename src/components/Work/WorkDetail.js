import React, { Component } from 'react'
import { array, shape, string } from 'prop-types'

import './WorkDetail.css'

class WorkDetail extends Component {
  render () {
    const { jobTitle, company, dates, summary, bullets } = this.props.workData
    return (
      <section className="work-detail-container">
        <div className="work-detail-header">
          <p><strong>{jobTitle}, {company}</strong></p>
          <p>{dates}</p>
        </div>
        <p>{summary}</p>

        <ul>
          {bullets.map((b, i) => {
            return <li key={i}>{b}</li>
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
