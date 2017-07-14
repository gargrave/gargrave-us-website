import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import ExperienceDetail from './ExperienceDetail'

import data from '../../data/experience'

class WorkHistorySection extends Component {
  render () {
    return (
      <section id="experience" className="experience-section">
        <Typography type="headline" component="h2">
          Experience
        </Typography>

        {data.map((experience, i) => <ExperienceDetail key={i} experience={experience} />)}
      </section>
    )
  }
}

export default WorkHistorySection
