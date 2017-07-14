import React, { Component } from 'react'
import Typography from 'material-ui/Typography'

import WorkDetail from './WorkDetail'
import './WorkHistorySection.css'

import data from '../../data/experience'

class WorkHistorySection extends Component {
  render () {
    return (
      <section id="experience" className="work-section">
        <Typography type="headline" component="h2">
          Experience
        </Typography>

        {data.map((workData, i) => <WorkDetail key={i} workData={workData} />)}
      </section>
    )
  }
}

export default WorkHistorySection
